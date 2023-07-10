import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import {Login} from './components/loginForm/LoginForm'
import {Register} from "./components/registerForm/RegisterForm"
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Form } from './components/form/Form';
import { Footer } from './components/footer/Footer';


function App() {
 
  return (
    <div className="App">
{/*        
    <Header/> 
    <About/> */}
       
       <Header/>
       <About/>
       <Footer/>
    
    </div>
  );
}

export default App;
