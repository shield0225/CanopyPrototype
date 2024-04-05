import React, { useState, useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const OPENWEATHERMAP_API_KEY = "e4207a42aeba2cbfa50e55fb467fec57"; 

function WeatherMarker() {
  const [weather, setWeather] = useState(null);

  const map = useMapEvents({
    moveend: () => {
      const center = map.getCenter();
      fetchWeather(center.lat, center.lng);
    },
  });

  const fetchWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          lat,
          lon,
        });
      })
      .catch(console.error);
  };

  useEffect(() => {
    // Initial weather fetch for the map's starting center
    const center = map.getCenter();
    fetchWeather(center.lat, center.lng);
  }, [map]);

  return weather ? (
    <Marker position={[weather.lat, weather.lon]}>
      <Popup>
        {weather.name}: {weather.temp}°C, {weather.description}
      </Popup>
    </Marker>
  ) : null;
}

export default WeatherMarker;
