import React from 'react';
import './current-weather.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather_description'>{data.weather[0].description}</p>
        </div>
        <img alt='weather' className='weather_icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(data.main.temp)}°C</p>
        <div className='detalis'>
          <div className='parameter_row'>
            <span className='parameter_label'>Detalles</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter_label'>Sensación</span>
            <span className='parameter_value'>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter_label'>Vientos</span>
            <span className='parameter_value'>{data.wind.speed} m/s</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter_label'>Humedad</span>
            <span className='parameter_value'>{data.main.humidity}%</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter_label'>Presión</span>
            <span className='parameter_value'>{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;