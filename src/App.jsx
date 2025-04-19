import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={'na'}/>
            <Route path='/Contactus' element={'na'}/>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
