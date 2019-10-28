import React from 'react';

class Weather extends React.Component{
    render() {
        return(
          <div>
              {this.props.city && this.props.country && <h3>Location: {this.props.city}, {this.props.country}</h3>}
              {this.props.temperature && <h3>Temperature: {this.props.temperature} &#176;C</h3>}
              {this.props.humidity && <h3>Humidity: {this.props.humidity}</h3> }
              {this.props.description && <h3>Conditions: {this.props.description}</h3>}
          </div>
        );
    }
}


export default Weather;
