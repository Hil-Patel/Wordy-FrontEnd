import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} >
            </Route>
                <Route path="authenticate" element={<Authentication/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute
