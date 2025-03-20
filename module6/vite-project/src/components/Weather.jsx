import { useState } from "react";
// Child component - receives parent state handler via props
function CheckWeather(props) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy"];
  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
    // ++ try to destructure this function from the props object
    props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };
  return <button onClick={randomWeather}>Check Weather</button>;
}
// ++ Add some more weather types of your own
// Child component to display and convert temp if needed
function Temperature({ temp, units = "C", onToggleUnits }) {
  // default to celcius
  // convert to Fahrenheit if units is F (or not C)
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;
  return (
    <span class="Temperature">
      <strong>
        {" "}
        {parseInt(displayTemp)}&deg;{units}{" "}
      </strong>
      <button onClick={onToggleUnits}>
        Switch to &deg;{units === "C" ? "F" : "C"}
      </button>
    </span>
  );
}
// ++ Try adding a button to convert between C and F temps
// Parent component storing common state data
function Weather() {
  // copy to Weather.jsx
  // two separate state values to store weather data
  const [weather, setWeather] = useState("sunny");
  const [tempCelcius, setTempCelcius] = useState(27);
  const [units, setUnits] = useState("C");
  // handler function to update both state values at once
  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather);
    setTempCelcius(newTemp);
  };
  // handler function to toggle between temperature units
  const toggleUnits = () => {
    setUnits(units === "C" ? "F" : "C");
  };
  return (
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>
      <div>
        <strong>{weather}</strong> with a temp of
        {/* Child component to display temp -
needs temp value as prop */}
        <Temperature
          temp={tempCelcius}
          units={units}
          onToggleUnits={toggleUnits}
        />
      </div>
      {/* Child component to update the weather -
needs handler function as prop */}
      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  );
}
export default Weather;