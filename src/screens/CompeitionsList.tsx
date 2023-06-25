import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import CompetitionItem from '../components/CompetitionItem';
import {getCompetitions} from '../services/CompetitionsService';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Competition} from '../Models/FootballNewsModels';
import {RouteStackParamList} from './Competitions';

interface CompetitionState {
  competitions: Competition[];
  isLoading: boolean;
}
class CompeitionsList extends React.Component<
  {
    navigation: NativeStackNavigationProp<
      RouteStackParamList,
      'CompetitionsList'
    >;
  },
  CompetitionState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      competitions: [] as Competition[],
      isLoading: true,
    };
    this.props.navigation.setOptions({title: 'Les Competitions'});
  }
  async componentDidMount() {
    try {
      const competitions = await getCompetitions();
      this.setState({competitions: competitions, isLoading: false});
    } catch (error) {
      console.log(error);
    }
  }
  isItemPressed = (item: Competition) => {
    this.props.navigation.navigate('CompetitionDetails', {item});
  };
  render() {
    let comptetionsList = this.state.competitions;
    let isLoading = this.state.isLoading;
    const renderItem = ({item}: {item: Competition}) => (
      <CompetitionItem item={item} onPress={this.isItemPressed} />
    );
    return isLoading ? (
      <ActivityIndicator />
    ) : (
      <ImageBackground
        source={require('../assets/cupImage.jpg')}
        style={styles.backgroundImage}>
        <FlatList
          data={comptetionsList}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
        />
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
export default CompeitionsList;
