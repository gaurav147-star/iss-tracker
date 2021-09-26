import GoogleMapReact from 'google-map-react';
import iss from './iss.png'

function Map({ center, zoom }) {
    
    return (
        <>
            <div className="content">
                <p>Latitude: {center.lat}</p>
                <p>Longitude: {center.lng}</p>
            </div>
            <div className="container" style={{ margin: '45px' }}>

                <div className="map-container" style={{ height: '90vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyDjx71MZXvkmArFrs3V89raHMPfsi2Wn9o' }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        <img src={iss} alt="ISS-ICON" className="iss-icon" />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    )
}

Map.defaultProps = {

    center: {
        lat: 23.2599,
        lng: 77.4126,
    },
    zoom: 4
}

export default Map
