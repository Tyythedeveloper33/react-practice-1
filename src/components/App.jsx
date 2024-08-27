import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import Lognsig from "./promptLognsig.jsx";
import { render } from "@testing-library/react";
import Login from "./login.jsx";
import SignUp from "./signup.jsx";


const App = () => {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);


  const handleLogIn = () => {
    setLogIn((prevLogIn) => !prevLogIn);
    setShowLogin((prevShowLogIn) => !prevShowLogIn);
  };
  const handleSignUp = () => {
    setSignUp((prevSignUp) => !prevSignUp);
    setShowSignUp((prevshowSignUp) => !prevshowSignUp);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {showLogin ? (
          <Login />
        )  : showSignUp ? (
        <SignUp/>
      ):(
          <Lognsig onLogIn={handleLogIn} onSignUp={handleSignUp} />
        )}



      </header>
    </div>
  );
};

export default App;
