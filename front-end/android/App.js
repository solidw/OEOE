'use strict'

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Login from './src/Login.js';
import 'react-native-gesture-handler';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoLogin: true,
    }
  }
  render() {
    return (
      <Login />
    );
  }
}

export default App;
