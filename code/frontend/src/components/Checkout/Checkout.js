import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
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
import { useEffect, useState } from 'react';
import { getProductsFromCartThunk } from '../../redux/cartSlice.js';
import useNotification from '../../hook/useNotification.js';
import { checkoutCartThunk } from '../../redux/checkoutSlice.js';


const Checkout = () => {
  const products = useSelector(productInCartSelectors);
  const price = useSelector(totalPriceSelector);
  const dispatch = useDispatch();
  const { sendNotification } = useNotification();
  const token = useSelector(tokenSelector);
  const [recipientName, setRecipientName] = useState(null);
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  const checkoutHandle = () => {
    if (recipientName && recipientPhoneNumber && shippingAddress) {
      const orderDto = {
        user: null,
        recipientName,
        recipientPhoneNumber,
        shippingAddress,
        paymentMethod: "COD"
      };
      sendNotification(dispatch(checkoutCartThunk({ token, orderDto })));
    }
  };

  useEffect(() => {
    if (token) dispatch(getProductsFromCartThunk(token));
  }, []);

  return (
    <Layout>
      <Flex bg='#fff' borderRadius='12px' p='24px' gap='24px'>
        <Box flex='1'>
          <Tabs
            marginTop='
        12px'
          >
            <TabList>
              <Tab>Cash on delivery - COD</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box>
                  <FormLabel htmlFor='recipientName'>
                    Name of customer
                  </FormLabel>
                  <Input
                    id='recipientName'
                    placeholder='Type your name'
                    required
                    onChange={
                      (e) => setRecipientName(e.target.value)
                    }
                  />
                </Box>
                <Box marginTop='12px'>
                  <FormLabel htmlFor='recipientPhoneNumber'>Telephone</FormLabel>
                  <Input
                    id='recipientPhoneNumber'
                    placeholder='Type your telephone'
                    type={'number'}
                    required
                    onChange={
                      (e) => setRecipientPhoneNumber(e.target.value)
                    }
                  />
                </Box>
                <Box marginTop='12px'>
                  <FormLabel htmlFor='shippingAddress'>Address</FormLabel>
                  <Input
                    id='shippingAddress'
                    placeholder='Type your address'
                    required
                    onChange={
                      (e) => setShippingAddress(e.target.value)
                    }
                  />
                </Box>
                <Flex marginTop='12px' gap={'12px'}>
                  <Box flex={1}>
                    <Link to='/cart'>
                      <Button width='100%'>Back to cart</Button>
                    </Link>
                  </Box>
                  <Box flex={1}>
                    <Button
                      colorScheme='blue'
                      width='100%'
                      onClick={checkoutHandle}>
                      Purchase
                    </Button>
                  </Box>
                </Flex>
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
