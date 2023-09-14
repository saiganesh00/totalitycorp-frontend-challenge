import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
