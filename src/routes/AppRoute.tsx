import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import { useState } from "react";

const AppRoute = () => {
    const [buttonClick,setButtonClick]=useState("")
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setButtonClick={setButtonClick}/>} />
            <Route path="/authenticate" element={<Authentication page={buttonClick}/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
