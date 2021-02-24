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
  avgWordsPerHeading: 3,
  includeEndPunctuation: false,
};

// Standard deviation percentage for words
const stDevPercentage = 0.25;

// Get a random word from Latin word list
const getRandomWord = () => words[randomFromRange(0, words.length - 1)];

// Get a punctuation for end of the heading randomly
const endPunctuation = includeEndPunctuation => {
  if (includeEndPunctuation) {
    const random = Math.random();
    // 1% probability exclamation mark, 4% probability question mark, 95% probability dot
    if (random > 0.99) return '!';
    if (random > 0.95) return '?';
    return '.';
  }
  return '';
};

// Create a Heading by using random words
const loremHeading = ({ avgWordsPerHeading, includeEndPunctuation }) => {
  const awps = parseIntWithDefault(avgWordsPerHeading, defaultProps.avgWordsPerHeading);
  const stDev = getStandardDeviation(awps, stDevPercentage);
  const headingLength = randomPositiveFromRange(awps - stDev, awps + stDev);

  let heading = '';
  for (let i = 0; i < headingLength; i += 1) {
    heading += `${getRandomWord()} `;
  }
  heading = `${heading.charAt(0).toUpperCase() + heading.substr(1).trim()}${endPunctuation(
    includeEndPunctuation
  )}`;
  return heading;
};

// Component create Lorem Heading as HTML
const LoremHeading = props => {
  const heading = loremHeading(props);
  return heading;
};

LoremHeading.propTypes = {
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  avgWordsPerHeading: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  includeEndPunctuation: PropTypes.bool,
};

LoremHeading.defaultProps = defaultProps;

export { LoremHeading, loremHeading };
