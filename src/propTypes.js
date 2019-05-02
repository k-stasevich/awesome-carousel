import PropTypes from 'prop-types';

export const carouselItemPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
});
