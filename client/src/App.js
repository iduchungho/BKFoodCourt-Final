import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/CartContex';
import UINavbar from './component/UI/Navbar';
import Footer from './component/UI/Footer';
import Home from './component/modules/home/Home';
import Cart from './component/modules/Cart/Cart';
import Login from './component/modules/Login/Login';
import Register from './component/modules/Register/Register';
import PayComponent from './component/modules/payment/Pay';
function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <UINavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Pay' element={<PayComponent />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
