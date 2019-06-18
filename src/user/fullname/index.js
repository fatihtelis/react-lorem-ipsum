import PropTypes from 'prop-types';
import { getRandomName } from '../name';
import { getRandomSurname } from '../surname';
import { randomFromRange } from '../../utils';

const FullName = ({ gender }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const midName = Math.random() < 0.1 ? `${letters.charAt(randomFromRange(0, letters.length - 1))}.` : '';
  return `${getRandomName(gender)} ${midName} ${getRandomSurname()}`;
};

FullName.propTypes = {
  gender: PropTypes.string,
};

FullName.defaultProps = {
  gender: 'all',
};
export default FullName;
