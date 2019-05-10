import React from 'react';
import PropTypes from 'prop-types';
import { carouselItemPropTypes } from '../propTypes';

export const ItemList = ({ items, selectedId, itemWidth, itemHeight }) => {
  return (
    <ul
      className="carousel__list"
      style={{ marginLeft: getCarouselOffset(items, selectedId, itemWidth) }}
    >
      {items.map(item => {
        const { label, id } = item;

        return (
          <li
            key={id}
            className="carousel__item-wrapper"
            style={{
              width: itemWidth,
              minWidth: itemWidth,
              height: itemHeight,
            }}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(carouselItemPropTypes),
  selectedId: PropTypes.string.isRequired,
  itemHeight: PropTypes.number.isRequired,
  itemWidth: PropTypes.number.isRequired,
};

ItemList.defaultProps = {};

const getCarouselOffset = (items, selectedId, itemWidth) => {
  const indexOf = items.findIndex(i => i.id === selectedId);
  return -(indexOf * itemWidth);
};
