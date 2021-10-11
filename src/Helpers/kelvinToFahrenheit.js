//T(°F) = T(K) × 9/5 - 459.67

function kelvinToFahrenheit(kelvin) {
    return `${Math.round(kelvin * 9.5 - 459.67)}°F`;
}

export default kelvinToFahrenheit;
