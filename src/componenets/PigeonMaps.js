
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
                <Marker anchor={[this.props.lat, this.props.lon]} payload={2} onClick={({ event, anchor, payload }) => {}} />

                <Overlay anchor={[this.props.lat, this.props.lon]} offset={[120, 79]}>
                    <img width={240} height={158} alt='' />
                </Overlay>
            </Map>
            {console.log(this.props.lat, this.props.lon)}
        </div>
    );
}
}

export default PigeonMaps;