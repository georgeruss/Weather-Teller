import logo from './logo.svg';
import './styles/App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from "./components/forecast/forecast";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, 
  Route, Redirect, useNavigate, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import './styles/title.css';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const  weatherResponse = await response[0].json();
      const  forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.labal, ...forecastResponse});
    })
    .catch(console.log);
  };
  
  const navigate = useNavigate();
  const navigateTo = () => navigate.push('/home');
  
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <div className="container">
      <button onClick={() => navigate.push('/home')} />
      <button onClick={() => navigate.push('/about')} />
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
      </Router>
      </div>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
