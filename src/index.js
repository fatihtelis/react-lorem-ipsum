import React from 'react';
import PropTypes from 'prop-types';
import words from './data/words.json';

// Default Props of the Component
const defaultProps = {
  pCount: 1,
  avgWordsPerSentence: 8,
  avgSentencesPerParagraph: 8,
  startWithLoremIpsum: true,
};

const LoremIpsum = ({
  pCount,
  avgWordsPerSentence,
  avgSentencesPerParagraph,
  startWithLoremIpsum,
}) => {
  // Standard deviation percentage for words and sentences
  const stDevPercentage = 0.2;

  // Get random integers from a range great equal or greater than 1
  const randomPositiveFromRange = (min, max) => {
    const random = Math.round(Math.random() * (max - min)) + min;
    return Math.max(1, random);
  };

  const getStandardDeviation = (value, percentage) => Math.round(value * percentage);

  // Get a random word from Latin wPositiveord list
  const getRandomWord = () => words[randomPositiveFromRange(0, words.length - 1)];

  // Create a Sentence by using random words
  const createSentence = () => {
    // Try to parse if prop is sent in string format
    let awis = parseInt(avgWordsPerSentence, 10);
    // Replace with defaultProps value if it could not be parsed
    if (Number.isNaN(awis)) awis = defaultProps.avgWordsPerSentence;
    let sentence = '';
    // Standard Deviation
    const stDev = getStandardDeviation(awis, stDevPercentage);
    const sentenceLength = randomPositiveFromRange(awis - stDev, awis + stDev);
    for (let i = 0; i < sentenceLength; i += 1) {
      const word = getRandomWord();
      sentence += `${word} `;
    }
    sentence = `${sentence.charAt(0).toUpperCase() + sentence.slice(1).trim()}.`;
    return sentence;
  };

  // Create a paragraph by joining sentences
  const createParagraph = ({ firstParagraph }) => {
    // Try to parse if prop is sent in string format
    let asip = parseInt(avgSentencesPerParagraph, 10);
    // Replace with defaultProps value if it could not be parsed
    if (Number.isNaN(asip)) asip = defaultProps.avgSentencesPerParagraph;

    let paragraph = '';
    // Standard Deviation
    const stDev = getStandardDeviation(asip, stDevPercentage);
    const paragraphLength = randomPositiveFromRange(asip - stDev, asip + stDev);
    for (let i = 0; i < paragraphLength; i += 1) {
      const swli = typeof startWithLoremIpsum === 'boolean'
        ? startWithLoremIpsum
        : defaultProps.startWithLoremIpsum;
      if (i === 0 && firstParagraph && swli) {
        paragraph += `Lorem ipsum odor amet, ${getRandomWord()} ${getRandomWord()} ${getRandomWord()}. `;
      } else {
        paragraph += `${createSentence()} `;
      }
    }
    return <p key={paragraph}>{paragraph.trim()}</p>;
  };

  // Create a Lorem Ipsum block with desired paragraph count
  const createLoremIpsum = () => {
    const paragraphs = [];
    let p = parseInt(pCount, 10);
    if (Number.isNaN(p)) p = defaultProps.pCount;
    for (let i = 0; i < p; i += 1) {
      paragraphs.push(createParagraph({ firstParagraph: i === 0 }));
    }

    return paragraphs;
  };

  return <>{createLoremIpsum()}</>;
};

LoremIpsum.propTypes = {
  pCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgWordsPerSentence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgSentencesPerParagraph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startWithLoremIpsum: PropTypes.bool,
};

LoremIpsum.defaultProps = {
  pCount: defaultProps.pCount,
  avgWordsPerSentence: defaultProps.avgWordsPerSentence,
  avgSentencesPerParagraph: defaultProps.avgSentencesPerParagraph,
  startWithLoremIpsum: defaultProps.startWithLoremIpsum,
};
export default LoremIpsum;
