import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import filterSlice from '../../../redux/filterSlice.js';
import {
  filterBySelectors,
  priceMaxSelectors,
  priceMinSelectors,
  searchSelectors,
} from '../../../redux/selectors.js';
import CategorySelect from '../../UI/Card/CategorySelect.js';

const LeftSidebar = () => {
  const dispatch = useDispatch();
  const priceMin = useSelector(priceMinSelectors);
  const priceMax = useSelector(priceMaxSelectors);
  const search = useSelector(searchSelectors);
  const filterBy = useSelector(filterBySelectors);

  const searchChangeHandler = (e) => {
    dispatch(filterSlice.actions.searchFilter(e.target.value));
  };

  const filterChangeHandler = (value) => {
    dispatch(filterSlice.actions.filterByFilter(+value));
  };

  const priceMinChangeHandler = (e) => {
    dispatch(filterSlice.actions.priceMinFilter(+e.target.value));
  };

  const priceMaxChangeHandler = (e) => {
    //console.log(e.target.value);
    dispatch(filterSlice.actions.priceMaxFilter(+e.target.value));
  };

  return (
    <Box width='20vw' p='16px 24px'>
      <Box fontWeight='600' fontSize='24px'>
        Categories
      </Box>
      <Box>
        <Box fontWeight='600' marginTop='20px'>
          Search
        </Box>
        <Input
          marginTop='8px'
          bg='#fff'
          placeholder='Search here...'
          onChange={searchChangeHandler}
          value={search}
        />
      </Box>
      <Box fontWeight='600' marginTop='20px'>
        Filter by
      </Box>
      <CategorySelect
        categoryChangeHandler={filterChangeHandler}
        categoryId={filterBy}
      />
      <Box marginTop='20px' fontWeight='600'>
        Price
      </Box>
      <Box marginTop='8px'>
        <Flex align='center'>
          <FormLabel htmlFor='' minWidth='50px' fontWeight='400'>
            From
          </FormLabel>
          <Input
            type={'number'}
            bg='#fff'
            value={priceMin}
            onChange={priceMinChangeHandler}
          />
        </Flex>
        <Flex align='center'>
          <FormLabel minWidth='50px' marginTop='12px' fontWeight='400'>
            To
          </FormLabel>
          <Input
            type={'number'}
            bg='#fff'
            value={priceMax}
            onChange={priceMaxChangeHandler}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
