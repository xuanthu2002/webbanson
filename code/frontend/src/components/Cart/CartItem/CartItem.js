import { Box, Button, Flex, Image, Input, Td, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import format from '../../../format/currencyFormat.js';
import useNotification from '../../../hook/useNotification.js';
import {
  deleteProductFromCartThunk,
  updateQuantityThunk,
} from '../../../redux/cartSlice.js';
import { tokenSelector } from '../../../redux/selectors.js';

const CartItem = ({ product, productQuantity, productId, priceChange }) => {
  const [quantity, setQuantity] = useState(productQuantity);
  const dispatch = useDispatch();
  const { sendNotification } = useNotification();
  const token = useSelector(tokenSelector);

  const decreaseQuantityHandler = () => {
    const canDecrease = quantity > 1 ? true : false;
    priceChange(canDecrease ? -product.price : 0);
    setQuantity((preVal) => (canDecrease ? preVal - 1 : preVal));
  };

  const increaseQuantityHandler = () => {
    setQuantity((preVal) => preVal + 1);
    priceChange(product.price);
  };

  useEffect(() => {
    dispatch(
      updateQuantityThunk({ product: { id: productId, quantity }, token })
    );
  }, [quantity]);

  const inputChangeHandler = (e) => {
    const val = e.target.value;
    setQuantity(val >= 1 ? val : 1);
  };

  const deleteItemHandler = () => {
    sendNotification(
      dispatch(deleteProductFromCartThunk({ productId, token }))
    );
  };

  return (
    <Tr>
      <Td>
        <Flex gap={'12px'} align='center'>
          <Image src={product.imageURL} width='200px' />
          <Box>
            <Box fontSize='16px' style={{ whiteSpace: 'pre-wrap' }}>
              {product.name}
            </Box>
          </Box>
        </Flex>
      </Td>
      <Td>{format.format(product.price)}</Td>
      <Td>
        <Button onClick={decreaseQuantityHandler}>-</Button>
        <Input
          value={quantity}
          width='60px'
          type={'number'}
          onChange={inputChangeHandler}
        />
        <Button onClick={increaseQuantityHandler}>+</Button>
      </Td>
      <Td>{format.format(+product.price * quantity)}</Td>
      <Td>
        <Button onClick={deleteItemHandler}>Delete</Button>
      </Td>
    </Tr>
  );
};

export default CartItem;
