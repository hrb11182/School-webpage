import React from "react";
import "./carousel.css";

function Carousel() {
  return (
    <div className="slider-maincontainer" id="facility">
      <div className="slider-pic-wrapper">
        <div className="slider-picontainer1">
          <div className="slider-textcontainer">
            <h2>Our Auditorium</h2>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
          </div>
        </div>
        <div class="slider-picontainer2">
              <div class="slider-textcontainer">
                  <h2>Our Library</h2>
                  <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
              </div>
          </div>

          <div class="slider-picontainer3">
              <div class="slider-textcontainer">
                  <h2>Our Computer Lab</h2>
                  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et.
                  </h6>
              </div>
          </div>

          <div class="slider-picontainer4">
              <div class="slider-textcontainer">
                  <h2>Our Science Lab</h2>
                  <h6>So sind Sie sicher und lange mit Ihrem Drahtesel unterwegs!</h6>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Carousel;
