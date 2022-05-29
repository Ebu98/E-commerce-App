import React from "react";
import "./HomePage.style.scss";

function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="item-menu">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      
        <div className="item-menu">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      
        <div className="item-menu">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>

      </div>
        <div className="item-menu">
          <div className="content">
            <h1 className="title">WOMANS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
      </div>
        <div className="item-menu">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
