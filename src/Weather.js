import React, { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "150a243d8d714d42bfc8e261bc234512";

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        setError("");
        setWeather(null);

        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?city=${city}&country=IN&key=${API_KEY}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("API Error");
        }

        const data = await response.json();
        setWeather(data.data[0]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch weather data");
        }
      }
    };

    fetchWeather();

    return () => controller.abort();
  }, [city]);

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", textAlign: "center" }}>
      <h2>🌤️ Weather Dashboard</h2>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <br /><br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          <h3>{weather.city_name}, {weather.country_code}</h3>
          <p>🌡️ Temperature: {weather.temp}°C</p>
          <p>☁️ Description: {weather.weather.description}</p>
          <p>💨 Wind Speed: {weather.wind_spd} m/s</p>
          <p>🌅 Sunrise: {weather.sunrise}</p>
          <p>🌇 Sunset: {weather.sunset}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
