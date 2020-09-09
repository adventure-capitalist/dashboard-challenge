import React, { Component } from 'react';
class Weather extends Component {
    state = { 
        response: {},
        location: {},
        temp: 0,
        icon: "01d"
     }

  
 truncateDecimal = (num) => {
    let ret = new String(num).split(".");
    if (ret.length > 1) ret = ret[0] + "." + ret[1][0];
    else ret = ret[0];
    return ret;
  }
  
getLocation = async() => {
    const success = (pos) => {
        this.getWeather(pos.coords.latitude, pos.coords.longitude)
        this.setState({location: pos.coords})
    }

    await navigator.geolocation.getCurrentPosition(success);
  
}

  getWeather = (lat, long) => {
     let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=fc9c2f0009a8329f2ac436eca2267b63`;
    fetch(weatherURL).then(response => response.json()).then(data => this.setState({response: data, temp: data.main.temp, icon: data.weather[0].icon}));
  }

  getData = async() => {
    await this.getLocation();
  }

  componentDidMount = () => {
      this.getData()
  }
  
  
    render() { 
        return ( 
            <div className="card">
            <h2>Weather</h2>
        <p>{this.state.response.name}</p>
        <img src={"http://openweathermap.org/img/w/" + this.state.icon + ".png"}/>
        <p>{this.truncateDecimal(this.state.temp) + " °C"}</p>
            </div>
         );
    }
}
 
export default Weather;