import PropTypes from 'prop-types';

export const GalleryPropTypes = {
  queryKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  queryFn: PropTypes.func.isRequired,
  component: PropTypes.elementType.isRequired,
  enabled: PropTypes.bool,
};