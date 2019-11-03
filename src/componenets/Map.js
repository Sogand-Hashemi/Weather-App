import React from 'react';

class Map extends React.Component{
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
    }

    render() {
        return(
            <div id='map'/>
        )
    }

}

export default Map;