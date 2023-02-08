import PropTypes from 'prop-types';

export const NavigationPropTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.exact({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};