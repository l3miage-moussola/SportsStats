import React, {useEffect, useState} from 'react';
import { ScrollView, View } from "react-native";
import {Competition} from '../Models/FootballNewsModels';
import {getCompetitions} from '../services/CompetitionsService';
import FeaxtureListItems from '../components/FeaxtureListItems';

function Fixtures() {
  const [competitions, setCompet] = useState<Competition[]>([]);
  useEffect(() => {
    const data = async () => {
      try {
        const competition = await getCompetitions();
        setCompet(competition);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  });
  return (
    <View>
      {competitions.map((compet, index) => (
        <FeaxtureListItems key={index.toString()} />
      ))}
    </View>
  );
}

export default Fixtures;
