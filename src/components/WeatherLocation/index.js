import React ,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

import {
    CLOUD ,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

class WeatherLocation extends Component {
    constructor(props){
          super(props);
          const {city} =props;
          this.state = {
              city,
              data:null,
          };
          console.log("constructor");
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
       
    
    handleUpdateClick = () => {
        const api = getUrlWeatherByCity(this.state.city);
        fetch(api)
            .then( resolve => { 
                return resolve.json();    
            }
        ).then(data => { 
            const newWeatherData = transformWeather(data);
            this.setState({data:newWeatherData});
            console.log(data); 
            //debugger; 
        });
    }
    render() {
        console.log("render ");
        const {city,data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData>:<CircularProgress/>}
            </div>
            );
    }
}

WeatherLocation.propTypes = {
    cit: PropTypes.string.isRequired,
}
export default WeatherLocation;