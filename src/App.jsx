import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords !== undefined) {
      const ApiKey = '3e9561af6acf3fa342067b9f56f00135'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(2),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 +32).toFixed(2)
          }
          setTemp(obj)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  return (
    <div>
      <WeatherCard
        weather={weather}
        temp={temp}
      />
    </div>
  )
}
export default App
