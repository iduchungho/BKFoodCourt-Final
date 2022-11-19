import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UINavbar from './component/UI/Navbar';
import Footer from './component/UI/Footer';
import Home from './component/modules/Home/Home';

function App() {
  return (
    <>
      <Router>
        <UINavbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
