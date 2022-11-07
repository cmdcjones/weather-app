import { useState } from 'react';

function App() {
const KEY = "58ec2497078a2bd00ef372b92ecbe4d0";

const [data, setData] = useState({});
const [location, setLocation] = useState('');

const URL = 'https://api.openweathermap.org/data/2.5/weather?q='
            + location + '&appid=' + KEY + '&units=imperial';

const getLocationData = (event) => {
    if (event.key === "Enter") {
        try {
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData({
                    location: data.name,
                    temperature: data.main.temp.toFixed(0),
                    description: data.weather[0].description,
                    feelsLike: data.main.feels_like.toFixed(0),
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                });
            });
            setLocation('');
        } catch (error) {
            console.log(error)
        }
    }
};

  return (
      <div className="app">
        <div className="get-location">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={getLocationData}
            placeholder="Enter a location..."
            type="text"
          />
        </div>
        <div className="app-container">
          <div className="top">
            <div className="location">
              <p>{data.location}</p>
            </div>
            <div className="temperature">
                { data.temperature ? <h1>{data.temperature}&deg;F</h1>
                  : ""
                }
            </div>
            <div className="description">
              <p>{data.description}</p>
            </div>
         </div>
        { data.location ?
         <div className="bottom">
           <div className="feels-like">
             { data.feelsLike ?  <p className="bold">{data.feelsLike}&deg;F</p>
               : ""
             }
             <p className="small">Feels Like</p>
           </div>
           <div className="humidity">
             { data.humidity ? <p className="bold">{data.humidity}%</p>
               : ""
             }
             <p className="small">Humidity</p>
           </div>
           <div className="wind-speed">
             { data.windSpeed ? <p className="bold">{data.windSpeed} MPH</p>
               : ""
             }
             <p className="small">Wind Speed</p>
           </div>
        </div>
          : ""
        }
      </div>
    </div>
  );
}

export default App
