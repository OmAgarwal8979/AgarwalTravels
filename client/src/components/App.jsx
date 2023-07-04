import React from "react";
import SignupPage from "./Signup.jsx";
import LoginPage from "./Login.jsx";
import Error from "./Error.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Settings from "./Settings.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="signup" element= {<SignupPage/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App;
