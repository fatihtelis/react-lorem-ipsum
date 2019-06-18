import usernames from '../../data/usernames.json';
import { randomFromRange } from '../../utils';

const Username = () => {
  const adjective = usernames.adjectives[randomFromRange(0, usernames.adjectives.length - 1)];
  const noun = usernames.nouns[randomFromRange(0, usernames.nouns.length - 1)];
  const seperators = ['', '-', '_', '.'];
  const seperator = seperators[randomFromRange(0, seperators.length - 1)];
  const withNumber = !!(Math.random() > 0.75);
  const number = !withNumber ? '' : randomFromRange(0, 2000);

  return `${adjective}${seperator}${noun}${number}`;
};

export default Username;
