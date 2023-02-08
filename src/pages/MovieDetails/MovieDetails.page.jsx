import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { BackButtonLink } from 'components/Button';

export default function MovieDetailsPage() {
    const data = useLoaderData();
    const location = useLocation();
    const backHref = location.state?.from || '/movies';

    return(
    <>
    <BackButtonLink to={backHref}>Back</BackButtonLink>
    <MovieDetails data={data} />
    <Outlet />
    </>
    );
}

