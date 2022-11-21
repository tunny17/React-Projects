import { useState } from 'react'
import './Weather.scss'

const Weather = () => {
  const [input, setInput] = useState("")
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")




  return (
    <section    className='--100vh --center-all'>
      <div className="container weather --flex-center">
        <div className="weather-app --text-light">
            <h1>Weather App</h1>
            <p>2022-11-09</p>

            <div className="--form-control  --my2">
                <input type="text"  placeholder='Search city name...' />
            </div>

            <div className="result  --card  --my2">
                <h2>Abuja</h2>
                <div className="icon">
                    <img src="" alt="clouds" />
                </div>
                <p>Temp: 23°C</p>
                <p>Weather: Clouds</p>
                <p>Temp Range: 23°C / 24°C</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Weather
