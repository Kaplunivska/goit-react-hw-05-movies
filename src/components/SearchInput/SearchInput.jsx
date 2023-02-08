import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputPropTypes } from './SearchInput.props';

export default function SearchInput({ onSubmit, onChange, value }) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        mx: 'auto',
        mb: 3,
      }}
      onSubmit={onSubmit}
    >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search movies"
        inputProps={{ 'aria-label': 'search movie' }}
        value={value}
        onChange={onChange}
      />
    </Paper>
  );
}

SearchInput.propTypes = SearchInputPropTypes;