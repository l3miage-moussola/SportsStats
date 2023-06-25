import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParamList} from './Competitions';
import {CompetitionNews} from '../Models/FootballNewsModels';
import {fetchPremierLeagueNews} from '../services/NewsServices';

interface CompetitionDetailsState {
  newsList: CompetitionNews[];
}

class CompetitionDetails extends React.Component<
  {
    navigation: NativeStackNavigationProp<
      RouteStackParamList,
      'CompetitionDetails'
    >;
    route: RouteProp<RouteStackParamList, 'CompetitionDetails'>;
  },
  CompetitionDetailsState
> {
  async componentDidMount() {
    const {item} = this.props.route.params;
    this.props.navigation.setOptions({
      title: 'Top News de la Competition:' + item,
    });
    try {
      console.log('ITEEEEEEEEEEEEEEEEEEEMMMMMMMMMMMMMMM', item.name);
      const news = await fetchPremierLeagueNews();
      console.log("NEWWWWWSSSSS",news);
      this.setState({newsList: news});
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    //let competitionNews = this.state.newsList;
    return (
      <View>
        <Text>Premier League News </Text>

      </View>
    );
  }
}

export default CompetitionDetails;
