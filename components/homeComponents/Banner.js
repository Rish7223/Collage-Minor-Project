import React from "react";

const Banner = () => {
  return (
    <div id="banner">
      <div class="slider">
        <div class="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <div class="text">
            Your Dreams Our <span class="mission">Mission </span>
            <span class="line"></span>
            <br />
            <p class="second">
              To be on the top is your dream and to accomplish
              <br />
              <span class="third"> it is our sole mission.</span>
            </p>
          </div>

          <div class="slide first">
            <img src="images/1.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="images/2.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="images/3.jpg" alt="" />
          </div>
          <div class="slide">
            <img src="images/4.jpg" alt="" />
          </div>

          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
          </div>
        </div>
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
