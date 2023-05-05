import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import format from '../../format/currencyFormat.js';
import {
  productInCartSelectors,
  totalPriceSelector,
} from '../../redux/selectors.js';
import Layout from '../Layout/Layout.js';
import CartItem from './CartItem/CartItem.js';

const Cart = () => {
  const products = useSelector(productInCartSelectors);
  const totalPrice = useSelector(totalPriceSelector);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  //console.log({ price });

  const priceChangeHandler = (value) => {
    setPrice((prePrice) => prePrice + value);
  };

  return (
    <Layout>
      <Box bg='#fff' borderRadius='12px' p='24px'>
        <Box
          textAlign={'center'}
          fontWeight='600'
          fontSize='24px'
          textTransform={'uppercase'}
        >
          Shopping cart
        </Box>
        <Box marginTop='12px'>
          <Box>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Item</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>Paid</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map((product) => (
                    <CartItem
                      key={product.id}
                      product={product.product}
                      productQuantity={product.quantity}
                      productId={product.id}
                      priceChange={priceChangeHandler}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex
              justify='flex-end'
              align='center'
              gap={'20px'}
              fontWeight='600'
              fontSize='20px'
            >
              <Box>Total: {format.format(price)}</Box>
              <Link to='/checkout'>
                <Button colorScheme='blue' w={'200px'}>
                  Checkout
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Cart;
