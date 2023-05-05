import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../../redux/authSlice.js';
import Layout from '../../Layout/Layout.js';
import useNotification from '../../../hook/useNotification.js';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(email !== '');
  const [password, setPassword] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(password !== '');
  const { sendNotification } = useNotification();

  useEffect(() => {
    setIsValidEmail(email !== '');
  }, [email]);

  useEffect(() => {
    setIsValidPassword(password !== '');
  }, [password]);

  const loginHandler = () => {
    if (!email) setEmail('');
    if (!password) setPassword('');

    if (email && password) {
      const user = { email, password };
      sendNotification(dispatch(loginThunk(user)));
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layout>
      <Box p='40px' bg='#fff' borderRadius='12px'>
        <Box width='40vw' margin='0px auto'>
          <Box
            textAlign={'center'}
            fontWeight='600'
            fontSize='24px'
            textTransform={'uppercase'}
          >
            Login
          </Box>
          <FormControl isInvalid={!isValidEmail}>
            <FormLabel>Email</FormLabel>
            <Input
              type={'email'}
              placeholder='Type your email'
              onChange={emailChangeHandler}
              value={email}
            />
            {!isValidEmail && (
              <FormErrorMessage>Email is required</FormErrorMessage>
            )}
          </FormControl>
          <FormControl marginTop='8px' isInvalid={!isValidPassword}>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              placeholder='Type your password'
              value={password}
              onChange={passwordChangeHandler}
            />
            {!isValidPassword && (
              <FormErrorMessage>Password is required</FormErrorMessage>
            )}
          </FormControl>
          <Button
            colorScheme='blue'
            marginTop='12px'
            width='100%'
            onClick={loginHandler}
          >
            Login
          </Button>
          <Flex gap={'8px'} justify='center' marginTop='8px'>
            Don't have account?
            <Link to='/signup'>
              <Box fontWeight='600' color={'blue'}>
                Signup
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
