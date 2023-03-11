import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route exat path='/' element={<Home/>} />
      <Route exat path='/videos' element={<Videos/>} />
      <Route exat path='/upload' element={<Upload/>} />
      <Route exat path='/login' element={<Login/>} />
      <Route exat path='/signup' element={<Signup/>} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
