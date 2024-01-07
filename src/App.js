import React from 'react';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
//import Navbar from './components/navbar'


function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <center><Link to="/home"><h2>Home</h2></Link></center>
    </nav>
       <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        </Routes> 
      </BrowserRouter>
    </>
 );
}

export default App;

