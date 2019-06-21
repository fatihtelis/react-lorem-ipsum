import Avatar from './avatar';
import { randomFromRange, getRandomGender } from '../utils';
import names from '../data/names.json';
import surnames from '../data/surnames.json';
import usernames from '../data/usernames.json';

const name = (gender = 'all') => {
  const randomGender = getRandomGender();
  let finalGender = randomGender;
  if (['male', 'female'].includes(gender)) finalGender = gender;
  return names[finalGender][randomFromRange(0, names[finalGender].length - 1)];
};

const surname = () => surnames[randomFromRange(0, surnames.length - 1)];

const fullname = (gender = 'all') => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const midName = Math.random() < 0.1 ? `${letters.charAt(randomFromRange(0, letters.length - 1))}. ` : '';
  return `${name(gender)} ${midName}${surname()}`;
};

const username = () => {
  const adjective = usernames.adjectives[randomFromRange(0, usernames.adjectives.length - 1)];
  const noun = usernames.nouns[randomFromRange(0, usernames.nouns.length - 1)];
  const seperators = ['', '-', '_', '.'];
  const seperator = seperators[randomFromRange(0, seperators.length - 1)];
  const withNumber = !!(Math.random() > 0.75);
  const number = !withNumber ? '' : randomFromRange(0, 2000);

  return `${adjective}${seperator}${noun}${number}`;
};

export {
  Avatar, name, surname, fullname, username,
};
