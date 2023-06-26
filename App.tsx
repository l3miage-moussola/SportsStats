import {Competitions} from './src/screens/Competitions';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeaxtureListItems from "./src/components/FeaxtureListItems";

const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName={"News"}>
          <Tab.Screen name="News" component={Competitions} />
          <Tab.Screen name="Matchs" component={FeaxtureListItems} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
