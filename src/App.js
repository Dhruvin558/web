import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Index from './Components/Index';
import Nbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login.js';
import Register from './Components/Register';
import Abc from './Components/Data form fire/Abc.js'



function App() {
  return (
    <Router>
      <div>
        <Nbar />
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/Abc" element={<Abc />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
