import logo from './logo.svg';
import './App.css';
import HomePage from './customer/pages/HomePage';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>
      <div className="pt-28">
        {/* <HomePage /> */}
        <Product/>
      </div>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
