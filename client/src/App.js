import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNavbar from './component/UI/Navbar';

function App() {
  return (
    <>
      <Router>
        {/* <TopNavbar /> */}
        <Routes>
          <Route path='/' element={<TopNavbar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
