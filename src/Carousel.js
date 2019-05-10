import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// components
import { Switcher } from './Switcher';
import { ItemList } from './ItemList';

import {
  carouselItemPropTypes,
  switchAnimationPropTypes,
  SWITCH_ANIMATION,
} from './propTypes';

import './Carousel.scss';

export const Carousel = props => {
  const { items, switchAnimation } = props;

  const carouselRef = useRef(null);

  const [selectedId, setSelectedId] = useState(items[0].id);

  const { itemWidth, itemHeight } = useGetItemDimensions(carouselRef);

  const onSlideSelect = selectedId => {
    setSelectedId(selectedId);
    carouselRef.current.classList.add('carousel__animation--run');
  };
  const selectPrev = () => {
    const currentIndex = getCurrentItemIndex(selectedId, items);
    if (currentIndex === 0) return;
    setSelectedId(items[currentIndex - 1].id);
    carouselRef.current.classList.add('carousel__animation--run');
  };
  const selectNext = () => {
    const currentIndex = getCurrentItemIndex(selectedId, items);
    if (currentIndex === items.length - 1) return;
    setSelectedId(items[currentIndex + 1].id);
    carouselRef.current.classList.add('carousel__animation--run');
  };

  return (
    <div
      className={classnames(
        'carousel',
        `carousel__animation--${switchAnimation}`,
      )}
      ref={carouselRef}
      onAnimationEnd={() => {
        carouselRef.current.classList.remove('carousel__animation--run');
      }}
    >
      <div className="carousel__list-wrapper">
        <ItemList
          items={items}
          selectedId={selectedId}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
        />
      </div>

      <div className="carousel__switcher-wrapper">
        <Switcher
          items={items}
          selectedId={selectedId}
          onSelect={onSlideSelect}
          selectPrev={selectPrev}
          selectNext={selectNext}
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(carouselItemPropTypes),
  switchAnimation: switchAnimationPropTypes,
};

Carousel.defaultProps = {
  items: [],
  switchAnimation: SWITCH_ANIMATION.DEFAULT,
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

const getCurrentItemIndex = (selectedId, items) => {
  return items.findIndex(i => i.id === selectedId);
};
