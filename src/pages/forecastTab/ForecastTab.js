import React, {useEffect, useState} from 'react';
import './ForecastTab.css';
import axios from "axios";

const apiKey = '804a0b01271f5b289d5aebb3e9beb763';

function ForecastTab({coord}) {

    //state forecast
    //state error
    //state loading
    const [foreCasts, setForeCasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false)


    //useEffect
    useEffect(() => {

        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setForeCasts(result.data.daily.slice(1, 6));
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (coord) {
            fetchData();
        }

    }, [coord]);

    function createDateString(timeStamp) {
        const day = new Date(timeStamp * 1000);
        return day.toLocaleDateString('nl-NL', {weekday: 'long'});
    }

    return (
        <div className="tab-wrapper">
            {error && <span>Er is iets misgegaan met het ophalen van de gegevens</span>}
            {loading && <span>Gegevens worden opgehaald...</span>}
            {!error && foreCasts.length === 0 && <span className="no-forecast">voer een zoekopdracht in</span>}
            {foreCasts.map((day) => {
                return (
                    <article className="forecast-day" key={day.dt}>
                        <p className="day-description">{createDateString(day.dt)}
                        </p>
                        <section className="forecast-weather">
                        <span>
                          {day.temp.day}
                        </span>
                            <span className="weather-description">
                         {day.weather[0].description}
                        </span>
                        </section>
                    </article>
                )
            })}
        </div>
    );
};

export default ForecastTab;
