import { Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { categorySelectors } from '../../../redux/selectors.js';

const CategorySelect = ({ categoryId, categoryChangeHandler }) => {
  const categories = useSelector(categorySelectors);

  const selectChangeHandler = (e) => {
    categoryChangeHandler(e.target.value);
  };

  return (
    <Select onChange={selectChangeHandler} value={categoryId}>
      {categories.map((category) => (
        <option value={category.id} key={category.id}>
          {category.categoryName}
        </option>
      ))}
    </Select>
  );
};

export default CategorySelect;
