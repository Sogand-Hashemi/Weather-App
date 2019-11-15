
import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, } from 'google-maps-react';


class GoogleMap extends React.Component{

    // constructor( props ){
    //     super( props );
    //     this.state = {
    //         city: '',
    //         area: '',
    //         state: '',
    //         mapPosition: {
    //             lat: this.props.lat,
    //             lng: this.props.lon
    //         },
    //         markerPosition: {
    //             lat: this.props.lat,
    //             lng: this.props.lon
    //         }
    //     }
    // }



    render(props) {
        return(
        <div className='col-md-12 googleMap text-center col-lg-12 col-sm-12 col-xs-12 title'>
            <Map id='map' google={this.props.google} initialCenter={{
                lat: this.props.lat,
                lng: this.props.lon
            }} zoom={8}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
                {/*    <div>*/}
                {/*        <h1>{this.state.selectedPlace.name}</h1>*/}
                {/*    </div>*/}
                {/*</InfoWindow>*/}
            </Map>
            {console.log(this.props.lat, this.props.lon)}



            {/*<Map*/}
            {/*    google={this.props.google}*/}
            {/*    zoom={14}*/}
            {/*    // style={mapStyles}*/}
            {/*    initialCenter={{*/}
            {/*        lat: this.props.lat,*/}
            {/*        lng: this.props.lon*/}
            {/*    }}*/}
            {/*/>*/}
            {/*{console.log(this.props.lat, this.props.lon)}*/}

        </div>

        )
    }


}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDaVdYhviOhDIGNtNGM2JEKu1pwibrwOBA")
})(GoogleMap)
