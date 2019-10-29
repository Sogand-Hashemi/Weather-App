import React from 'react';

import Titles from "./componenets/Titles";
import Form from "./componenets/Form";
import BgDesign from "./componenets/BgDesign";
import Weather from "./componenets/Weather";



const API_KEY = '77d238f0efc00f10afc0eff085241815' ;

class App extends React.Component {

    state={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ''
    
            });
        }else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
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
                    error={this.state.error}

                />
            </div>
        );
    }
}

export default App;
