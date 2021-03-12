import React from "react";
import Selection2 from "./Starter.JPG";

const Home = () => {
  return (
    <div Style="margin-top:150px">
      <div className="container">
        <div className="card small">
          <div className="card-image">
            <img src={Selection2} Style="height:200px" alt="bar graph" />

            <span class="card-title" Style="color:black ">
              <b>Bubble Sort</b>
            </span>
          </div>

          <div className="card-action">
            <a href="/bubble">
              <b>Bubble Sort</b>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div class="card small">
          <div class="card-image">
            <img src={Selection2} Style="height:200px" alt="bar graph" />

            <span class="card-title" Style="color:black">
              <b>Selection</b>
            </span>
          </div>

          <div class="card-action">
            <a href="/selection">Selection Sort</a>
          </div>
        </div>
        <br />
        <br />
        <div class="card small">
          <div class="card-image">
            <img src={Selection2} Style="height:200px" alt="bar graph" />

            <span class="card-title" Style="color:black">
              <b>Insertion Sort</b>
            </span>
          </div>

          <div class="card-action">
            <a href="/insertion">Insertion Sort</a>
          </div>
        </div>
        <br />
        <br />

        <div class="card small">
          <div class="card-image">
            <img src={Selection2} Style="height:200px" alt="bar graph" />

            <span class="card-title" Style="color:black">
              <b>Quick Sort</b>
            </span>
          </div>

          <div class="card-action">
            <a href="/quick">Quick Sort</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
