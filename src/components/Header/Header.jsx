import { AppBar, Container } from '@mui/material';
import Navigation from '../Navigation/Navigation';

const pages = [
  { to: '/', label: 'Home' },
  { to: 'movies', label: 'Movies' },
];

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Navigation pages={pages} />
      </Container>
    </AppBar>
  );
}