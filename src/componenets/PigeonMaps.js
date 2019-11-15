
import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper, } from 'google-maps-react';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

class PigeonMaps extends React.Component{
render() {
    return (
        <div className='col-md-12 PigeonMaps text-center col-lg-12 col-sm-12 col-xs-12'>

            <Map  center={[this.props.lat, this.props.lon]} zoom={14} >
                <Marker anchor={[this.props.lat, this.props.lon]} payload={1} onClick={({ event, anchor, payload }) => {}} />

                <Overlay anchor={[this.props.lat, this.props.lon]} offset={[120, 79]}>
                    <img src='pigeon.jpg' width={240} height={158} alt='' />
                </Overlay>
            </Map>
            {console.log(this.props.lat, this.props.lon)}
        </div>
    );
}
}
export default PigeonMaps;






































//
// class GoogleMap extends React.Component{

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


    //
    // render(props) {
    //     return(
    //     <div className='col-md-12 googleMap text-center col-lg-12 col-sm-12 col-xs-12 title'>
    //         <Map id='map' google={this.props.google} initialCenter={{
    //             lat: this.props.lat,
    //             lng: this.props.lon
    //         }} zoom={8}>
    //
    //             <Marker onClick={this.onMarkerClick}
    //                     name={'Current location'} />

                {/*<InfoWindow onClose={this.onInfoWindowClose}>*/}
                {/*    <div>*/}
                {/*        <h1>{this.state.selectedPlace.name}</h1>*/}
                {/*    </div>*/}
                {/*</InfoWindow>*/}
        //     </Map>
        //     {console.log(this.props.lat, this.props.lon)}
        //
        //
        //
        //     {/*<Map*/}
        //     {/*    google={this.props.google}*/}
        //     {/*    zoom={14}*/}
        //     {/*    // style={mapStyles}*/}
        //     {/*    initialCenter={{*/}
        //     {/*        lat: this.props.lat,*/}
        //     {/*        lng: this.props.lon*/}
        //     {/*    }}*/}
        //     {/*/>*/}
        //     {/*{console.log(this.props.lat, this.props.lon)}*/}
        //
        // </div>

//         )
//     }
//
//
// }

// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDaVdYhviOhDIGNtNGM2JEKu1pwibrwOBA")
// })(GoogleMap)
