import React from 'react';
import './WeatherDetail.css';
import kelvinToCelcius from "../../Helpers/kelvinToCelcius";
import iconMapper from "../../Helpers/iconMapper";


function WeatherDetail({temp, type, description}) {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
      <p className="description">{description}</p>
      <p>{kelvinToCelcius(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
