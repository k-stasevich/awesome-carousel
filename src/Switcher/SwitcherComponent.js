import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Switcher.scss';

export const Switcher = props => {
  const { items, selectedId, onSelect } = props;

  return (
    <div className="switcher">
      {items.map(({ id }) => {
        return (
          <div
            key={id}
            onClick={() => onSelect(id)}
            className={classnames('switcher__item', { active: selectedId === id })}
          />
        );
      })}
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
};

Switcher.defaultProps = {};
