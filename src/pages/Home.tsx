import React from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import HowToPlay from "../component/HowToPlay";
AOS.init();

const Home = ({ setButtonClick }) => {
  
  return (
    <div className="h-screen transition-colors duration-900">
      <Navbar />
      <HowToPlay setButtonClick={setButtonClick}/>
    </div>
  );
};

export default Home;
