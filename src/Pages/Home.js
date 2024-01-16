import React from "react";
import Layout from "./../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../Styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{color:"goldenrod"}}>Fast Food</h1>
          
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;