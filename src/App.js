import React, { useState } from 'react'
import keys from './keys'
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';



const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL

}

function App() {

  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  }

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <>
      <Header />
    <div className = {
      typeof weather.main != "undefined"
       ? weather.main.temp <= 19
        ? "App cold" 
        : "App hot" 
       : "App" 
    }>
      <main>
        <div className = "search-container">
          <input 
            type="text"
            placeholder="Search location..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
        <div>
          <div className = "location-container">
            <div className = "location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className = "date">{dataBuild(new Date())}</div>
          </div>
          <div className = "weather-container">
            <div className = "temperature">
            {Math.round(weather.main.temp)} °C
            </div>
            <div className = "weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : (
          ""
        )}
      </main>
    </div>
    </>
  );
}


export default App;
