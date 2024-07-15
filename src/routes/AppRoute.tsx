import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import { useEffect, useState } from "react";
import ResetPassword from "../pages/ResetPassword";

const AppRoute = () => {
    const [buttonClick,setButtonClick]=useState("")
    const [token,setToken]=useState("")
    useEffect(()=>{
      if(localStorage.getItem("ResetToken")){
        setToken(localStorage.getItem("ResetToken"));
      }
      console.log(token);
      
    })
    
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home setButtonClick={setButtonClick}/>} />
            <Route path="/authenticate" element={<Authentication page={buttonClick} setToken={setToken} token={token}/>}/>
            {token!="" && <Route path={`/reset/${token}`} element={<ResetPassword/>}/>}
            <Route path="*" element={<h1>error 404 no page found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
