import React from "react";
import "../Component1/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-box-1 footer-box">
          <h2>Jadoo</h2>
          Book your trip in minute, <br /> get full Control for much longer.
        </div>
        <div className="footer-box-2 footer-box">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="footer-box-3 footer-box">
          <h3>Contact</h3>
          <ul>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div className="footer-box-4 footer-box">
          <h3>More</h3>
          <ul>
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className="footer-box-5 footer-box">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <h3>Discover our app</h3>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>
        &copy; All right reserved to Aspiro {" "}
      </p>
      <p style={{ textAlign: "center" }}>Made By Rachit Kaushik</p>
    </>
  );
}

export default Footer;