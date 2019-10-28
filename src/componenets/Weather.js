import React from 'react';

const Weather = props => (
    <div>
        {props.city && props.country && <h3>موقعیت:  {props.city}, {props.country}</h3>}
        {props.temperature && <h3>دما:  &#8451; {props.temperature}</h3>}
        {props.humidity && <h3>رطوبت:  &#37; {props.humidity}</h3> }
        {props.description && <h3>شرایط جوی: {props.description}</h3>}
        {props.error && <h3>{props.error}</h3>}
    </div>
);




export default Weather;
