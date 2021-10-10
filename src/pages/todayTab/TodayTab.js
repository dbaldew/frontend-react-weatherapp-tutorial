import React, {useEffect, useState} from 'react';
import './TodayTab.css';
import axios from "axios";
import WeatherDetail from "../../components/weatherDetail/WeatherDetail";
import createTimeString from "../../Helpers/createTimeString";

const apiKey = '804a0b01271f5b289d5aebb3e9beb763';

function TodayTab({coord}) {


    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [foreCasts, setForeCasts] = useState([]);

    useEffect(() => {

        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,current,daily&appid=${apiKey}&lang=nl`)
                setForeCasts([ result.data.hourly[3],
                                    result.data.hourly[5],
                                    result.data.hourly[7]
                                    ]);
                console.log(result.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false)
        }
        if (coord) {
            fetchData()
        }

    }, [coord]);


    return (
        <div className="tab-wrapper">
            <div className="chart">
                {foreCasts.map((foreCast)=>{
                    return <WeatherDetail
                        key = {foreCast.dt}
                        temp ={foreCast.dt}
                        type={foreCast.weather[0].main}
                        description={foreCast.weather[0].description}
                       />
                })}
            </div>
            <div className="legend">
                {foreCasts.map((foreCast) => {
                    return <span key={`${foreCast.dt}-timestamp`}>{createTimeString(foreCast.dt)}</span>
                })}
            </div>
            <div>
                {loading && <span>De gegevens worden opgehaald...</span>}
                {error && <span>Het ophalen van de gegevens is mislukt. Probeer opnieuw.</span>}
            </div>
        </div>
    );
};

export default TodayTab;
