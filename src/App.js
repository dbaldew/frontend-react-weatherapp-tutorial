import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import ForecastTab from "./pages/forecastTab/ForecastTab";
import './App.css';

const apiKey = '804a0b01271f5b289d5aebb3e9beb763';

function App() {

//state weatherData: opslaan dataobject uit fetch
    const [weatherData, setWeatherData] = useState({})

//state location: functie die de state in <App /> aanpast. Doorgeven aan <SearchBar /> met callback prop setLocationHandler.
//Query uit <SearchBar/> zet dan de state van location.
    const [location, setLocation] = useState("")


    useEffect(()=>{

        //data fetch openweathermap
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data)
            } catch (e) {
                console.error(e);
            }
        };
        //call fetchData, maar alleen als het geen undefined/null/lege string (1st render) is: dus als er een nieuwe locatie is
        if(location){
            fetchData();
        }

    },[location]);


    return (
        <>
            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    {/*callback prop state location  */}
                    <SearchBar setLocationHandler={setLocation}/>

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
                <div className="weather-content">
                    <TabBarMenu/>

                    <div className="tab-wrapper">
                        <ForecastTab coord={weatherData.coord} />
                    </div>
                </div>

                <MetricSlider/>
            </div>
        </>
    );
}

export default App;
