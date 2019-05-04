import React from 'react';
import PropTypes from 'prop-types';

import './ArrowComponent.scss';

export const ARROW_ENUM = {
  RIGHT: 'right',
  LEFT: 'left',
  UP: 'up',
  DOWN: 'down',
};

export const Arrow = props => {
  const { direction, ...otherProps } = props;

  const directionClass = `arrow--${direction}`;

  return <div className={`arrow ${directionClass}`} {...otherProps} />;
};

Arrow.propTypes = {
  direction: PropTypes.oneOf([ARROW_ENUM.RIGHT, ARROW_ENUM.UP, ARROW_ENUM.LEFT, ARROW_ENUM.DOWN]),
};
Arrow.defaultProps = {
  direction: ARROW_ENUM.RIGHT,
};
