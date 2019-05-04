import React from 'react';
import { storiesOf } from '@storybook/react';

import './index.stories.scss';

import { Carousel } from '../src/Carousel';

const items = [
  { id: '1', label: <div className="example-storybook-carousel-item">Item 1</div> },
  { id: '2', label: <div className="example-storybook-carousel-item">Item 2</div> },
  { id: '3', label: <div className="example-storybook-carousel-item">Item 3</div> },
  { id: '4', label: <div className="example-storybook-carousel-item">Item 4</div> },
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
  ));
