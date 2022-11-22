import { useState } from 'react'
import './Weather.scss'

const Weather = () => {
  const [input, setInput] = useState("")
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")


  const api = {
    url: "https://api.openweathermap.org/data/2.5/",
    key: "7ac67a2b59c0ee2e9ebcc21b1341f523",
  }

  const getInput = (e) => { 
    setInput(e.target.value)
  }

  const getWeatherData = (e) => { 
    if (e.key === "Enter" && input === "") {
      setErrorMsg("Input cannot be empty")
      setError(true)
    }
    if (e.key === "Enter" && input !== "") {
      fetch(`${api.url}weather?q=${input}&unit=metrics&APPID=${api.key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
    }
  }



  return (
    <section    className='--100vh --center-all'>
      <div className="container weather --flex-center">
        <div className="weather-app --text-light">
            <h1>Weather App</h1>
            <p>2022-11-09</p>

            <div className="--form-control  --my2">
                <input type="text"  placeholder='Search city name...' onChange={getInput} value={input} onKeyPress={getWeatherData}/>
            </div>

            {error ? (
                <p>{errorMsg}</p>
            ) : (
              <div className="result  --card  --my2">
                <h2>Abuja</h2>
                <div className="icon">
                    <img src="" alt="clouds" />
                </div>
                <p>Temp: 23°C</p>
                <p>Weather: Clouds</p>
                <p>Temp Range: 23°C / 24°C</p>
            </div>
            )}

        </div>
      </div>
    </section>
  )
}

export default Weather
