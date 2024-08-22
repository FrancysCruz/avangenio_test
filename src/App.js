import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './screens/Home';
import Auth from './screens/Auth';
import SingIn from './screens/SingIn';

function App() {
  return (
    <div className='main'>
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* <Navbar /> */}
          <div className="container mx-auto mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Auth />} /> 
              <Route path="/singin" element={<SingIn />} />
            </Routes>
          </div>
        </div>
     </Router>
    </div>
  );
}

export default App;
