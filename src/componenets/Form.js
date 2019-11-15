import React from 'react';
// import GoogleMap from "./PigeonmMaps";

const Form = props =>(

    <form className='col-md-5 col-sm-5 col-lg-5 col-xs-5' onSubmit={props.getWeather} >
        <input type="text" className='inputs' name='city' placeholder='  شهر...'/>
        <input type="text" className='inputs' name='country' placeholder='  کشور...'/>
        <button className='btn form-btn btn-info'>مشاهده وضعیت آب و هوا</button>
    </form>

    );

export default Form;