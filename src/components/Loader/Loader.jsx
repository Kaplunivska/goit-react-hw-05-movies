import { Box } from '@mui/material';
import { RiseLoader } from 'react-spinners';

export default function Loader(props) {
  return (
    <Box {...props}>
      <RiseLoader
        size={10}
        color="#DodgerBlue"
        cssOverride={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      />
    </Box>
  );
}