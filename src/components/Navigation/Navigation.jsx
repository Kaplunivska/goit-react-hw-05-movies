import { Box } from '@mui/material';
import { NavigationItemLink } from './Navigation.styled';

export default function Navigation({ pages }) {
  return (
    <Box as="nav">
      <Box as="ul" display="flex">
        {pages.map(({ to, label }) => (
          <Box as="li" key={label}>
            <NavigationItemLink to={to}>{label}</NavigationItemLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
}