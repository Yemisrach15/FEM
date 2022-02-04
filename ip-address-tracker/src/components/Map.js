import React from 'react';
import * as L from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

class Map extends React.Component {

    state = {}

    locationIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>`,
        className: "",
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    });

    render() {
        const url = `https://api.mapbox.com/styles/v1/${'mapbox/streets-v11'}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_API_TOKEN}`;

        if (this.state.map) {
            this.state.map.panTo([this.props.lat, this.props.lng]);
        }

        return (
            <div className='map__container'>
                <MapContainer
                    whenCreated={(map) => this.setState({ map: map })}
                    className="map"
                    center={[this.props.lat, this.props.lng]} zoom={13}
                    zoomControl={false}>
                    <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url={url}
                        zoomOffset={-1}
                        maxZoom={18}
                        tileSize={512} />
                    <Marker icon={this.locationIcon} position={[this.props.lat, this.props.lng]} />
                </MapContainer>
            </div>
        );
    }
}

export default Map;