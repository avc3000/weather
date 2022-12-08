import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.css';

const WEEK_DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

  return (
    <>
      <label className='title'>Durante Semana</label>
      <Accordion allowZeroExpanded>
        {
          data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='dayli_item'>
                    <img alt='weather' className='icon_small' src={`icons/${item.weather[0].icon}.png`} />
                    <label className='day'>{forecastDays[idx]}</label>
                    <label className='description'>{item.weather[0].description}</label>
                    <label className='min_max'>{Math.round(item.main.temp_min)}°C /{' '}{Math.round(item.main.temp_max)}°C</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className='dayli_details_grid'>
                  <div className='dayli_details_grid_item'>
                    <label>Presión</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className='dayli_details_grid_item'>
                    <label>Humedad</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className='dayli_details_grid_item'>
                    <label>Nubocidad</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className='dayli_details_grid_item'>
                    <label>Vientos</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className='dayli_details_grid_item'>
                    <label>Nivel del Mar</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className='dayli_details_grid_item'>
                    <label>Sensación</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </>
  )
}

export default Forecast;