import './App.css';
import HomePage from './customer/pages/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductDetails from './customer/components/productDetails/productDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/checkoutpages/CheckOut';
import Order from './customer/postcheckpages/Order';

function App() {
  return (
    <Router>
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>
      <div className="pt-28">
        {/*  <HomePage /> */}
        {/*<Product/>   */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
         <Order />
      </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
