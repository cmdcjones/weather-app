import { useState } from 'react';

function App() {
const API = {
    key: "87c67ec091fba53a311efe1fff2ebdfb",
    baseUrl: "http://api.openweathermap.org/data/2.5/"
};

  return (
      <div className="app">
        <div className="app-container">
          <div className="top">
            <div className="location">
              <p>Rockville</p>
            </div>
            <div className="temperature">
              <h1>99&deg;F</h1>
            </div>
            <div className="description">
              <p>Clear</p>
            </div>
         </div>
         <div className="bottom">
           <div className="feels-like">
             <p>103&deg;F</p>
           </div>
           <div className="humidity">
             <p>5%</p>
           </div>
           <div className="wind-speed">
             <p>2 MPH</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default App
