import PropTypes from 'prop-types';

export const SWITCH_ANIMATION = {
  DEFAULT: 'default',
  ZOOM_OUT: 'zoom_out',
};

export const carouselItemPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
});

export const switchAnimationPropTypes = PropTypes.oneOf(Object.values(SWITCH_ANIMATION));
