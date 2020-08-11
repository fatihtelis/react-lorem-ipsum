import React from 'react';
import PropTypes from 'prop-types';
import { randomFromRange, getRandomGender } from '../utils';
import avatars from '../data/avatars.json';

const defaultProps = {
  gender: 'all',
};

const Avatar = ({ gender, ...otherProps }) => {
  const getRandomAvatar = () => {
    const finalGender = ['male', 'female'].includes(gender) ? gender : getRandomGender();
    const randomIndex = randomFromRange(0, avatars[finalGender].length - 1);
    return avatars[finalGender][randomIndex];
  };
  return <img src={getRandomAvatar()} {...otherProps} alt="Avatar" />;
};

Avatar.propTypes = {
  gender: PropTypes.string,
};

Avatar.defaultProps = defaultProps;

export default Avatar;
