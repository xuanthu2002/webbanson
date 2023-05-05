import { Box, Flex, Image } from '@chakra-ui/react';
import format from '../../../format/currencyFormat.js';

const Card = ({ name, description, price, url }) => {
  return (
    <Flex
      boxShadow='0 0 16px rgba(0,0,0,0.3)'
      borderRadius='12px'
      direction='column'
      minHeight={'400px'}
    >
      <Flex height='180px' justify='center' align='center'>
        <Image
          src={url}
          borderTopLeftRadius={'inherit'}
          borderTopRightRadius='inherit'
          maxH={'180px'}
        />
      </Flex>
      <Flex p='12px 16px' direction='column' flex={1}>
        <Flex flex={1} direction='column'>
          <Box
            fontWeight='600'
            fontSize='18px'
            cursor='pointer'
            className='shrink_content'
          >
            {name}
          </Box>
          <Box
            fontWeight='400'
            fontSize='14px'
            margin='8px 0'
            className='shrink_content'
          >
            {description}
          </Box>
        </Flex>
        <Box color={'orange.500'} fontWeight='700' fontSize='20px'>
          {format.format(price)}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Card;
