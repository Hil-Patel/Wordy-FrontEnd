import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import { useState } from "react";

const AppRoute = () => {
    const [buttonClick,setButtonClick]=useState("")
    const [token,setToken]=useState("")
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setButtonClick={setButtonClick}/>} />
            <Route path="/authenticate" element={<Authentication page={buttonClick} setToken={setToken} token={token}/>}/>
            <Route path={`/reset/${token}`} element={<h1>Hello {token}</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
