import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" src="backgroundPic1.jpg" />

        <div className="home_row">
          <Product
            id="1"
            title="Buried: The thrilling new crime series introducing Detective Jack Warr
          Kindle Edition"
            price={1.0}
            image="https://m.media-amazon.com/images/I/51XKMqal5nL._AC_SY240_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="BONTEC Triple Arm Desk Mount LCD LED Computer Monitor Bracket Stand 13”-24” Screen TV"
            price={41.99}
            image="https://m.media-amazon.com/images/I/61KdVGLJnKL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="Samsung 970 EVO 1 TB PCIe NVMe M.2 (2280) Internal Solid State Drive (SSD) (MZ-V7E1T0)"
            price={148.12}
            image="https://m.media-amazon.com/images/I/61q8oqAg2pL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="Blade Hawks RGB Gaming Headphone Stand with 3.5mm AUX and 2 USB Ports for PC, Durable Headset Stand Holder for Bose, Beats, Sony, Sennheiser, Jabra, JBL, AKG, Fancy Gaming Accessories - HS18"
            price={22.59}
            image="https://m.media-amazon.com/images/I/61OPbD+d4XL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Corsair VOID ELITE RGB Wireless Gaming Headset (7.1 Surround Sound, Low Latency 2.4 GHz Wireless, 40ft Wireless Range, Customisable RGB Lighting, Durable Aluminium with PC, PS4 Compatibility) - Black"
            price={99.98}
            image="https://m.media-amazon.com/images/I/816xdLbjE4L._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title='Samsung 50" TU7100 HDR Smart 4K TV with Tizen OS'
            price={429.0}
            image="https://m.media-amazon.com/images/I/81pizRn9ieL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
