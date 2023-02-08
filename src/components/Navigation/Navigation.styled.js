import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationItemLink = styled(NavLink)(({ theme }) => ({
  padding: '10px 20px',
  color: theme.palette.common.white,

  '&.active': {
    backgroundColor: theme.palette.primary.dark,
  },

  ':hover:not(.active)': {
    backgroundColor: theme.palette.primary.DodgerBlue,
  },
}));