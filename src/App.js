import logo from './logo.svg';
import './App.css';

import React,{useState} from "react";
import {Login} from '../src/components/LoginForm'
import {Register} from "../src/components/RegisterForm"

function App() {
    const [currentForm, setCurrentForm] = useState("r")

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

  return (
    <div className="App">

        {
            currentForm === "login" ?   <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }



    </div>
  );
}

export default App;
