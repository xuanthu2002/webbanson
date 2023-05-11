import { Avatar, Box, Button, Flex, Icon } from '@chakra-ui/react';
import { useEffect } from 'react';
import { BsCart3, BsListCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProductsFromCartThunk } from '../../redux/cartSlice.js';
import { getAllCategoriesThunk } from '../../redux/categorySlice.js';
import { getAllProductsThunk } from '../../redux/productSlice.js';
import authSlice from '../../redux/authSlice.js';
import {
  isLoginSelector,
  productInCartSelectors,
  tokenSelector,
} from '../../redux/selectors.js';

const Header = () => {
  const isLogin = useSelector(isLoginSelector);
  const dispatch = useDispatch();
  const productsInCart = useSelector(productInCartSelectors);
  const navigate = useNavigate();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  useEffect(() => {
    if (token) dispatch(getProductsFromCartThunk(token));
  }, []);

  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, []);

  const logoutHandler = () => {
    dispatch(authSlice.actions.logout());

    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <Flex justify='center' align='center' bg='#fff' w={'100vw'}>
      <Flex width='85vw' p='12px 24px' justify='space-between' align='center'>
        <Link to='/'>
          <Box fontWeight='600' fontSize='20px' p='0 12px'>
            TPC Shop
          </Box>
        </Link>
        {!isLogin ? (
          <Flex gap='12px'>
            <Link to='/login'>
              <Button>Login</Button>
            </Link>
            <Link to='/signup'>
              <Button>Sign up</Button>
            </Link>
          </Flex>
        ) : (
          <Flex justify='flex-end' align='center' gap={'28px'}>
            <Flex align='center' gap={'8px'}>
              <Avatar size={'sm'} name='tuantm' color={'#fff'} />
              <Box textTransform={'uppercase'}>
                {localStorage.getItem('name')}
              </Box>
            </Flex>
            <Link to='/cart'>
              <Box style={{ position: 'relative' }}>
                <Icon as={BsCart3} fontSize='32px' />
                <Flex
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'red',
                    color: '#fff',
                    borderRadius: '50%',
                  }}
                  justify='center'
                  align='center'
                >
                  {productsInCart.length}
                </Flex>
              </Box>
            </Link>
            <Link to='/orders'>
              <Box style={{ position: 'relative' }}>
                <Icon as={BsListCheck} fontSize='32px' />
              </Box>
            </Link>
            {localStorage.getItem('role') === 'admin' && (
              <Link to='/admin/addNewProduct'>
                <Button>Add new product</Button>
              </Link>
            )}
            <Button onClick={logoutHandler}>Logout</Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
