
import './App.css';

// import Home from './components/Home.js';
import Home from './components1/Home.js';
// import Header from './components/Header.js';
import Header from './components1/Header.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './components/Projects.js'
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">

      {/* <Router>

      <Header />

      
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </Router> */}

      <Header />
      <Home />
     

     
      

      

        

     
      

      
      
      
     

    </div>
  );
}

export default App;
