import TheMovieAPI from 'services/theMovieAPI';
import MoviesList from 'components/MoviesList';
import Gallery from 'components/Gallery';

export default function Home() {
    return (
     <Gallery
      queryKey="thrending-by-day"
      queryFn={TheMovieAPI.getThrendingByDay}
      component={MoviesList}
      />
    );
}