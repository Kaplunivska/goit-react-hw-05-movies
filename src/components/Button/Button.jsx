import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';

export const ButtonLink = ({ children, to, ...props }) => (
  <Button component={NavLink} to={to} {...props}>
    {children}
  </Button>
);

export const BackButtonLink = ({ children, to }) => (
  <ButtonLink
    to={to}
    startIcon={<ForwardRoundedIcon sx={{ transform: 'rotate(180deg)' }} />}
  >
    {children}
  </ButtonLink>
);