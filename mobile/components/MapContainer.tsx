import {MapContainer as Map, Marker, Popup, TileLayer} from 'react-leaflet'

export default function MapContainer() {
    return (
        <Map
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap Leaflet</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[51.505, -0.09]}>
                <Popup>
                    An approach to solve using OSM in expo web platform.
                </Popup>
            </Marker>
        </Map>
    );
}