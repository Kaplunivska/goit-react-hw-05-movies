import { LoadMoreButton } from 'components/Button';
import Loader from 'components/Loader';
import { useFetchMovieAPI } from 'hooks/useFetchMovieAPI';
import uniqBy from 'lodash.uniqby';
import { GalleryPropTypes } from './Gallery.props';

export default function Gallery({
  queryKey,
  queryFn,
  component: Component,
  enabled = true,
}) {
    const {
        isFetching,
        isError,
        error,
        data: moviesList,
        hasNextPage,
        fetchNextPage,      
    } = useFetchMovieAPI(queryKey, queryFn,querySelectFn, enabled);

    function querySelectFn(data) {
        return uniqBy(
      data.pages.reduce((acc, page) => [...acc, ...page.results], []),
      'id'
        );
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }
   
    return (
    <>
     {moviesList && 
       (moviesList.length === 0 ? (
        <h2>Movies not found</h2>
       ) : (
        <Component list={moviesList} />
       ))}

       {isFetching && <Loader mt={3} />}

       {!isFetching && hasNextPage && (
        <LoadMoreButton onClick={fetchNextPage}>Load more</LoadMoreButton>
       )}
    </>
    );
}
Gallery.propTypes = GalleryPropTypes;