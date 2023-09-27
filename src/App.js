import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Legal from './Legal';
import Ourteams from './Ourteams';
import Form from './Form';
import Contact from './Contact';
import Servicesandpackages from './Servicesandpackages';
import Aboutus from './Aboutus';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Home />} /> 
      <Route path ="/Legal" element ={<Legal />} />
      <Route path ="/Ourteams" element ={<Ourteams />} />
      <Route path ="/Form" element ={<Form />} />
      <Route path ="/Contact" element ={<Contact />} />
      <Route path ="/Services&Packages" element ={<Servicesandpackages />} />
      <Route path ="/Aboutus" element ={<Aboutus />} />   
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
