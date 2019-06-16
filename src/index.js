import React from 'react';
import PropTypes from 'prop-types';
import words from './data/words.json';

const defaultProps = {
  p: 1,
  avgWordInSentence: 5,
  avgSentenceInParagraph: 5,
  startWithLoremIpsum: true,
};

const LoremIpsum = ({
  p, avgWordInSentence, avgSentenceInParagraph, startWithLoremIpsum,
}) => {
  // Get random integer from a range
  const randomFromRange = (min, max) => Math.round(Math.random() * (max - min)) + min;

  // Get a random word from Latin word list
  const getRandomWord = () => words[randomFromRange(0, words.length - 1)];

  // Create a Sentence by using random words
  const createSentence = () => {
    // Try to parse if prop is sent in string format
    let awis = parseInt(avgWordInSentence, 10);
    // Replace with defaultProps value if it could not be parsed
    if (Number.isNaN(awis)) awis = defaultProps.avgWordInSentence;

    let sentence = '';
    const sentenceLength = randomFromRange(awis - 2, awis + 2);
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
    let asip = parseInt(avgSentenceInParagraph, 10);
    // Replace with defaultProps value if it could not be parsed
    if (Number.isNaN(asip)) asip = defaultProps.avgSentenceInParagraph;

    let paragraph = '';
    const paragraphLength = randomFromRange(asip - 2, asip + 2);
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
    for (let i = 0; i < p; i += 1) {
      paragraphs.push(createParagraph({ firstParagraph: i === 0 }));
    }
    return paragraphs;
  };

  return <>{createLoremIpsum()}</>;
};

LoremIpsum.propTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgWordInSentence: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgSentenceInParagraph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  startWithLoremIpsum: PropTypes.bool,
};

LoremIpsum.defaultProps = {
  p: defaultProps.p,
  avgWordInSentence: defaultProps.avgWordInSentence,
  avgSentenceInParagraph: defaultProps.avgSentenceInParagraph,
  startWithLoremIpsum: defaultProps.startWithLoremIpsum,
};
export default LoremIpsum;
