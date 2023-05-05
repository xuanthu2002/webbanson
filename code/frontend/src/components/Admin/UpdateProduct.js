import { useDispatch, useSelector } from 'react-redux';
import { productSelector } from '../../redux/selectors.js';
import Admin from './Admin.js';
import useNotification from '../../hook/useNotification.js';
import { updateProductThunk } from '../../redux/productSlice.js';

const UpdateProduct = () => {
  const product = useSelector(productSelector);
  const dispatch = useDispatch();
  const { sendNotification } = useNotification();

  const updateProductHandler = (newProduct) => {
    sendNotification(
      dispatch(updateProductThunk({ id: product.id, data: newProduct }))
    );
  };

  return (
    <Admin product={product} upsertProductHandler={updateProductHandler} />
  );
};

export default UpdateProduct;
