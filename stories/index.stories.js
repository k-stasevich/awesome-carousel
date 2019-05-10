import React from 'react';
import { storiesOf } from '@storybook/react';

import './index.stories.scss';

import { Carousel } from '../src/Carousel';
import { SWITCH_ANIMATION } from '../src/propTypes';

const items = [
  {
    id: '1',
    label: <div className="example-storybook-carousel-item">Item 1</div>,
  },
  {
    id: '2',
    label: <div className="example-storybook-carousel-item">Item 2</div>,
  },
  {
    id: '3',
    label: <div className="example-storybook-carousel-item">Item 3</div>,
  },
  {
    id: '4',
    label: <div className="example-storybook-carousel-item">Item 4</div>,
  },
];

const itemsWithImg = [
  {
    id: '1',
    label: (
      <div className="example-storybook-carousel-item">
        <img src="http://www.frankiecoventryartist.com/wp-content/uploads/2016/01/Buster-Pug-600x800-Watermarked-Animal-Gallery.jpg" />
      </div>
    ),
  },
  {
    id: '2',
    label: (
      <div className="example-storybook-carousel-item">
        <img src="https://static1.squarespace.com/static/5af874e0c3c16a3922fc2d4e/t/5bf1c514575d1f96f71494f4/1542572116676/" />
      </div>
    ),
  },
  {
    id: '3',
    label: (
      <div className="example-storybook-carousel-item">
        <img src="http://www.frankiecoventryartist.com/wp-content/uploads/2016/01/Buster-Pug-600x800-Watermarked-Animal-Gallery.jpg" />
      </div>
    ),
  },
  {
    id: '4',
    label: (
      <div className="example-storybook-carousel-item">
        <img src="https://static1.squarespace.com/static/5af874e0c3c16a3922fc2d4e/t/5bf1c514575d1f96f71494f4/1542572116676/" />
      </div>
    ),
  },
];

storiesOf('Samples', module)
  .add('Base Carousel 300x400', () => (
    <div className="wrapper-centered">
      <div className="card-300x400">
        <Carousel items={items} />
      </div>
    </div>
  ))
  .add('Base Carousel 400x600', () => (
    <div className="wrapper-centered">
      <div className="card-400x600">
        <Carousel items={items} />
      </div>
    </div>
  ))
  .add('Base Carousel. Animation = ZOOM_OUT', () => (
    <div className="wrapper-centered">
      <div className="card-300x400">
        <Carousel
          items={itemsWithImg}
          switchAnimation={SWITCH_ANIMATION.ZOOM_OUT}
        />
      </div>
    </div>
  ));
