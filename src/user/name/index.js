import PropTypes from 'prop-types';
import { randomFromRange } from '../../utils';
import names from '../../data/names.json';

// Default Props of the Component
const defaultProps = {
  gender: 'all',
};

const getRandomGender = () => {
  if (Math.random() >= 0.5) return 'male';
  return 'female';
};

export const getRandomName = (gender) => {
  const randomGender = getRandomGender();
  let gn = gender;
  if (['male', 'female'].includes(gender)) gn = defaultProps.gender;
  const finalGender = gn === 'all' ? randomGender : gn;
  return names[finalGender][randomFromRange(0, names[finalGender].length - 1)];
};

const Name = ({ gender }) => getRandomName(gender);

Name.propTypes = {
  gender: PropTypes.string,
};

Name.defaultProps = {
  gender: 'all',
};
export default Name;
