import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {CompetitionNews} from '../Models/FootballNewsModels';

function NewsItem(props: {
  item: CompetitionNews;
  onPress: (item: CompetitionNews) => void;
}) {
  let {item, onPress} = props;
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.cardContainer}>
      <View style={styles.imageViewContainer}>
        <Image source={{uri: item.PublisherLogo}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.publisher}>{item.PublisherName}</Text>
        <Text style={styles.website}>{item.NewsLink}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    elevation: 4,
  },
  imageViewContainer: {
    marginRight: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  publisher: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 4,
  },
  website: {
    fontSize: 14,
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
});

export default NewsItem;
