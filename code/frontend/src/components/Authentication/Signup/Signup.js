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
import useNotification from '../../../hook/useNotification.js';
import { signupThunk } from '../../../redux/authSlice.js';
import Layout from '../../Layout/Layout.js';

const Signup = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isValidFirstName, setIsValidFirstName] = useState(firstName !== '');
  const [isValidLastName, setIsValidLastName] = useState(lastName !== '');
  const [isValidEmail, setIsValidEmail] = useState(email !== '');
  const [isValidPassword, setIsValidPassword] = useState(password !== '');
  const { sendNotification } = useNotification();

  const firstNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setIsValidEmail(email !== '');
  }, [email]);

  useEffect(() => {
    setIsValidPassword(password !== '');
  }, [password]);

  useEffect(() => {
    setIsValidFirstName(firstName !== '');
  }, [firstName]);

  useEffect(() => {
    setIsValidLastName(lastName !== '');
  }, [lastName]);

  const signupHandler = () => {
    if (!firstName) setFirstName('');
    if (!lastName) setLastName('');
    if (!email) setEmail('');
    if (!password) setPassword('');

    if (firstName && lastName && email && password)
      sendNotification(
        dispatch(signupThunk({ lastName, firstName, email, password }))
      );
  };

  return (
    <Layout>
      <Box p='20px' bg='#fff' borderRadius='12px'>
        <Box width='40vw' margin='0px auto'>
          <Box
            textAlign={'center'}
            fontWeight='600'
            fontSize='24px'
            textTransform={'uppercase'}
          >
            Signup
          </Box>
          <FormControl isInvalid={!isValidFirstName}>
            <FormLabel>Firstname</FormLabel>
            <Input
              placeholder='Type your firstname'
              value={firstName}
              onChange={firstNameChangeHandler}
            />
            {!isValidFirstName && (
              <FormErrorMessage>Firstname is required!</FormErrorMessage>
            )}
          </FormControl>
          <FormControl marginTop='8px' isInvalid={!isValidLastName}>
            <FormLabel>Lastname</FormLabel>
            <Input
              placeholder='Type your lastname'
              value={lastName}
              onChange={lastNameChangeHandler}
            />
            {!isValidLastName && (
              <FormErrorMessage>Lastname is required!</FormErrorMessage>
            )}
          </FormControl>
          <FormControl marginTop='8px' isInvalid={!isValidEmail}>
            <FormLabel>Email</FormLabel>
            <Input
              type={'email'}
              placeholder='Type your email'
              value={email}
              onChange={emailChangeHandler}
            />
            {!isValidEmail && (
              <FormErrorMessage>Email is required!</FormErrorMessage>
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
              <FormErrorMessage>Password is required!</FormErrorMessage>
            )}
          </FormControl>
          <Button
            colorScheme='blue'
            marginTop='16px'
            width='100%'
            onClick={signupHandler}
          >
            Signup
          </Button>
          <Flex justify='center' gap='8px' marginTop='8px'>
            Have account?
            <Link to='/login'>
              <Box fontWeight='600' color='blue'>
                Login
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Signup;
