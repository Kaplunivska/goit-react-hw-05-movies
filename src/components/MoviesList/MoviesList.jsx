import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import config from 'config';
import { MoviesListPropTypes } from './MoviesList.props';

export default function MoviesList({ list }) {
    
  const location = useLocation();
  const path = location.pathname === '/' ? 'movies/' : '';

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 15 }}
    >
      {list.map(({ id, poster_path, title }) => {
        const imageSrc = poster_path
          ? `${config.urls.theMovies.image.poster}${poster_path}`
          : '';
        return (
          <Grid item xs={2} sm={2} md={3} key={id}>
            <Card sx={{ maxWidth: 250, height: '100%' }}>
              <CardActionArea
                component={Link}
                to={`${path}${id}`}
                state={{ from: location }}
                sx={{ height: '100%' }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={imageSrc}
                  alt={title}
                  sx={{ height: '100%', objectFit: 'cover' }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

MoviesList.propTypes = MoviesListPropTypes;
