import React, { Component } from 'react'
import BtnFluid from '../buttons/BtnFluid'
import StartSection from '../sections/StartSectionComponent'
import BannerStartSection from '../sections/BannerStartSectionComponent'
import Form from './WeatherForm'
import Weather from './ShowWeather'
import './weather.css'

const API_key = "25310bf319ebfc971c90843533d5f84e";

export default class WeatherApp extends Component {
    constructor(){
        super();
        this.state = {
          city: undefined,
          country: undefined,
          icon: undefined,
          main: undefined,
          temp_celcius: undefined,
          temp_max: undefined,
          temp_min: undefined,
          pressure: undefined,
          humidity: undefined,
          wind: undefined,
          clouds: undefined,
          description: "",
          sunrise: undefined, 
          sunset: undefined,
          error: false
        };
      } 
    
      calCelcius(temp){
        let cell = Math.floor(temp-273.15);
        return cell;
      }

      getWeather = async (e) => {
        e.preventDefault();
    
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
    
        if(city && country) {
          const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    
          const response = await api_call.json();
          console.log(response);

          var sunset = response.sys.sunset;
          var date_sunset = new Date();
          date_sunset.setTime(sunset);
          var sunset_date = date_sunset.getHours() + ":" + date_sunset.getMinutes();

          var sunrise = response.sys.sunrise;
          var date_sunrise = new Date();
          date_sunrise.setTime(sunrise);
          var sunrise_date = date_sunrise.getHours() + ":" + date_sunrise.getMinutes();
    
          this.setState({
            city: `${response.name}, ${response.sys.country}`,
            temp_celcius: this.calCelcius(response.main.temp),
            temp_max: this.calCelcius(response.main.temp_max),
            temp_min: this.calCelcius(response.main.temp_min),
            description: response.weather[0].description,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            wind: response.wind.speed,
            clouds: response.clouds.all,
            sunrise: sunrise_date,
            sunset: sunset_date,
            error: false
          })
        }else {
          this.setState({
            error: true
          })
        }
      }
    
      render() {
        return (
          <div className="weather-app">
                <StartSection
                    bgi="weather-start start-section start-app-section"
                >
                    <BannerStartSection
                        title="Weather Info"
                        subtitle=""
                    />   
                </StartSection>
              <div className="container">
                  <div className="row">
                    <div className="col-12">
                        <Form 
                            loadWeather={this.getWeather}
                            error={this.state.error}
                        />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                        <Weather 
                            city={this.state.city}
                            country={this.state.country}
                            description={this.state.description}
                            sunrise={this.state.sunrise}
                            sunset={this.state.sunset}
                            temp_celcius={this.state.temp_celcius}
                            temp_max={this.state.temp_max}
                            temp_min={this.state.temp_min}
                            pressure={this.state.pressure}
                            humidity={this.state.humidity}
                            wind={this.state.wind}
                            clouds={this.state.clouds}
                        />
                    </div>
                  </div>
              </div>
              <BtnFluid
                half={false}
                link="/apps"
                text="apps list"
                icon={<i className="fas fa-arrow-left"></i>}
              />
          </div>
        )
      }

}