import React from "react";
import Navbar from "../components/Navbar";
import MainBoard from "../components/MainBord/MainBoard";
import TrendingCategories from "../components/TrendingCategories/TrendingCategories";
import "../App.css"

const Home = () => (
  <div className="home">
    <Navbar/>
    <MainBoard/>
    <TrendingCategories/>
  </div>
    
    );

export default Home;