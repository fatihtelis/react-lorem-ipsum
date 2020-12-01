import React from 'react';
import PropTypes from 'prop-types';

import {
  randomFromRange,
  randomPositiveFromRange,
  getStandardDeviation,
  parseIntWithDefault,
} from '../utils';
import words from '../data/words.json';

// Default Props of the Component
const defaultProps = {
  p: 1,
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true,
  random: true,
};

// Standard deviation percentage for words and sentences
const stDevPercentage = 0.25;

// Get a random word from Latin word list
const getRandomWord = () => words[randomFromRange(0, words.length - 1)];

// Get a specific word from Latin word list
const getWord = i => words[i % words.length];

// Get a punctuation for middle of the sentence randomly
const midPunctuation = sentenceLength => {
  const punctuations = [',', ';'];
  let punctuation;
  let position;
  if (sentenceLength > 6) {
    // 25% probability for punctuation
    const hasPunctuation = !!(Math.random() <= 0.25);
    if (hasPunctuation) {
      position = randomFromRange(2, sentenceLength - 3);
      punctuation = punctuations[randomFromRange(0, punctuations.length - 1)];
    }
  }
  return { punctuation, position };
};

// Get a punctuation for end of the sentence randomly
const endPunctuation = () => {
  const random = Math.random();
  // 1% probability exclamation mark, 4% probability question mark, 95% probability dot
  if (random > 0.99) return '!';
  if (random > 0.95) return '?';
  return '.';
};

// Create a Sentence by using random words
const createSentence = ({ withLoremIpsum, avgWordsPerSentence }) => {
  if (withLoremIpsum) return 'Lorem ipsum odor amet, consectetuer adipiscing elit.';
  const awps = parseIntWithDefault(avgWordsPerSentence, defaultProps.avgWordsPerSentence);
  const stDev = getStandardDeviation(awps, stDevPercentage);
  const sentenceLength = randomPositiveFromRange(awps - stDev, awps + stDev);
  const midPunc = midPunctuation(sentenceLength);

  let sentence = '';
  for (let i = 0; i < sentenceLength; i += 1) {
    sentence += `${getRandomWord()}${midPunc.position === i ? midPunc.punctuation : ''} `;
  }
  sentence = `${sentence.charAt(0).toUpperCase() + sentence.substr(1).trim()}${endPunctuation()}`;
  return sentence;
};

// Creates always the same text, averages are used as exacts.
const createStandardParagraph = ({ avgWordsPerSentence, avgSentencesPerParagraph }) => {
  let paragraph = '';
  for (let i = 0; i < avgSentencesPerParagraph; i += 1) {
    let sentence = '';
    for (let j = 0; j < avgWordsPerSentence; j += 1) {
      sentence += `${getWord(i * avgSentencesPerParagraph + j)} `;
    }
    paragraph += `${sentence.charAt(0).toUpperCase() + sentence.slice(1).trim()}. `;
  }
  return paragraph.trim();
};

// Create a paragraph by joining sentences
const createRandomParagraph = ({
  firstParagraph,
  avgWordsPerSentence,
  avgSentencesPerParagraph,
  startWithLoremIpsum,
}) => {
  const aspp = parseIntWithDefault(avgSentencesPerParagraph, defaultProps.avgSentencesPerParagraph);
  const swli =
    typeof startWithLoremIpsum === 'boolean'
      ? startWithLoremIpsum
      : defaultProps.startWithLoremIpsum;
  const stDev = getStandardDeviation(aspp, stDevPercentage);
  const paragraphLength = randomPositiveFromRange(aspp - stDev, aspp + stDev);

  let paragraph = '';
  for (let i = 0; i < paragraphLength; i += 1) {
    const withLoremIpsum = !!(i === 0 && firstParagraph && swli);
    paragraph += `${createSentence({ withLoremIpsum, avgWordsPerSentence })} `;
  }
  return paragraph.trim();
};

// Function create plain Lorem Ipsum
const loremIpsum = (props = {}) => {
  const { p, random, ...otherProps } = props;
  const pCount = parseIntWithDefault(p, defaultProps.p);
  const createParagraph = random ? createRandomParagraph : createStandardParagraph;
  return Array.from({ length: pCount }, (_, i) => i).map((_, i) =>
    createParagraph({
      firstParagraph: i === 0,
      ...otherProps,
    })
  );
};

// Component create Lorem Ipsum as HTML
const LoremIpsum = props => {
  const paragraphs = loremIpsum(props);
  // eslint-disable-next-line
  const html = paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  return html;
};

LoremIpsum.propTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgWordsPerSentence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgSentencesPerParagraph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startWithLoremIpsum: PropTypes.bool,
  random: PropTypes.bool,
};

LoremIpsum.defaultProps = defaultProps;

export { LoremIpsum, loremIpsum };
