import React from 'react';


const WeatherExtrainfo = (props)=> {
    const {humidity,wind} = props;
    return (
    <div>
        <span>{`humedad: ${humidity}% `}</span>
        <span>{`viento: ${wind}`}</span>
    </div>
    );
};

export default WeatherExtrainfo;