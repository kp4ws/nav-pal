import MapView, {Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default function MapContainer() {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.7749,
                longitude: -122.4194,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            <Marker 
                coordinate={{latitude: 37.7749, longitude: -122.4194}}
                title="San Francisco"
                description="Hello Map"
            />
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
})