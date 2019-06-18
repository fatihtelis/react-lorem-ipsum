import React from 'react';
import PropTypes from 'prop-types';
import Name from './user/name';
import Surname from './user/surname';
import FullName from './user/fullname';
import Username from './user/username';
import {
  randomFromRange,
  randomPositiveFromRange,
  getStandardDeviation,
  parseIntWithDefault,
} from './utils';
import words from './data/words.json';

// Default Props of the Component
const defaultProps = {
  pCount: 1,
  type: 'html',
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true,
};

// Standard deviation percentage for words and sentences
const stDevPercentage = 0.25;

const LoremIpsum = ({
  pCount,
  type,
  avgWordsPerSentence,
  avgSentencesPerParagraph,
  startWithLoremIpsum,
}) => {
  // Get a random word from Latin word list
  const getRandomWord = () => words[randomFromRange(0, words.length - 1)];

  // Get a punctuation for middle of the sentence randomly
  const getMidPunctuation = (sentenceLength) => {
    const punctuations = [',', ';'];
    let punctuation;
    let position;
    if (sentenceLength > 6) {
      // 25% probability for punctuation
      const hasPunctuation = Math.random() <= 0.25;
      if (hasPunctuation) {
        position = randomFromRange(2, sentenceLength - 3);
        punctuation = punctuations[randomFromRange(0, punctuations.length - 1)];
      }
    }
    return { punctuation, position };
  };

  // Get a punctuation for end of the sentence randomly
  const getEndPunctuation = () => {
    const random = Math.random();
    // 2.5% probability exclamation mark
    if (random > 0.975) return '!';
    // 7.5% probability question mark
    if (random > 0.9) return '?';
    // 90% probability dot
    return '.';
  };

  // Create a Sentence by using random words
  const createSentence = ({ withLoremIpsum }) => {
    if (withLoremIpsum) return 'Lorem ipsum odor amet, consectetuer adipiscing elit.';
    const awps = parseIntWithDefault(avgWordsPerSentence, defaultProps.avgWordsPerSentence);

    const stDev = getStandardDeviation(awps, stDevPercentage);
    const sentenceLength = randomPositiveFromRange(awps - stDev, awps + stDev);
    const midPunctuation = getMidPunctuation(sentenceLength);
    let sentence = '';
    for (let i = 0; i < sentenceLength; i += 1) {
      const word = getRandomWord();
      sentence += `${word}${midPunctuation.position === i ? midPunctuation.punctuation : ''} `;
    }
    sentence = `${sentence.charAt(0).toUpperCase()
      + sentence
        .slice(1)
        .toLowerCase()
        .trim()}${getEndPunctuation()}`;
    return sentence;
  };

  // Create a paragraph by joining sentences
  const createParagraph = ({ firstParagraph }) => {
    const aspp = parseIntWithDefault(
      avgSentencesPerParagraph,
      defaultProps.avgSentencesPerParagraph,
    );
    let paragraph = '';
    const stDev = getStandardDeviation(aspp, stDevPercentage);
    const paragraphLength = randomPositiveFromRange(aspp - stDev, aspp + stDev);
    for (let i = 0; i < paragraphLength; i += 1) {
      const swli = typeof startWithLoremIpsum === 'boolean'
        ? startWithLoremIpsum
        : defaultProps.startWithLoremIpsum;
      const withLoremIpsum = !!(i === 0 && firstParagraph && swli);
      paragraph += `${createSentence({ withLoremIpsum })} `;
    }
    if (type === 'plain') return paragraph.trim();
    return <p key={paragraph}>{paragraph.trim()}</p>;
  };

  // Create a Lorem Ipsum block with desired paragraph count
  const createLoremIpsum = () => {
    let p = parseInt(pCount, 10);
    if (Number.isNaN(p)) p = defaultProps.pCount;
    if (type === 'plain') {
      let paragraphs = '';
      for (let i = 0; i < p; i += 1) {
        paragraphs += `${createParagraph({ firstParagraph: i === 0 })}\n`;
      }
      return paragraphs.trim();
    }
    const paragraphs = [];
    for (let i = 0; i < p; i += 1) {
      paragraphs.push(createParagraph({ firstParagraph: i === 0 }));
    }
    return paragraphs;
  };

  return createLoremIpsum();
};

LoremIpsum.propTypes = {
  pCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  avgWordsPerSentence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgSentencesPerParagraph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startWithLoremIpsum: PropTypes.bool,
};

LoremIpsum.defaultProps = {
  pCount: defaultProps.pCount,
  type: defaultProps.type,
  avgWordsPerSentence: defaultProps.avgWordsPerSentence,
  avgSentencesPerParagraph: defaultProps.avgSentencesPerParagraph,
  startWithLoremIpsum: defaultProps.startWithLoremIpsum,
};

export {
  Name, Surname, FullName, Username,
};
export default LoremIpsum;
