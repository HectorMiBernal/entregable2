import React, { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    return (
        <article className='Card'>
            <h1 className='Title'>
                WHEATER APP
                </h1>
            <h2 className='City_Title'>{weather?.name}, {weather?.sys.country}</h2>
            <div>
                <div>
                    <img className='Card_Image'
                        src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Here image"
                    />
                </div>
                <section className='Card_Section'>
                    <h3 className='Card_Title'>"{weather?.weather[0].description}"</h3>
                    <ul>
                        <li className='Card_Wind'><span>Wind Speed: </span><span>{weather?.wind.speed} m/s</span></li>
                        <li className='Card_Clouds'><span>Clouds: </span><span>{weather?.clouds.all} %</span></li>
                        <li className='Card_Pressure'><span>Pressure: </span><span>{weather?.main.pressure} hPa</span></li>
                    </ul>
                </section>
            </div>
            <h2 className='Degrees_Title'>{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit} °F`}</h2>
            <button className='Card_Button' onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
        </article>

    )
}

export default WeatherCard

// https://openweathermap.org/img/wn/10d@2x.png