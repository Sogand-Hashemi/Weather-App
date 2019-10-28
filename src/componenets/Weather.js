import React from 'react';

const Weather = props => (
    <div>
        {props.city && props.country && <h3>Location: {props.city}, {props.country}</h3>}
        {props.temperature && <h3>Temperature: {props.temperature}&#176;C</h3>}
        {props.humidity && <h3>Humidity: {props.humidity}&#37;</h3> }
        {props.description && <h3>Conditions: {props.description}</h3>}
        {props.error && <h3>{props.error}</h3>}
    </div>
);




export default Weather;
