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

  const directionClass = `arrow__item--${direction}`;

  return (
    <div className="arrow" {...otherProps}>
      <svg height="30" width="30" className="arrow__svg">
        <circle
          className="arrow__circle"
          cx="15"
          cy="15"
          r="12"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
      <div className={`arrow__item ${directionClass}`} />
    </div>
  );
};

Arrow.propTypes = {
  direction: PropTypes.oneOf([ARROW_ENUM.RIGHT, ARROW_ENUM.UP, ARROW_ENUM.LEFT, ARROW_ENUM.DOWN]),
};
Arrow.defaultProps = {
  direction: ARROW_ENUM.RIGHT,
};
