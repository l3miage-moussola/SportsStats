import React from 'react';
import {
  View,
  Text,
  Linking,
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParamList} from './Competitions';
import {CompetitionNews} from '../Models/FootballNewsModels';
import {fetchNews} from '../services/NewsServices';
import NewsItem from '../components/NewsItem';

interface CompetitionDetailsState {
  newsList: CompetitionNews[];
  isLoading: boolean;
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
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const {item} = this.props.route.params;
    this.props.navigation.setOptions({
      title: 'Top News de la Competition:' + item.name,
    });
    try {
      const news = await fetchNews(item.name);

      this.setState({newsList: news, isLoading: false});
    } catch (error) {
      console.error(error);
    }
  }
  isPressedItem = (item: CompetitionNews) => {
    Linking.openURL(item.NewsLink);
  };
  render() {
    let competitionNews = this.state.newsList;
    const renderItem = ({item}: {item: CompetitionNews}) => (
      <NewsItem item={item} onPress={this.isPressedItem} />
    );
    const item = this.props.route.params.item;
    const title = item.name + ' Top news';
    return (
      <ImageBackground
        source={require('../assets/cupImage.jpg')}
        style={styles.backgroundImage}>
        {this.state.isLoading ? (
          <ActivityIndicator style={styles.loader} size="large" color="ffffff"/>
        ) : (
          <View>
            <Text> {title} </Text>

            <FlatList
              data={competitionNews}
              renderItem={renderItem}
              contentContainerStyle={styles.container}
            />
          </View>
        )}
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
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CompetitionDetails;
