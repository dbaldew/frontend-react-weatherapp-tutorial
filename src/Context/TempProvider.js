import React, {createContext, useState} from "react";
import kelvinToFahrenheit from "../Helpers/kelvinToFahrenheit";
import kelvinToCelcius from "../Helpers/kelvinToCelcius";

export const TempContext = createContext(null);

function TempContextProvider ({children}){
    //state
    const [selectedMetric, toggleSelectedMetric] = useState('celsius');

    //function om metric te togglen
    function toggleTemp (){
        if (selectedMetric === 'celsius'){
            toggleSelectedMetric('fahrenheit');
        } else {
            toggleSelectedMetric('celsius')
        }
    }

    return(
        <TempContextProvider value={}>
            {children}
        </TempContextProvider>
    )
}

export default TempContextProvider;