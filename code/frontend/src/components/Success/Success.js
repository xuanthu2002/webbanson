import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout.js';
import { BsCheckCircleFill } from 'react-icons/bs';

const Success = () => {
  return (
    <Layout>
      <Flex
        width='60vw'
        borderRadius='12px'
        bg='#fff'
        p='36px'
        height='80vh'
        justify='center'
        align='center'
        margin='0px auto'
      >
        <Box>
          <Flex justify='center' align='center' gap={'12px'}>
            <Icon as={BsCheckCircleFill} color='green' fontSize='20px' />
            <Box fontWeight='600' fontSize='28px' textAlign={'center'}>
              Success
            </Box>
          </Flex>
          <Box marginTop='36px' textAlign={'center'}>
            Our products will be sent to you soon!
          </Box>
          <Link to='/'>
            <Flex justify='center' marginTop='24px'>
              <Button variant={'ghost'}>Back to home</Button>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Success;
