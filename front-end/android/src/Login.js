import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    Modal,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Main from './Main.js';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            isLoggedIn: false,
        }
    }

    onClick = () => {
        if (this.state.id === '') {
            alert("ID를 입력해주세요.");
        }
        else {
            this.setState({
                isLoggedIn: true,
            });
        }
    }

    onChangeText = (text) => {
        this.setState({
            id: text
        });
        console.log(this.state.id)
    }
    render() {
        return (
            <>
                {this.state.isLoggedIn ? <Main id={this.state.id} /> :
                    <SafeAreaView style={styles.safeAreaView}>
                        <ScrollView
                            contentInsetAdjustmentBehavior="automatic"
                            style={styles.scrollView}>
                            <View style={styles.body}>
                                <View style={[styles.container, styles.shadow, { height: 100, marginBottom: 30, },]}>
                                    <Text>
                                        주 52시간 근태관리 앱, OEOE
                                        </Text>
                                </View>
                                <View style={[styles.container, styles.shadow, { height: 40, flexDirection: 'row', }]}>
                                    <Text style={styles.label}>
                                        ID
                                        </Text>
                                    <TextInput
                                        placeholder={'Type your ID'}
                                        maxLength={15}
                                        style={styles.inputBox}
                                        onChangeText={this.onChangeText}
                                    />
                                </View>
                                <View style={[styles.container, styles.shadow, { height: 40, flexDirection: 'row', }]}>
                                    <Text style={styles.label}>
                                        PW
                                        </Text>
                                    <TextInput
                                        placeholder={'Type your Password'}
                                        placeholderSty
                                        maxLength={15}
                                        style={styles.inputBox}
                                        secureTextEntry={true}
                                    />
                                </View>
                                <View style={[styles.container, { height: 40, flexDirection: 'row', justifyContent: 'space-between', }]}>
                                    <TouchableOpacity onPress={() => this.onClick()} style={[styles.button, styles.shadow, { marginRight: 10, }]}>
                                        <Text style={styles.commonText}>
                                            LOGIN
                                            </Text>
                                    </TouchableOpacity >
                                    <TouchableOpacity onPress={() => alert("아직 구현되지 않았습니다.")} style={[styles.button, styles.shadow, { marginLeft: 10, }]}>
                                        <Text style={styles.commonText}>
                                            REGISTER
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                }
            </>
        );
    }
}

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
        flexDirection: 'column',
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 5,

        margin: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    header: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
    },
    label: {
        flex: 0.2,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    inputBox: {
        flex: 0.8,
        borderRadius: 5,
    },
    button: {
        flex: 0.5,
        borderRadius: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    commonText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    shadow: {
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * 10 },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * 5,
    },
});