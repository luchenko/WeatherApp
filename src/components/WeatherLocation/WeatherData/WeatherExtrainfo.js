import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtrainfo = (props)=> {
    const {humidity,wind} = props;
    return (
    <div className="weatherExtrainfoCont">
        <span className="extraInfoText">{`Humedad ${humidity}% `}</span>
        <span className="extraInfoText">{`viento: ${wind}`}</span>
    </div>
    );
};

WeatherExtrainfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
};

export default WeatherExtrainfo;