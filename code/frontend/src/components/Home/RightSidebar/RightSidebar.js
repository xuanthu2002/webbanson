import { Grid } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsRemain } from '../../../redux/selectors.js';
import Card from '../../UI/Card/Card.js';

const RightSidebar = () => {
  const products = useSelector(productsRemain);

  return (
    <Grid
      gridTemplateColumns={'repeat(3,1fr)'}
      gridTemplateRows={'repeat(1,1fr)'}
      gap='36px'
      flex={1}
    >
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Card
            name={product.name}
            description={product.description}
            price={product.price}
            url={product.imageURL}
          />
        </Link>
      ))}
    </Grid>
  );
};

export default RightSidebar;
