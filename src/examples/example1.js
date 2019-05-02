import React from 'react';
import { Carousel } from '../Carousel';

const items = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' },
  { id: '4', label: 'Item 4' },
];

const Example1Component = props => {
  return (
    <div>
      <Carousel items={items} />
    </div>
  );
};

Example1Component.propTypes = {};

Example1Component.defaultProps = {};

export default Example1Component;
