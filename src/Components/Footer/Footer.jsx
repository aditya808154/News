import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              quae fuga recusandae quasi necessitatibus autem labore non quo
              soluta numquam.
            </p>

            <i className="fa fa-envelope"></i>
            <span>hello@gmail.com</span>
            <br />
            <i className="fa fa-headphones"></i>
            <span>+91 8081575712</span>
          </div>

          <div className="box">
            <h3>SPORT</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, excepturi.
              </p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, excepturi.
              </p>
            </div>
          </div>
          <div className="box">
            <h3>CRICKET</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, excepturi.
              </p>
            </div>
            <div className="item">
              <img src="../images/hero/hero4.jpg" alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, excepturi.
              </p>
            </div>
          </div>

          <div className="box">
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="legal">
        <div className="container flexSB">
          <p>© 𝔞𝔩𝔩 𝔯𝔦𝔤𝔥𝔱𝔰 𝔯𝔢𝔰𝔢𝔯𝔳𝔢𝔡</p>
          <p>𝔐𝔞𝔡𝔢 𝔅𝔶🖤𝔄𝔡𝔦𝔱𝔶𝔞 𝔓𝔯𝔞𝔧𝔞𝔭𝔞𝔱𝔦</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
