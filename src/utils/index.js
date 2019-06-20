// Get random integers from a range
const randomFromRange = (min, max) => Math.round(Math.random() * (max - min)) + min;

// Get random integers from a range great equal or greater than 1
const randomPositiveFromRange = (min, max) => Math.max(1, randomFromRange(min, max));

// Get standard deviation amount by using percentage
const getStandardDeviation = (value, percentage) => Math.ceil(value * percentage);

// Try to parse a value and return default value if it could not parsed as number
const parseIntWithDefault = (value, defaultValue) => {
  let finalValue = parseInt(value, 10);
  if (Number.isNaN(finalValue)) finalValue = defaultValue;
  return finalValue;
};

const getRandomGender = () => {
  if (Math.random() >= 0.5) return 'male';
  return 'female';
};

export {
  randomFromRange,
  randomPositiveFromRange,
  getStandardDeviation,
  parseIntWithDefault,
  getRandomGender,
};
