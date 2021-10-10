import React from "react";
import {ReactComponent as Clouds} from "./../assets/icons/clouds.svg";
import {ReactComponent as Rain} from "./../assets/icons/rain.svg";
import {ReactComponent as Snow} from "./../assets/icons/snow.svg";
import {ReactComponent as Sun} from "./../assets/icons/sun.svg";
import {ReactComponent as Drizzle} from "./../assets/icons/sun-rain.svg";
import {ReactComponent as Thunder} from "./../assets/icons/thunder.svg";
import {ReactComponent as Wind} from "./../assets/icons/wind.svg";


function iconMapper (weatherType){
    switch (weatherType) {
        case "Clouds":
            return <Clouds/>
        case "Rain":
            return <Rain/>
        case "Snow":
            return <Snow/>
        case "Drizzle":
            return <Drizzle/>
        case "Clear":
            return <Sun/>
        case "Thunder":
            return <Thunder/>
        case "Mist":
        case "Smoke":
        case "Haze":
        case "Fog":
        default:
            return <Wind/>
    }
}

export default iconMapper;




