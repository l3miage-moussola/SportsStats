import {Competitions} from './src/screens/Competitions';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
class App extends Component {
  render() {
    return <Competitions />;
  }
}
export default App;
