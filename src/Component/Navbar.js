import React from "react";
import "../Component1/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          JADOO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul
          className="navbar-nav nav justify-content-end collapse navbar-collapse mr-auto"
          id="navbarSupportedContent"
        >
          <li className="nav-item">
            <a className="nav-link" href="#">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hotels
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Bookings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">login</a>
          </li>
          <li className="nav-item sign-shadow">
            <a className="nav-link">Sign Up</a>
          </li>
        </ul>
        <div class="dropdown">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    EN
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Hindi</a></li>
    <li><a className="dropdown-item" href="#">Spanish</a></li>
    
  </ul>
</div>

      </nav>

    </div>
  );
}

export default Navbar;


