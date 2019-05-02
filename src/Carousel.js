import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// components
import { Switcher } from './Switcher';
import { ItemList } from './ItemList';

import { carouselItemPropTypes } from './propTypes';

import './Carousel.scss';

export const Carousel = props => {
  const { items } = props;

  const carouselRef = useRef(null);

  const [selectedId, setSelectedId] = useState(items[0].id);

  const { itemWidth, itemHeight } = useGetItemDimensions(carouselRef);

  return (
    <div className="carousel" ref={carouselRef}>
      <ItemList items={items} selectedId={selectedId} itemWidth={itemWidth} itemHeight={itemHeight} />

      <div className="carousel__switcher-wrapper">
        <Switcher items={items} selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(carouselItemPropTypes),
};

const useGetItemDimensions = wrapperRef => {
  const [dimensions, setDimensions] = useState({
    itemWidth: 0,
    itemHeight: 0,
  });

  useEffect(() => {
    const itemWidth = wrapperRef.current.offsetWidth;
    const itemHeight = wrapperRef.current.offsetHeight;

    setDimensions({ itemWidth, itemHeight });
  }, [wrapperRef]);

  return dimensions;
};
