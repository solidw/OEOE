import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: props.latitude,
            longitude: props.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    }
    render() {
        return (
            <MapView initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }} />
        )
    }
}

export default Map;