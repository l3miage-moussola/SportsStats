import React from 'react';
import {Competition} from '../Models/FootballNewsModels';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompeitionsList from './CompeitionsList';
import CompetitionDetails from './CompetitionDetails';

export type RouteStackParamList = {
  CompetitionsList: undefined;
  CompetitionDetails: {item: Competition};
};
const Stack = createNativeStackNavigator<RouteStackParamList>();
export class Competitions extends React.Component<{}> {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name={'CompetitionsList'} component={CompeitionsList} />
          <Stack.Screen
            name={'CompetitionDetails'}
            component={CompetitionDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
