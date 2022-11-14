import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UINavbar from './component/UI/Navbar';
import Home from './component/modules/home/Home';

function App() {
  return (
    <>
      <Router>
        <UINavbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
