import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import config from 'config';
import { useLoaderData } from 'react-router-dom';

export default function Cast() {
    const data = useLoaderData();

    return (
       <Grid
         container
         spacing={{ xs: 2, md: 3 }}
         columns={{ xs: 4, sm: 8, md: 18 }}
        >
        {data.cast.map(({ profile_path, character, name, id }) => {
        const imageSrc = profile_path
          ? `${config.urls.theMovies.image.poster}${profile_path}`
          : '';
    return (
        <Grid item xs={2} sm={2} md={3} key={id}>
        
        <Card sx={{ maxWidth: 170, height: '100%' }}>

        <CardActionArea
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
              >
            <CardMedia
                component="img"
                height="210"
                image={imageSrc}
                alt={name}
                sx={{ height: '255px', objectFit: 'cover' }}
            />
          <CardContent sx={{ p: 1 }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    fontWeight="700"
                  >
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {character}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
    );
}

