import React from 'react';

const Form = props =>(

    <form onSubmit={props.getWeather}>
        <input type="text" name='city' placeholder='شهر...'/>
        <input type="text" name='country' placeholder='کشور...'/>
        <button className='btn btn-success'>مشاهده وضعیت آب و هوا</button>
    </form>

    );

export default Form;