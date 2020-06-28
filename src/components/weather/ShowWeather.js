import React from 'react';

const Weather = (props) => {
    return (
        <div className="show-weather">
                    <div className="left">
                        <div className="weather-city">
                            {props.city}
                        </div>
                        <div className="weather-desc">
                            {props.description}
                        </div>
                        <div className="now-time">

                        </div>
                        {props.sunrise ? (<div className="weather-info"><span className="weather-info__desc">Sunrise: </span>{props.sunrise} </div>) : null}
                        {props.sunset ? (<div className="weather-info"><span className="weather-info__desc">Sunset: </span>{props.sunset} </div>) : null}
                    </div>
                    <div className="center">
                        {props.temp_celcius ? (<div className="weather-info"><span className="weather-info__desc">Temperature: </span>{props.temp_celcius}&deg;C</div>) : null}
                        {minmaxTemp(props.temp_min, props.temp_max)}
                        {props.pressure ? (<div className="weather-info"><span className="weather-info__desc">Pressure: </span>{props.pressure} hPa</div>) : null}
                        {props.humidity ? (<div className="weather-info"><span className="weather-info__desc">Humidity: </span>{props.humidity} %</div>) : null}
                        {props.clouds ? (<div className="weather-info"><span className="weather-info__desc">Clouds: </span>{props.clouds} %</div>) : null}
                        {props.wind ? (<div className="weather-info"><span className="weather-info__desc">Wind: </span>{props.wind} m/s</div>) : null}
                    </div>
                    <div className="right">
                    {props.description 
                        ? <div className="more-btn__wrapper">
                            <a 
                                href="https://openweathermap.org/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="more-btn"
                            >
                                open more <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        : null}
                    </div>     
        </div>
    )
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <div>
            <div>
                <div className="weather-info">
                    <span className="weather-info__desc">Min Temperature:</span> {min}&deg;C
                </div>
                <div className="weather-info">
                    <span className="weather-info__desc">Max Temperature:</span> {max}&deg;C
                </div>
            </div>
        </div>
        )
    }
}

export default Weather;