import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  productInCartSelectors,
  tokenSelector,
  totalPriceSelector,
} from '../../redux/selectors.js';
import Layout from '../Layout/Layout.js';
import format from '../../format/currencyFormat.js';
import ProductItem from './ProductItem.js';
import { useEffect } from 'react';
import { getProductsFromCartThunk } from '../../redux/cartSlice.js';

const Checkout = () => {
  const products = useSelector(productInCartSelectors);
  const price = useSelector(totalPriceSelector);
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (token) dispatch(getProductsFromCartThunk(token));
  }, []);

  return (
    <Layout>
      <Flex bg='#fff' borderRadius='12px' p='24px' gap='24px'>
        <Box flex='1'>
          <Box fontWeight='600' fontSize='20px'>
            Which payment you want to purchase?
          </Box>
          <Tabs
            marginTop='
        12px'
          >
            <TabList>
              <Tab>Cash on delivery - COD</Tab>
              <Tab isDisabled>Credit card/Debit card</Tab>
              <Tab isDisabled>Momo</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>
                  <FormLabel htmlFor='nameOfCustomer'>
                    Name of customer
                  </FormLabel>
                  <Input
                    id='nameOfCustomer'
                    placeholder='Type your name'
                    required
                  />
                </Box>
                <Box marginTop='12px'>
                  <FormLabel htmlFor='telephone'>Telephone</FormLabel>
                  <Input
                    id='telephone'
                    placeholder='Type your telephone'
                    type={'number'}
                    required
                  />
                </Box>
                <Box marginTop='12px'>
                  <FormLabel htmlFor='address'>Address</FormLabel>
                  <Input
                    id='address'
                    placeholder='Type your address'
                    required
                  />
                </Box>
                <Flex marginTop='12px' gap={'12px'}>
                  <Box flex={1}>
                    <Link to='/cart'>
                      <Button width='100%'>Back to cart</Button>
                    </Link>
                  </Box>
                  <Box flex={1}>
                    <Link to='/success'>
                      <Button colorScheme='blue' width='100%'>
                        Purchase
                      </Button>
                    </Link>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box minW={'30vw'}>
          <Box fontWeight='600' fontSize='20px'>
            Products in cart:
          </Box>
          <UnorderedList marginTop='12px'>
            {products.map((product, idx) => (
              <ProductItem
                name={product.product.name}
                price={product.product.price}
                quantity={product.quantity}
                key={idx}
              />
            ))}
          </UnorderedList>
          <Flex justify='flex-end'>
            <Box fontWeight='600' fontSize='18px' color={'orange'}>
              Total: {format.format(price)}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Checkout;
