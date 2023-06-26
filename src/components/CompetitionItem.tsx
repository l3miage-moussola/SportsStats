import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Competition} from '../Models/FootballNewsModels';

function CompetitionItem(props: {
  item: Competition;
  onPress: (item: Competition) => void;
}) {
  let {item, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.item}>
        <Text style={styles.name}> {item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 0,
    width: '100%',
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 16,
    borderRadius: 24,
  },
});

export default CompetitionItem;
