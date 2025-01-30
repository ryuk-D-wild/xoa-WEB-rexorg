import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from '../customer/components/Navigation/Navigation';
import Footer from "../customer/components/Footer/Footer";
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/productDetails/productDetails';
import Checkout from '../customer/checkoutpages/CheckOut';
import Order from '../customer/postcheckpages/Order';
import OrderDetails from '../customer/postcheckpages/OrderDetails';
 
const CustomerRoutes =()=>{
    return(
        <div>
            <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>  
      <div className="pt-28">          
            <Routes>
            
            
                <Route path= '/*' element={<HomePage />}></Route>
                <Route path="/products" element={<Product />} />   
                <Route path= '/cart' element={<Cart />}></Route>
                <Route path= '/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>

                
                
                  {/*<Product/>   */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        {/* <OrderDetails /> */}

            </Routes>
            </div>
            <div><Footer /></div>
        </div>
    )
}

export default CustomerRoutes;