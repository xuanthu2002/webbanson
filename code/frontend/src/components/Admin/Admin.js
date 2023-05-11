import { Box, Button, Flex, FormLabel, Image, Input } from '@chakra-ui/react';
import { useState } from 'react';
import Layout from '../Layout/Layout.js';
import CategorySelect from '../UI/Card/CategorySelect.js';

const Admin = ({ product, upsertProductHandler }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(
    product ? product.description : ''
  );
  const [imageURL, setImageURL] = useState(
    product
      ? product.imageURL
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFazivVI49rqIhYPXer4UznY7cBuor42sGQ&usqp=CAU'
  );
  const [price, setPrice] = useState(product ? product.price : 0);
  const [categoryId, setCategoryId] = useState(
    product ? product.category.id : 23
  );

  const categoryChangeHandler = (value) => {
    setCategoryId(value);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const imageURLChangeHandler = (e) => {
    setImageURL(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = () => {
    const newProduct = {
      name,
      description,
      imageURL,
      price,
      categoryId: +categoryId,
    };
    upsertProductHandler(newProduct);
  };

  return (
    <Layout>
      <Box bg='#fff' borderRadius='12px' p='24px'>
        <Box width='60vw' margin='0px auto'>
          <Box fontWeight='600' fontSize='20px' textAlign={'center'}>
            Upsert product
          </Box>
          <Flex gap={'60px'} align='center' justify='space-between'>
            <Box flex='1'>
              <Box>
                <FormLabel>Category</FormLabel>
                <CategorySelect
                  categoryChangeHandler={categoryChangeHandler}
                  categoryId={categoryId}
                />
              </Box>
              <Box>
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  onChange={nameChangeHandler}
                  placeholder={"Input product's name"}
                />
              </Box>
              <Box marginTop='8px'>
                <FormLabel>Description</FormLabel>
                <Input
                  value={description}
                  onChange={descriptionChangeHandler}
                  placeholder={"Input product's description"}
                />
              </Box>
              <Box marginTop='8px'>
                <FormLabel>imageURL</FormLabel>
                <Input
                  value={imageURL}
                  onChange={imageURLChangeHandler}
                  placeholder={"Input product's imageURL"}
                />
              </Box>
              <Box marginTop='8px'>
                <FormLabel>Price</FormLabel>
                <Input
                  value={price}
                  onChange={priceChangeHandler}
                  placeholder={"Input product's price"}
                />
              </Box>
              <Button
                marginTop='12px'
                colorScheme='blue'
                width='100%'
                onClick={submitHandler}
              >
                Submit
              </Button>
            </Box>
            <Box width='250px'>
              <Image src={imageURL} />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Admin;
