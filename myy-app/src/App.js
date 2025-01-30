import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<CustomerRoutes/>}></Route>
        <Route></Route>
      </Routes>
    </div>  
  );
}

export default App;
