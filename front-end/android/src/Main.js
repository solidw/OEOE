'use strict'

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import Header from './Header';
import WebLink from './WebLink';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isWorkOnNow: false,
            workingTimePerWeek: 0,
            latitude: 0,
            longitude: 0,
            timeStamp: '',
            noticeMessage: '',
        };
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            workingTimePerWeek: 30,
        })
        // axios.get('http://wantae.tk:49160').
        //     then(res => {
        //         this.setState({ isLoaded: true, workingTimePerWeek: res.data.workingTimePerWeek })
        //     }).catch(err => console.log(err))
    }

    onClick = (status) => {
        if ("출근" === status) {
            axios.get("http://wantae.tk:49160/workOn", {
                data: {
                    id: "",
                    workOnTime: new Date(),
                }
            }).then(res => {
                if (this.state.isWorkOnNow === false) {
                    this.setState({
                        isWorkOnNow: true,
                        timeStamp: { "workOnTime": "" + res.data['workOnTime'] },
                        noticeMessage: 'workOn',
                    });
                    Geolocation.getCurrentPosition(data => {
                        console.log(data.coords);
                        this.setState({
                            latitude: data.coords.latitude,
                            longitude: data.coords.longitude,
                        })
                    });
                }
                else {
                    alert("아직 퇴근하지 않았습니다.");
                }
            })
        }

        else if ("퇴근" === status) {
            axios.get("http://wantae.tk:49160/workOff", {
                data: {
                    id: "",
                    workOnTime: new Date(),
                }
            }).then(res => {
                if (this.state.isWorkOnNow === true) {
                    this.setState({
                        isWorkOnNow: false,
                        timeStamp: { "workOffTime": "" + res.data['workOffTime'] },
                    });
                    Geolocation.getCurrentPosition(data => {
                        this.setState({
                            latitude: data.coords.latitude,
                            longitude: data.coords.longitude,
                        })
                    });
                }
                else {
                    alert("아직 출근하지 않았습니다.");
                }
            }
            )
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 40, marginBottom: 5, marginTop: 5, }}>
                            <Header theme={[styles.shadow, { flex: 0.8, backgroundColor: '#00a3d2' }]} />
                            <WebLink theme={[{ flex: 0.2 }, styles.shadow]} />
                        </View>
                        <View style={styles.workOnAndOff}>
                            <TouchableOpacity style={[styles.button1, styles.shadow]} onPress={() => this.onClick('출근')}>
                                <Text style={styles.buttonText}> {this.state.timeStamp['workOnTime'] ? "출근 시각 : " + this.state.timeStamp['workOnTime'] : "출근"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button2, styles.shadow]} onPress={() => this.onClick('퇴근')}>
                                <Text style={styles.buttonText}>{this.state.timeStamp['workOffTime'] ? "퇴근 시각 : " + this.state.timeStamp['workOffTime'] : "퇴근"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.workOnAndOff}>
                            <View style={[styles.progressBar, styles.shadow]}>
                                <View style={currentProgressBarStyle(this.state.workingTimePerWeek)}>
                                    <Text style={styles.progressBarText}>
                                        {this.state.workingTimePerWeek} / 52 Hours
                                    </Text>
                                </View>
                            </View>
                        </View>
                        {this.state.isWorkOnNow ?
                            <MapView style={styles.map} initialRegion={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.03,
                                longitudeDelta: 0.03,
                            }} >
                                <Marker
                                    coordinate={{
                                        latitude: this.state.latitude,
                                        longitude: this.state.longitude
                                    }}
                                    title={"Working On Position"}
                                    description={"description"}
                                >
                                    <Image source={require('./asset/customMarker.png')} style={styles.markerStyle} />
                                </Marker>
                            </MapView> : <Text style={styles.map}>아직 출근하지 않아 지도를 불러오지 않았습니다.</Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};


const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.lighter,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
        margin: 10,
    },
    body: {
        backgroundColor: Colors.lighter,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    timeText: {
        margin: 12,
        padding: 4,
        fontWeight: '400',
        textAlign: 'center',
    },
    progressBar: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.lighter,
        borderWidth: 2,
        borderRadius: 5,
        height: 40,
    },
    progressBarText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    workOnAndOff: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
    },
    squareButton: {
        flex: 1,
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#00BCD4',
    },
    buttonText: {
        borderRadius: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    map: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        margin: 10,
    },
    shadow: {
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * 10 },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * 5,
    },
    button1: {
        flex: 1,
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#00BCD4',
        marginRight: 10,
    },
    button2: {
        flex: 1,
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#00BCD4',
        marginLeft: 10,
    },
    markerStyle: {
        width: 40,
        height: 40,
    }
});

const currentProgressBarStyle = (workingTimePerWeek) => {
    const color = workingTimePerWeek > 45 ? '#d00000' : '#00d000';
    const flexValue = workingTimePerWeek === 0 ? 0.001 : workingTimePerWeek / 52;
    return {
        backgroundColor: color,
        flex: flexValue,
        justifyContent: 'center',
    }
}

export default Main;
