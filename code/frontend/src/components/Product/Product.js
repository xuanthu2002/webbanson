import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import format from '../../format/currencyFormat.js';
import useNotification from '../../hook/useNotification.js';
import { addToCartThunk } from '../../redux/cartSlice.js';
import { getProductThunk } from '../../redux/productSlice.js';
import { productSelector, tokenSelector } from '../../redux/selectors.js';
import Layout from '../Layout/Layout.js';

const Product = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector(productSelector);
  const { sendNotification } = useNotification();
  const [quantity, setQuantity] = useState(1);
  const token = useSelector(tokenSelector);

  const productId = params.productId;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductThunk(productId));
  }, []);

  const addToCartHandler = () => {
    sendNotification(
      dispatch(addToCartThunk({ cart: { quantity, productId }, token }))
    );
  };

  const quantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const editHandler = () => {
    navigate('/admin/updateProduct');
  };

  //console.log({ product });

  return (
    <Layout>
      <Box bg='#fff' p={'24px'} borderRadius='24px'>
        <Flex gap='24px' bg='#fff' align='center'>
          <Flex minWidth='360px' justify='center' align='center'>
            <Image src={product.imageURL} maxWidth='360px' />
          </Flex>
          <Box>
            <Box fontWeight='600' fontSize='24px'>
              {product.name}
            </Box>
            <Box fontStyle={'italic'} margin='0 0 12px 0'>
              {product?.category?.categoryName}
            </Box>
            <Box fontWeight='700' fontSize='24px' color={'orange.500'}>
              {format.format(product.price)}
            </Box>
            <Box margin='8px 0'>{product.description}</Box>
            <Box>
              <Box fontWeight='600' fontSize='18px'>
                Features:
              </Box>
              <UnorderedList>
                <ListItem>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam, laboriosam.
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illo, dolor!
                </ListItem>
                <ListItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, reprehenderit.
                </ListItem>
                <ListItem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nulla, fuga.
                </ListItem>
              </UnorderedList>
            </Box>
            <Flex marginTop='12px' justify='space-between' align='flex-end'>
              <InputGroup width='160px'>
                <InputLeftAddon children='Quantity' />
                <Input
                  min='1'
                  type='number'
                  value={quantity}
                  onChange={quantityChangeHandler}
                />
              </InputGroup>
              {localStorage.getItem('role') === 'admin' && (
                <Button marginTop='8px' onClick={editHandler}>
                  Edit
                </Button>
              )}
              <Button colorScheme='blue' onClick={addToCartHandler}>
                Add to cart
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Product;
