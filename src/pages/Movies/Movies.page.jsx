import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Gallery from 'components/Gallery';
import TheMovieAPI from 'services/theMovieAPI';
import MoviesList from 'components/MoviesList';
import SearchInput from 'components/SearchInput';

export default function Movies() {
  const [findQuery, setFindQuery] = useState('');

  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  useEffect(() => {
    if (!query.length) return;

    setFindQuery(query);
    // eslint-disable-next-line
  }, []);

  const submitHandler = evt => {
    evt.preventDefault();
    setFindQuery(query);
  };
  const changeSearchHandler = evt => {
    const { value } = evt.target;

    if (value.length === 0) return setSearchQuery({});

    setSearchQuery({
      query: value.trim().toLocaleLowerCase(),
    });
  };

  return (
    <>
      <SearchInput
        value={query}
        onSubmit={submitHandler}
        onChange={changeSearchHandler}
      />

      <Gallery
        queryKey={['seqrch-movie', findQuery]}
        queryFn={pageParam =>
          TheMovieAPI.getMoviesBySearchQuery(findQuery, pageParam)
        }
        component={MoviesList}
        enabled={findQuery.length > 0}
      />
    </>
  );
}

