import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
  } from '@mui/material';
  import { useLoaderData } from 'react-router-dom';
  
  export default function Reviews() {
    const data = useLoaderData();
  
    return (
      <>
        {data.results.length === 0 ? (
          <Typography variant="body2" component="div">
            Reviews not found
          </Typography>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 1 }}
          >
            {data.results.map(({ author, content, updated_at, id }) => (
              <Grid item xs={2} sm={2} md={3} key={id}>
                <Card sx={{ maxWidth: '100%', height: '100%' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        fontWeight="700"
                      >
                        {author}{' '}
                        <Typography
                          variant="body2"
                          component="span"
                          color="text.secondary"
                        >
                          ({new Date(updated_at).toDateString()})
                        </Typography>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {content}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </>
    );
  }