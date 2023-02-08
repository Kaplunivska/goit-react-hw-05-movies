import {
Box,
Container,
createTheme,
CssBaseline,
ThemeProvider,
} from '@mui/material';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import{  ReactQueryDevtools } from 'react-query/devtools';
import { Outlet } from 'react-router-dom';
import Header from './Header';
const theme = createTheme({
 palette: {
   background: {
    default: '#92a8d1',
   },
 },
});

const queryClient = new QueryClient({
 defaultOptions: {
   queries: {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
   },
 },
}); 

export const App = () => {
  return (
   <QueryClientProvider client={queryClient}>
   <ThemeProvider theme={theme}>
   <CssBaseline />
   <Header />
   <Box as='main' py={3}>
    <Container maxWidth="lg">
       <Suspense fallback={null}>
        <Outlet/>
       </Suspense>
    </Container>
   </Box>
   </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
   </QueryClientProvider>
  );
};
