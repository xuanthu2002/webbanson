import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Product from './components/Product/Product.js';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js';
import Signup from './components/Authentication/Signup/Signup.js';
import Login from './components/Authentication/Login/Login.js';
import Admin from './components/Admin/Admin.js';
import Order from './components/Order/Order.js';
import { useSelector } from 'react-redux';
import { isLoginSelector } from './redux/selectors.js';
import CreateNewProduct from './components/Admin/CreateNewProduct.js';
import UpdateProduct from './components/Admin/UpdateProduct.js';
import Success from './components/Success/Success.js';

function App() {
  const isLogin = useSelector(isLoginSelector);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Order />} />
        <Route
          path='/signup'
          element={isLogin ? <Navigate to='/' /> : <Signup />}
        />
        <Route
          path='/login'
          element={isLogin ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/admin/addNewProduct'
          element={
            localStorage.getItem('role') === 'admin' ? (
              <CreateNewProduct />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route
          path='/admin/updateProduct'
          element={
            localStorage.getItem('role') === 'admin' ? (
              <UpdateProduct />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
