import React from 'react';
import Clock from './clock';
import Tab from './tab';

export default class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      temp: 0
    };
    // debugger
    this.getWeather();
    // debugger
  }

  getWeather() {
    let that = this;
    let pos2;
    navigator.geolocation.getCurrentPosition(function(position) {

      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log(this.response);
            pos2 = JSON.parse(request.response);
            that.setState({city: pos2.name, temp: pos2.main.temp});
          } else if (request.status === 400) {
            console.log("hit 400");
          } else {
            console.log("something bad...");
          }
        }
      };
      request.open('Get', `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=29e753aacca9ad42cc2b3c9b0714d2f1`, true);

      request.send();
    });
  }

  render() {
    return (
      <div>
        <div class="weather">
          <h2>{this.state.city}</h2>
          <h2>{this.state.temp}</h2>
        </div>
        <Clock />
        <Tab tabs={[{ title: "Title", content: "content" }, { title: "t2", content: "c2" }]} />
      </div>


    )
  }
}



