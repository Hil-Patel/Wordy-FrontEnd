import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import AuthenticationLogin from "../pages/AuthenticationLogin";

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/authenticate" element={<Authentication/>}/>
            <Route path="/authenticate/login" element={<AuthenticationLogin/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
