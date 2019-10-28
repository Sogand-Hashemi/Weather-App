import React from 'react';

class Weather extends React.Component{
    render() {
        return(
          <div>
             <h3>Location: {this.props.city}, {this.props.country}</h3>
              <h3>Temperature: {this.props.temperature}</h3>
              <h3>Humidity: {this.props.humidity}</h3>
              <h3>Conditions: {this.props.description}</h3>
          </div>
        );
    }
}


export default Weather;
