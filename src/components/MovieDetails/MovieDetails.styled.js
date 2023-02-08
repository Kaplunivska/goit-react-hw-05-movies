import styled from '@emotion/styled';
import { ButtonLink } from 'components/Button/Button';

export const DetailsButtonLink = styled(ButtonLink)(({ theme }) => ({
  '&.active': {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
  },
}));