import { Box, Flex, ListItem } from '@chakra-ui/react';
import format from '../../format/currencyFormat.js';

const ProductItem = ({ name, price, quantity }) => {
  const total = price * quantity;

  return (
    <ListItem>
      <Flex justify='space-between' align='center'>
        <Box maxW={'20vw'}>{name}</Box>
        <Box>{format.format(total)}</Box>
      </Flex>
    </ListItem>
  );
};

export default ProductItem;
