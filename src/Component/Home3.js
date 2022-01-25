import React from "react";
import "../Component1/home3.css";

function HomeSection2() {
  return (
    <>
      <div className="home-section2">
        <div className="section2-text">
          <div className="box-1">Easy and Fast</div>
          <div className="box-2">
            <h1>
              Book your next trip <br /> In 3 easy steps
            </h1>
          </div>
          <div className="box-3">
            <i class="fa fa-plane" style={{ color: "yellow" }}></i>
            <div>
              <h3>Choose Destination</h3>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </div>
          </div>
          <div className="box-3">
            <i class="fa fa-dollar" style={{ color: "brown" }}></i>
            <div>
              <h3>Make Payment</h3>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </div>
          </div>
          <div className="box-3">
            <i class="fa fa-bus" style={{ color: "#006380" }}></i>
            <div>
              <h3>Reach Airport on Selected Date</h3>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Urna, tortor tempus.
            </div>
          </div>
        </div>
        <div className="section2-rectangle">
          <img src={require("../images/Rectangle4.jpg")} />
        </div>
      </div>
      <div className="subscribe-box">
        <div className="subscribe-box-text">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </div>
        <div className="subscribe-box-input">
          <input placeholder="Your Email"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default HomeSection2;