import React from 'react';
import "../Component1/home2.css"
export default function Home2() {
  return (
  <>
  <div>
    <div className='home-sec'>
        <h4 className='center col'>CATEGORY</h4>
        <h1 className='center text-weight'> We Offers Best Services</h1>
        <div className="home-sec2">
          <div className='home-sec3'>
            <img src={require("../images/weather.jpg")} alt="" /><h1>Calculated Weather</h1>
              <p>Built Wicket longer admire do barton vanity itself do in it. </p></div>
          <div className='home-sec3 flight-card'><img src={require("../images/flight.png")} alt="" /><h1>Best Flights</h1><p>Engrossed listening. Park gate sell they west hard for the.</p></div>
          <div className='home-sec3'><img src={require("../images/event.jpg")} alt="" /><h1>Local Events </h1><p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p></div>
          <div className='home-sec3'><img src={require("../images/custo.webp")} alt="" /><h1 style={{fontSize:30}}>Customization</h1><p>We deliver outsourced
aviation services for
military customers</p></div>
        </div>

    </div>
  </div>
  </>
  );
}
