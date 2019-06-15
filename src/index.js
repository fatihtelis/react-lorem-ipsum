import React from 'react';
import PropTypes from 'prop-types';

const LoremIpsum = ({ text = 'Lorem Ipsum' }) => <span className="lorem-ipsum">{text}</span>;

LoremIpsum.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};
export default LoremIpsum;
