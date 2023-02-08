import { useCallback, useMemo } from 'react';
import { Box, Rating, Stack, Typography } from '@mui/material';
import { numberWithCommas } from 'utils';
import { DetailsButtonLink } from './MovieDetails.styled';
import { MovieDetailsPropTypes } from './MovieDetails.props';
import config from 'config';
import { useLocation } from 'react-router-dom';

export default function MovieDetails({ data }) {
  const location = useLocation();
  const localtionState = { from: location.state?.from };
  const {
    title,
    tagline,
    budget,
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    belongs_to_collection,
  } = data;
  const rating = useMemo(
    () => Number((vote_average * 0.5).toFixed(1)),
    [vote_average]
  );
  const getGenres = useCallback(
    () => genres.map(genre => genre.name).join(', '),
    [genres]
  );
  const imageSrc = poster_path ?? belongs_to_collection?.poster_path;

  return (
    <Box display="flex" my={3}>
      <Box
        minWidth={250}
        maxWidth={250}
        minHeight={375}
        borderRadius={2}
        overflow="hidden"
      >
        <img
          src={`${config.urls.theMovies.image.bigPoster}${imageSrc}`}
          width="250"
          alt={title}
        />
      </Box>
      <Box ml={3} display="flex" flexDirection="column">
        <Typography variant="h4" component="h2">
          {original_title} ({release_date.slice(0, 4)})
        </Typography>
        <Typography variant="subtitle2" component="h3">
          {tagline}
        </Typography>
        <Typography variant="subtitle1" component="h3" mt={1}>
          Budget: ${numberWithCommas(budget)}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Genres: {getGenres()}
        </Typography>
        <Typography mt={3}>{overview}</Typography>
        <Box display="flex" alignItems="center" mt={3}>
          <Typography component="span" mr={1}>
            Rating:
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.1}
            readOnly
          />
          <Typography component="span" ml={1}>
            ({numberWithCommas(vote_count)})
          </Typography>
        </Box>
        <Stack direction="row" spacing={2} mt="auto">
          <DetailsButtonLink to="cast" state={localtionState}>
            Cast
          </DetailsButtonLink>
          <DetailsButtonLink to="reviews" state={localtionState}>
            Reviews
          </DetailsButtonLink>
        </Stack>
      </Box>
    </Box>
  );
}

MovieDetails.propTypes = MovieDetailsPropTypes;