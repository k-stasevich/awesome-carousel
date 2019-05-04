import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Switcher.scss';
import { Arrow, ARROW_ENUM } from '../Arrow';

export const Switcher = props => {
  const { items, selectedId, onSelect, selectPrev, selectNext } = props;

  return (
    <div className="switcher">
      <Arrow direction={ARROW_ENUM.LEFT} onClick={selectPrev} />

      {items.map(({ id }) => {
        return (
          <div
            key={id}
            onClick={() => onSelect(id)}
            className={classnames('switcher__item', { active: selectedId === id })}
          />
        );
      })}

      <Arrow onClick={selectNext} />
    </div>
  );
};

Switcher.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectPrev: PropTypes.func.isRequired,
  selectNext: PropTypes.func.isRequired,
};

Switcher.defaultProps = {};
