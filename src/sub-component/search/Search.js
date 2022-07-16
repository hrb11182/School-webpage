import React from "react";
import "./search.css";
import Img from './magnifying-glass-solid.svg';

function Search() {
  return (
    <div class="search-box">
      <input
        class="search-txt"
        type="text"
        name=""
        placeholder="Search.."
      />

      <a class="search-btn" href="#">
        <img src={ Img } />
      </a>
    </div>
  );
}

export default Search;
