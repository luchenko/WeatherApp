import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny :  "day-sunny",
    fog   :  "fay-fog"
};

const getWeatherIcon = WeatherState => {
    const icon = icons[WeatherIcons];
    if (icon)
        return (
        <WeatherIcons name={`${icon}`} size="2x"></WeatherIcons>
        );
    else 
        return (<WeatherIcons name={`${icons['sunny']}`} size="2x"></WeatherIcons>);
};

const WeatherTemperature = (props) => {
const {temperature,weatherState} = props
return (
    <div>
       {
           getWeatherIcon (weatherState)
       }
      <span>{`${temperature}° C`}</span>
    </div>
  );

};

export default WeatherTemperature;