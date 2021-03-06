import React from 'react';

import Titles from "./componenets/Titles";
import Form from "./componenets/Form";
import BgDesign from "./componenets/BgDesign";
import Weather from "./componenets/Weather";
// import GoogleMap from "./componenets/PigeonmMaps";
import PigeonMaps from "./componenets/PigeonMaps";
// const apiKey = 'AIzaSyDaVdYhviOhDIGNtNGM2JEKu1pwibrwOBA';
const API_KEY = '77d238f0efc00f10afc0eff085241815' ;

class App extends React.Component {

    state={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        lat:51.4,
        lon:35.7,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                lat:data.coord.lat,
                lon:data.coord.lon,
                error: ''
    
            });
        }else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                lat:undefined,
                lon:undefined,
                error: 'لطفا مقادیر را وارد کنید'

            });
        }
    };


    render(){
        return(
            <div className='container'>
                <Titles />
                <Form getWeather={this.getWeather} />
                <BgDesign/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    error={this.state.error}
                />
                <PigeonMaps lat={this.state.lat} lon={this.state.lon} />
            </div>
        );
    }
}


export default App;
