import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Header = (props) => {
    return (
        <View style={[styles.container, props.theme]}>
            <Text style={styles.head}>
                52시간 출퇴근 관리앱, OEOE
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00a3d2',
        borderRadius: 5,
        marginRight: 5,
    },
    head: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
})

export default Header;