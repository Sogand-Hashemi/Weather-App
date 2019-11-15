import React from 'react';

const Weather = props => (
    <div className='col-md-5 weather text-center col-sm-5 col-lg-5 col-xs-5'>
        {props.city && props.country && <h3>موقعیت:  {props.city}, {props.country}</h3>}
        {props.temperature && <h3>دما:  &#8451; {props.temperature}</h3>}
        {props.humidity && <h3>رطوبت:  &#37; {props.humidity}</h3> }
        {props.description && <h3>شرایط جوی: {props.description}</h3>}
        {props.error && <h3>{props.error}</h3>}
        {/*{props.lat && <h3>lat: {props.lat}</h3>}*/}
        {/*{props.lon && <h3>lng: {props.lon}</h3>}*/}
    </div>
);




export default Weather;
