import PropTypes from 'prop-types';

export const MoviesListPropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};