import React from 'react';
import PropTypes from 'prop-types';
import { randomFromRange, getRandomGender, parseIntWithDefault } from '../utils';
import avatars from '../data/avatars.json';

const defaultProps = {
  gender: 'all',
  width: 200,
  height: 200,
  className: '',
};

const Avatar = ({
  gender, width, height, className,
}) => {
  const finalWidth = parseIntWithDefault(width, defaultProps.width);
  const finalHeight = parseIntWithDefault(height, defaultProps.height);
  const getRandomAvatar = () => {
    const finalGender = ['male', 'female'].includes(gender) ? gender : getRandomGender();
    const randomIndex = randomFromRange(0, avatars[finalGender].length - 1);
    return avatars[finalGender][randomIndex];
  };
  const finalClassName = typeof className === 'string' ? className : defaultProps.className;
  return (
    <img
      className={finalClassName}
      src={getRandomAvatar()}
      width={finalWidth}
      height={finalHeight}
      alt="Avatar"
    />
  );
};

Avatar.propTypes = {
  gender: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  gender: defaultProps.gender,
  width: defaultProps.width,
  height: defaultProps.height,
  className: defaultProps.className,
};

export default Avatar;
