import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="body">
      <div class="row">
        <div class="example-2 card">
          <div class="wrapper">
            <div class="header">
              <ul class="menu-content">
                <li>
                  <a href="#" class="fa fa-bookmark-o"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-heart-o">
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="fa fa-comment-o">
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="data">
              <div class="content">
                <span class="author">Jane Doe</span>
                <h1 class="title">
                  <a href="#">Principal: A.B Public School(A.B.P.S)</a>
                </h1>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam labore voluptatem sint!consectetur, adipisicing elit. Laboriosam labore voluptatem sint!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
