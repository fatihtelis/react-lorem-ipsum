import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './avatar';
import {
  name, surname, fullname, username,
} from './user';
import {
  randomFromRange,
  randomPositiveFromRange,
  getStandardDeviation,
  parseIntWithDefault,
} from './utils';
import words from './data/words.json';

// Default Props of the Component
const defaultProps = {
  p: 1,
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true,
};

// Standard deviation percentage for words and sentences
const stDevPercentage = 0.25;

// Get a random word from Latin word list
const createWord = () => words[randomFromRange(0, words.length - 1)];

// Get a punctuation for middle of the sentence randomly
const midPunctuation = (sentenceLength) => {
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
    sentence += `${createWord()}${midPunc.position === i ? midPunc.punctuation : ''} `;
  }
  sentence = `${sentence.charAt(0).toUpperCase() + sentence.substr(1).trim()}${endPunctuation()}`;
  return sentence;
};

// Create a paragraph by joining sentences
const createParagraph = ({
  firstParagraph,
  avgWordsPerSentence,
  avgSentencesPerParagraph,
  startWithLoremIpsum,
}) => {
  const aspp = parseIntWithDefault(avgSentencesPerParagraph, defaultProps.avgSentencesPerParagraph);
  const swli = typeof startWithLoremIpsum === 'boolean'
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
  const { p, ...otherProps } = props;
  const pCount = parseIntWithDefault(p, defaultProps.p);
  const paragraphs = [];
  for (let i = 0; i < pCount; i += 1) {
    paragraphs.push(
      createParagraph({
        firstParagraph: i === 0,
        ...otherProps,
      }),
    );
  }
  return paragraphs;
};

// Component create Lorem Ipsum as HTML
const LoremIpsum = (props) => {
  const paragraphs = loremIpsum(props);
  const html = paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>);
  return html;
};

LoremIpsum.propTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgWordsPerSentence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgSentencesPerParagraph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startWithLoremIpsum: PropTypes.bool,
};

LoremIpsum.defaultProps = {
  p: defaultProps.p,
  avgWordsPerSentence: defaultProps.avgWordsPerSentence,
  avgSentencesPerParagraph: defaultProps.avgSentencesPerParagraph,
  startWithLoremIpsum: defaultProps.startWithLoremIpsum,
};

export {
  LoremIpsum, Avatar, loremIpsum, name, surname, fullname, username,
};
export default LoremIpsum;
