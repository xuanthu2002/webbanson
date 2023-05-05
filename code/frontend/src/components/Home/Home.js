import { Flex } from '@chakra-ui/react';
import Layout from '../Layout/Layout.js';
import LeftSidebar from './LeftSidebar/LeftSidebar.js';
import RightSidebar from './RightSidebar/RightSidebar.js';

const Home = () => {
  return (
    <Layout>
      <Flex gap='32px' p='32px 24px' bg='#fff' borderRadius='12px'>
        <LeftSidebar />
        <RightSidebar />
      </Flex>
    </Layout>
  );
};

export default Home;
