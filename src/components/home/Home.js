import React from "react";
import "./home.css";
import TypeWriter from '../../sub-component/Typewriter/TypeWriter';

function Home() {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="box">
          <TypeWriter />
        </div>
      </div>
    </div>
  );
}

export default Home;
