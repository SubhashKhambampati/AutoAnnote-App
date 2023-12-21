
import './App.css';

import Home from './components/Home.js';
import Header from './components/Header.js';
import Data from './components/Data.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">

      {/* <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects" element={<Data />} />
        </Routes>
      </Router> */}
      <Footer />

      
      
      
     

    </div>
  );
}

export default App;
