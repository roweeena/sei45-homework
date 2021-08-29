import React, {Component} from 'react';
import axios from 'axios';

class Weather extends Component{
  constructor(){
    super();
    this.state= {
      city: '',
      weather: null,
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(data) {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather/'
    const weatherParams = {
      q: data,
      appid: '87f3530b034ce83f07479771285f8bdf',

    }
    axios(weatherURL, {params: weatherParams}).then((response) => {
      this.setState({weather: response.data});
    });
  }
  render(){
    return (
      <div>
      <SearchForm onSubmit={this.getWeather}/>
      <WeatherMap data={this.state.weather}/>

      </div>
    )
  }
}
  class SearchForm extends Component {
  constructor(){
    super();
    this.state={query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit= this._handleSubmit.bind(this);
  }

  _handleInput(event){
    this.setState({query: event.target.value})
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  render(){
    return(
      <form onSubmit={this._handleSubmit}>
      <h3>Your city:</h3>
      <input type="search" onChange={this._handleInput} required placeholder="Enter city here"/>
      <button>Search</button>
      </form>
  )
}
}

const WeatherMap = function (props) {

      if (props && props.data === null) {
    return '';
  } else {
    return (
      <div>
        <p> The weather for { props.data.name } is currently {(props.data.main.temp-273.15).toFixed(2) }&deg;C. Min temperature is {(props.data.main.temp_min-273.15).toFixed(2) }&deg;C and max temperature is {(props.data.main.temp_max-273.15).toFixed(2) }&deg;C </p>

      </div>
    );
  }
}


export default Weather;
