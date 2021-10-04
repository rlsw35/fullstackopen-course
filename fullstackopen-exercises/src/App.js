import axios from "axios";
import React, { useState, useEffect } from "react";
const api_key = process.env.REACT_APP_API_KEY;
const App = () => {
  return (
    <div>
      <Country />
    </div>
  );
};

const Country = () => {
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("Hello");
  const [searchCountry, setSearchCountry] = useState([]);
  const [limiter, setLimiter] = useState(false);
  const [single, setSingle] = useState(false);
  const handleOnChange = (event) => {
    const result = countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
    );
    if (result.length > 0) {
      setSearchCountry(result);
      if (result.length > 10) {
        setLimiter(true);
      } else {
        setLimiter(false);
      }
      if (result.length === 1) {
        setSingle(true);
      } else {
        setSingle(false);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewCountry(countries.filter((e) => e.name === newCountry));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Find Countries : <input onChange={handleOnChange} />
        <button type="submit">Find Now</button>
      </form>
      <h2>Countries Searched : </h2>
      <hr />
      <ul>
        {single ? (
          <SingleCountry country={searchCountry[0]} />
        ) : limiter ? (
          "Too many queries.."
        ) : (
          searchCountry.map((e) => <DisplayCountry key={e.id} country={e} />)
        )}
      </ul>
    </div>
  );
};

const DisplayCountry = ({ country }) => {
  const [toggle, setToggle] = useState(false);

  const handleShow = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <li>
      {country.name.common} {country.flag} &nbsp;
      <button onClick={() => handleShow()}>
        {toggle ? "Minimize" : "More Info"}
      </button>
      {toggle ? (
        <SingleCountry key={country.name.common} country={country} />
      ) : (
        ""
      )}
    </li>
  );
};

const SingleCountry = ({
  country: { capital, languages, name, flag, population },
}) => {
  const myArray = [];
  const [languageInfo, setLanguage] = useState([]);
  const [weatherInfo, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=3890fc26271cfe5881fe1d05e7237f7d&query=${capital}`
      )
      .then((response) => {
        console.log("weather stack", response.data);
        console.log("api key", api_key);
        setWeather(response.data.current);
      });
  }, [capital]);

  useEffect(() => {}, [languages]);

  const handleLang = () => {
    for (var key in languages) {
      if (languages.hasOwnProperty(key)) {
        myArray.push(languages[key]);
      }
    }
    setLanguage(myArray);
    console.log("myArray", myArray);
  };

  return (
    <div onLoad={() => handleLang()}>
      <h2>
        {name.common} {flag}
      </h2>
      <ul>
        <h3>Population</h3>
        <li>{population}</li>
      </ul>
      <ul>
        <h3>Languages</h3>
        {languageInfo.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <ul>
        <h3>Weather</h3> <img src={weatherInfo.weather_icons} />
        <li>{weatherInfo.temperature}°C</li>
        <li>{weatherInfo.weather_descriptions}</li>
      </ul>
    </div>
  );
};

export default App;
