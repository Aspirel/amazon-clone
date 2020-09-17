import React from "react";
import "./CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" src="backgroundPic1.jpg" />

        <div className="home_row">
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
