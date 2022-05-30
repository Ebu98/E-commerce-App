import React from 'react';
import "./Menu-item.style.scss";


const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} item-menu`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;


