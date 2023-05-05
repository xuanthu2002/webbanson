import { Box } from '@chakra-ui/react';
import Header from '../Header/Header.js';

const Layout = ({ children }) => {
  return (
    <Box width='100vw' minH={'100vh'} bg='#f1f3f5'>
      <Header />
      <Box width='85vw' margin='0px auto' p='20px 0'>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
