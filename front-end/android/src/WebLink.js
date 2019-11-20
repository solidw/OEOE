import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Linking,
    TouchableOpacity,
} from 'react-native';

const WebLink = (props) => {
    return (
        <TouchableOpacity style={[styles.container, props.theme]} onPress={() => Linking.openURL('http://wantae.tk/oeoe_web/Login.html')}>
            <Text >Web</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        marginLeft: 5,
    },
    head: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default WebLink;