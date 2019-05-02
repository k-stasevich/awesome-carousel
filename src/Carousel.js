import React from 'react';
import PropTypes from 'prop-types';

import './Carousel.scss';

export const Carousel = props => {
  const { items } = props;

  return (
    <ul className="carousel">
      {items.map(item => {
        const { label, id } = item;

        return (
          <li key={id} className="carousel__item-wrapper">
            {label}
          </li>
        );
      })}
    </ul>
  );
};

const carouselItemPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
});

Carousel.propTypes = {
  items: PropTypes.arrayOf(carouselItemPropTypes),
};
