import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import ForecastTab from "./pages/forecastTab/ForecastTab";
import './App.css';
import TodayTab from "./pages/todayTab/TodayTab";

const apiKey = '804a0b01271f5b289d5aebb3e9beb763';

function App() {

//state weatherData:  dataobject uit fetch
//state location: Doorgeven aan <SearchBar /> als callback prop setLocationHandler.
//state voor error
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState("");
    const [error, toggleError] = useState(false)

    useEffect(() => {

        //data fetch openweathermap
        async function fetchData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data)
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        };
        //call fetchData, maar alleen als het geen undefined/null/lege string (1st render) is: dus als er een nieuwe locatie is
        if (location) {
            fetchData();
        }

    }, [location]);


    return (
        <>
            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    {/*callback prop state location  */}
                    <SearchBar setLocationHandler={setLocation}/>
                    {error && <span className="wrong-location-error">Deze locatie bestaat niet, probeer opnieuw</span>}

                    {/*structureel datatype: check of er keys in het object staan, anders error bij eerste render: object nog leeg*/}
                    {/* fragments toevoegen*/}
                    <span className="location-details">
                        {Object.keys(weatherData).length > 0 &&
                        <>
                            <h2>{weatherData.weather[0].description}</h2>
                            <h3>{weatherData.name}</h3>
                            <h1>{weatherData.main.temp}</h1>
                        </>
                        }
                        {/*<button type="button"*/}
                        {/*onClick={fetchData}*/}
                        {/*>*/}
                        {/*  Haal data op!*/}
                        {/*</button>*/}
                    </span>
                </div>

                {/*CONTENT ------------------ */}
                <Router>
                    <div className="weather-content">
                        <TabBarMenu/>

                        <Switch>
                            <div className="tab-wrapper">
                                <Route path="/komende-week">
                                    <ForecastTab coordinates={weatherData.coord}/>
                                </Route>
                                <Route path="/" exact>
                                    <TodayTab/>
                                </Route>
                            </div>
                        </Switch>
                    </div>
                </Router>


                <MetricSlider/>
            </div>

        </>
    );
}

export default App;
