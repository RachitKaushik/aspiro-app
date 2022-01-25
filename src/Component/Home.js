import React from "react";
import "../Component1/home.css";
function Home() {
  return (
    <div>
      <img
        src={require("../images/Decore.jpg")}
        className="home-decore"
        no-repeat
        center
        center
        cover
      />
      <div className="home-top mx-4">
        <div className="home-top-text">
          <div className="home-top-text1 color-text">
            BEST DESTINATION AROUND THE WORLD
          </div>
          <div className="home-top-text2">
            Travel, enjoy and live a new and full life
          </div>
          <div className="home-top-text3">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </div>
          <div className="home-top-text4">
            <button>Find out More</button>
            <i className="fa fa-play-circle-o"></i>
          </div>
        </div>
        <div className="home-top-girl">
          <img src={require("../images/Traveller 1.jpg")} />
        </div>
      </div>
      <div className="section-category">
        <h3 style={{ textAlign: "center", margin: 20 }}>Category</h3>
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Top Destinations
        </h1>
        <div className="category-box">
          <div className="rectangle">
            <img
              className="rectangle-image"
              src={require("../images/Rectangle1.jpg")}
              center
            />
            <img
              className="rectangle-text"
              src={require("../images/rectangle_text.png")}
              center
            />
          </div>
          <div className="rectangle">
            <img
              className="rectangle-image"
              src={require("../images/Rectangle2.jpg")}
              center
            />
            <img
              className="rectangle-text"
              src={require("../images/rectangle_text.png")}
              center
            />
          </div>
          <div className="rectangle">
            <img
              className="rectangle-image"
              src={require("../images/Rectangle3.jpg")}
              center
            />
            <img
              className="rectangle-text"
              src={require("../images/rectangle_text.png")}
              center
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;