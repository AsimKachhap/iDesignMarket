
import './App.css';

import {Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Products from './components/Products';
import Layout from './components/Layout';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
         <Route path="/" element={<Layout/>} >
         <Route path="products" element={<Products/>} />
          <Route path="cart" element={<Cart/>} />
         </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
