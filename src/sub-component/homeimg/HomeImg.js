import React from 'react';
import './himg.css';
import img from './1.jpg';

const HomeImg = () => {
  return (
    <div className="img">
        <img src={img} alt="" />
    </div>
  )
}

export default HomeImg