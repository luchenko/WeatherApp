import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtrainfo from './WeatherExtrainfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={'24°'} weatherState={''}></WeatherTemperature>
        <WeatherExtrainfo humidity={80} wind={"10 metros/S"}></WeatherExtrainfo>
    </div>
);

export default WeatherData;