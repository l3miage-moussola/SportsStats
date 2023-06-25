import React from 'react';
import {
  View,
  Text,
  Linking,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParamList} from './Competitions';
import {CompetitionNews} from '../Models/FootballNewsModels';
import {fetchPremierLeagueNews} from '../services/NewsServices';
import NewsItem from '../components/NewsItem';

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
  constructor(
    props:
      | {
          navigation: NativeStackNavigationProp<
            RouteStackParamList,
            'CompetitionDetails',
            undefined
          >;
          route: RouteProp<RouteStackParamList, 'CompetitionDetails'>;
        }
      | Readonly<{
          navigation: NativeStackNavigationProp<
            RouteStackParamList,
            'CompetitionDetails',
            undefined
          >;
          route: RouteProp<RouteStackParamList, 'CompetitionDetails'>;
        }>,
  ) {
    super(props);
    this.state = {
      newsList: [] as CompetitionNews[],
    };
  }

  async componentDidMount() {
    const {item} = this.props.route.params;
    this.props.navigation.setOptions({
      title: 'Top News de la Competition:' + item,
    });
    try {
      const news = await fetchPremierLeagueNews();

      this.setState({newsList: news});
    } catch (error) {
      console.error(error);
    }
  }
  isPressedItem = (item: CompetitionNews) => {
    Linking.openURL(item.NewsLink);
  };
  render() {
    let competitionNews = this.state.newsList;
    console.log(
      'NEWSSSS ICIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIiiii \n',
      competitionNews,
    );
    const renderItem = ({item}: {item: CompetitionNews}) => (
      <NewsItem item={item} onPress={this.isPressedItem} />
    );
    const item = this.props.route.params.item;
    const title = item.name + ' Top news';
    return (
      <ImageBackground
        source={require('../assets/cupImage.jpg')}
        style={styles.backgroundImage}>
        <View>
          <Text> {title} </Text>

          <FlatList
            data={competitionNews}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajuste l'image à la taille de l'écran
    justifyContent: 'center', // Centrer verticalement le contenu
  },
});

export default CompetitionDetails;
