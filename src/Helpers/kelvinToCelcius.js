//T(°C) = T(K) - 273.15

function kelvinToCelcius (kelvin){
    return `${Math.round(kelvin - 273.15)}°C`;
}

export default kelvinToCelcius;