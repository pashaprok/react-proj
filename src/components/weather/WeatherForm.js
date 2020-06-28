import React from 'react'

const Form = props => {
    return(
        <div className="weather-form__wrapper">
            {props.error ? error() : null}
            <form onSubmit={props.loadWeather} id="weather-form">
                        <input 
                            type="text" 
                            className="form-control city" 
                            name="city" 
                            autoComplete="off" 
                            placeholder="city"
                        />
                        <input 
                            type="text" 
                            className="form-control country" 
                            name="country" 
                            autoComplete="off" 
                            placeholder="country"
                        />
                        <button>
                            get weather
                        </button>
            </form>
            <div className="info-button__wrapper">
                <a 
                    href="https://sustainablesources.com/resources/country-abbreviations/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="info-button"
                >
                    <i className="fas fa-info"></i> countries abbreviations
                </a>
            </div>

        </div>
    )
}

function error(){
    return (
        <div className="alert alert-warning mx-5 text-capitalize" role="alert">
            please enter city and country
        </div>
    )
}

export default Form;