import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="section-1">
          <a className="foot-logo" href="https://www.cuchd.in">
            <img src="/images/culogo.png" alt="" />
          </a>
          <div className="text">
            <p>
              Chandigarh University is a full-fledged university established by
              the Punjab State Legislature and is recognized by University
              Grants Commission under Section 2(f) with the right to confer
              degrees as per Section 22(1) of the UGC Act, 1956.
            </p>
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/chandigarhuniversitygharuan"
                  className="icon"
                >
                  <i className="fab fa-facebook-f" id="facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Chandigarh_uni" className="icon">
                  <i className="fab fa-twitter" id="twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/chandigarhuniversity"
                  className="icon"
                >
                  <i className="fab fa-youtube" id="youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://www.pinterest.com/chandigarhunive/boards/"
                  className="icon"
                >
                  <i className="fab fa-pinterest" id="pinterest"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chandigarhuniversity/"
                  className="icon"
                >
                  <i className="fab fa-instagram" id="instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="self">
          <p>Created by Amit & Rishabh</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
