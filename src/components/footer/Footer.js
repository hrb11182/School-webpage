import React from "react";
import "./footer.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <div className="parent" id="footer">
      <div class="container">
        <h1>Frequently Asked Questions?</h1>
        <div class="tab">
          <input type="radio" name="acc" id="acc1" />
          <label for="acc1">
            <h2>01</h2>
            <h3>How do I apply?</h3>
          </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              dolorem soluta illo. Asperiores quisquam, nihil atque autem ex ut
              nam. Molestiae, soluta optio unde qui maxime enim illo non
              aliquid.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="acc" id="acc2" />
          <label for="acc2">
            <h2>02</h2>
            <h3>Lost or forgotten ?</h3>
          </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              dolorem soluta illo. Asperiores quisquam, nihil atque autem ex ut
              nam. Molestiae, soluta optio unde qui maxime enim illo non
              aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Porro dolorem soluta illo. Asperiores quisquam, nihil atque autem
              ex ut nam. Molestiae, soluta optio unde qui maxime enim illo non
              aliquid.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="acc" id="acc3" />
          <label for="acc3">
            <h2>03</h2>
            <h3>Lost or forgotten ?</h3>
          </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Porro dolorem
              soluta illo. Asperiores quisquam, nihil atque autem ex ut nam.
              Molestiae, soluta optio unde qui maxime enim illo non aliquid.
            </p>
          </div>
        </div>
        <div class="tab">
          <input type="radio" name="acc" id="acc4" />
          <label for="acc4">
            <h2>04</h2>
            <h3>Lost or forgotten ?</h3>
          </label>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              dolorem soluta illo. Asperiores quisquam, nihil atque autem ex ut
              nam. Molestiae, soluta optio unde qui maxime enim illo non
              aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              .
            </p>
          </div>
        </div>
      </div>
      <footer>
        {/* <ul class="social_icon">
          <li>
            <a href="">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a href="">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
  </ul> */}
        <ul class="menu">
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#tutor">Tutor</Link>
          </li>
          <li>
            <Link to="#vision">Vision</Link>
          </li>
          <li>
            <Link to="#award">Awards</Link>
          </li>
          <li>
            <Link to="#facility">Facilities</Link>
          </li>
        </ul>
        <p>&copy; 2022 A.B.Development | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
