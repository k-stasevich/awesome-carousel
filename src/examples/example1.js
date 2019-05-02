import React from 'react';
import { Carousel } from '../Carousel';

import './example1.scss';

const items = [
  { id: '1', label: <div className="example1__item">Item 1</div> },
  { id: '2', label: <div className="example1__item">Item 2</div> },
  { id: '3', label: <div className="example1__item">Item 3</div> },
  { id: '4', label: <div className="example1__item">Item 4</div> },
];

const Example1Component = props => {
  return (
    <div className="example1-wrapper">
      <div className="example1-wrapper2">
        <Carousel items={items} />
      </div>
    </div>
  );
};

Example1Component.propTypes = {};

Example1Component.defaultProps = {};

export default Example1Component;
