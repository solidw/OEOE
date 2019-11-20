'use strict'

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
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
            // id: this.props.id,
            id: 'test1',
            isLoaded: false,
            isWorkOnNow: false,
            workingTimePerWeek: 10,
            latitude: 0,
            longitude: 0,
            timeStamp: 'default',
            noticeMessage: `환영합니다.`,
            isErrorOccured: false,
        };
    }

    componentDidMount() {
        this.getLocation().then(axios.get('http://wantae.tk:8080/api/StandardInformation', {
            params: {
                id: this.state.id,
            }
        }).then(res => {
            const workOn = res.data.available;
            if (workOn) {
                this.setState({
                    isWorkOnNow: res.data.available,
                    workingTimePerWeek: res.data.workingTimePerWeek,
                    timeStamp: res.data.recentWorkOnTime,
                })
            }
            else {
                this.setState({
                    isWorkOnNow: res.data.available,
                    workingTimePerWeek: res.data.workingTimePerWeek,
                })
            }

        }).catch(e => {
            this.setState({
                isErrorOccured: true,
                timeStamp: '로딩에 실패했습니다.\n' + e,
            })
        }));
    };

    onClickWorkOn = () => {
        this.getLocation().then(axios.post('http://wantae.tk:8080/api/workon', null, {
            params: {
                id: this.state.id,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
        }).then(res => {
            if (!isWorkOnNow) {
                this.setState({
                    isWorkOnNow: true,
                    timeStamp: res.data.workOnTime,
                    noticeMessage: 'workOn',
                })
            }
            else {
                alert('이미 출근했습니다.');
            }
        }).catch(e => {
            this.setState({
                isErrorOccured: true,
                timeStamp: 'ERROR',
                noticeMessage: '로딩에 실패했습니다.' + e,
            })
        }));
    }

    onClickWorkOff = () => {
        this.getLocation().then(axios.post('http://wantae.tk:8080/api/workoff', null, {
            params: {
                id: this.state.id,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
        }).then(res => {
            if (isWorkOnNow) {
                this.setState({
                    isWorkOnNow: false,
                    timeStamp: res.data.workOffTime,
                    noticeMessage: 'workOff',
                })
            }
            else {
                alert('이미 출근했습니다.')
            }
        }).catch(e => {
            this.setState({
                isErrorOccured: true,
                timeStamp: 'ERROR',
                noticeMessage: '로딩에 실패했습니다.' + e,
            })
        }));
    }

    onClickOutWork = () => {
        this.getLocation().then(axios.post('http://wantae.tk:8080/api/outwork', null, {
            params: {
                id: this.state.id,
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
        }).then(res => {
            this.setState({
                timeStamp: res.data.outWorkTime,
                noticeMessage: 'outWork',
            })
        }).catch(e => {
            this.setState({
                isErrorOccured: true,
                timeStamp: 'ERROR',
                noticeMessage: '로딩에 실패했습니다.' + e,
            })
        }));
    }

    getLocation = () => {
        return new Promise((res, rej) => {
            Geolocation.getCurrentPosition(res => {
                this.setState({
                    latitude: res.coords.latitude,
                    longitude: res.coords.longitude,
                })
            }, rej);
        })
    }

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
                            <TouchableOpacity style={[styles.button1, styles.shadow, this.state.noticeMessage === 'workOn' ? isWorkOnStyle(true) : isWorkOnStyle(false)]} onPress={this.onClickWorkOn}>
                                <Text style={styles.buttonText}> {"출근"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button2, styles.shadow, this.state.noticeMessage === 'workOff' ? isWorkOnStyle(true) : isWorkOnStyle(false)]} onPress={this.onClickWorkOff}>

                                <Text style={styles.buttonText}>{"퇴근"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.workOnAndOff}>
                            {this.state.isWorkOnNow ? <TouchableOpacity style={[styles.outWorkButton, styles.shadow]} onPress={this.onClickOutWork}>
                                <Text style={styles.buttonText}>외근</Text>
                            </TouchableOpacity> : null}

                            <Text style={styles.buttonText}>
                                {this.state.timeStamp === 'default' ?
                                    `환영합니다.` : this.state.isWorkOnNow ?
                                        this.state.noticeMessage === 'outWork' ? `외근이 기록되었습니다. ${this.state.timeStamp}` : `출근 시각 : ${this.state.timeStamp}`
                                        : `퇴근 시각 : ${this.state.timeStamp}`}

                            </Text>
                        </View>
                        <View style={styles.workOnAndOff}>
                            <View style={[styles.progressBar, styles.shadow]}>
                                <View style={currentProgressBarStyle(this.state.workingTimePerWeek)}>
                                    <Text style={styles.progressBarText}>
                                        {this.state.workingTimePerWeek > 20 ? this.state.workingTimePerWeek + "/ 52 Hours" : this.state.workingTimePerWeek}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.workOnAndOff}>
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
                            </MapView>
                        </View>
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
    outWorkButton: {
        flex: 1,
        justifyContent: 'center',
        width: 50,
        borderRadius: 5,
        backgroundColor: '#00BCD4',
        marginRight: 10,
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

const isWorkOnStyle = (cond) => {
    console.log('isWorkOnStyle : ' + cond);
    const color = cond ?
        '#00a3d2' : 'white';
    return {
        borderWidth: 2,
        borderColor: color,
    }
}
export default Main;