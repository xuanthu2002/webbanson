import { useDispatch } from 'react-redux';
import useNotification from '../../hook/useNotification.js';
import Admin from './Admin.js';
import { addNewProductThunk } from '../../redux/productSlice.js';

const CreateNewProduct = () => {
  const dispatch = useDispatch();
  const { sendNotification } = useNotification();

  const createNewProductHandler = (newProduct) => {
    sendNotification(dispatch(addNewProductThunk(newProduct)));
  };

  return <Admin upsertProductHandler={createNewProductHandler} />;
};

export default CreateNewProduct;
