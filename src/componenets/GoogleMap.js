import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends React.Component{

    render() {
        return(
        <div className='col-md-12 googleMap text-center col-lg-12 col-sm-12 col-xs-12 title'>
            <Map id='map' google={this.props.google} initialCenter={{
                lat: this.props.lat,
                lng: this.props.lon
            }} zoom={8}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/*<div>*/}
                    {/*    <h1>{this.state.selectedPlace.name}</h1>*/}
                    {/*</div>*/}
                </InfoWindow>
            </Map>
        </div>

        )
    }


}




// class GoogleMap extends React.Component{
//     shouldComponentUpdate() {
//         return false;
//     }
//
//     componentDidMount() {
//     this.map = new google.maps.Map(this.refs.map, {
//
//     center:{lat:this.props.lat, lng:this.props.lng},
//     zoom:8
//
// });
//     }
//
//     render() {
//         return(
//             <div id='map' ref='map'/>
//         )
//     }
//
// }

// export default GoogleMap;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDaVdYhviOhDIGNtNGM2JEKu1pwibrwOBA")
})(GoogleMap)