import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {feaxture} from '../Models/FootballNewsModels';
import {getFeaxture} from '../services/FeaxtureService';

function FeaxtureListItems() {
  const [fixtures, setFixtures] = useState<feaxture[]>([]);
  const merde : feaxture[] = [
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F275.png',
      homeTeam: 'Burnley',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F209.png',
      awayTeam: 'Manchester City',
      MatchDay: '11/08/2023',
      MatchTime: '19:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F2.png',
      homeTeam: 'Arsenal',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F577.png',
      awayTeam: 'Nottingham Forest',
      MatchDay: '12/08/2023',
      MatchTime: '11:30',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F622.png',
      homeTeam: 'AFC Bournemouth',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F198.png',
      awayTeam: 'West Ham United',
      MatchDay: '12/08/2023',
      MatchTime: '14:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F670.png',
      homeTeam: 'Brighton & Hove Albion',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F599.png',
      awayTeam: 'Luton Town',
      MatchDay: '12/08/2023',
      MatchTime: '14:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F197.png',
      homeTeam: 'Everton',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F211.png',
      awayTeam: 'Fulham',
      MatchDay: '12/08/2023',
      MatchTime: '14:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F583.png',
      homeTeam: 'Sheffield United',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F567.png',
      awayTeam: 'Crystal Palace',
      MatchDay: '12/08/2023',
      MatchTime: '14:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F207.png',
      homeTeam: 'Newcastle United',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F199.png',
      awayTeam: 'Aston Villa',
      MatchDay: '12/08/2023',
      MatchTime: '16:30',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F671.png',
      homeTeam: 'Brentford',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F202.png',
      awayTeam: 'Tottenham Hotspur',
      MatchDay: '13/08/2023',
      MatchTime: '13:00',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F9.png',
      homeTeam: 'Chelsea',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F18.png',
      awayTeam: 'Liverpool',
      MatchDay: '13/08/2023',
      MatchTime: '15:30',
    },
    {
      homeLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F21.png',
      homeTeam: 'Manchester United',
      awayLogo:
        'https://image-service.onefootball.com/transform?w=22&h=22&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Ficons%252Fteams%252F164%252F203.png',
      awayTeam: 'Wolverhampton Wanderers',
      MatchDay: '14/08/2023',
      MatchTime: '19:00',
    },
  ];
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        //const feaxtureList = await getFeaxture();
       // setFixtures(feaxtureList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log('FIXTURE \n ', fixtures);
  });*/

  return (
    <ScrollView>
      {merde.map((fixture, index) => (
        <View style={styles.firstView} key={index.toString()}>
          <View style={styles.innerView}>
            <Image style={styles.icon} source={{uri: fixture.homeLogo}} />
            <Text style={styles.text}>{fixture.homeTeam}</Text>
          </View>
          <View>
            <Text style={styles.text}> VS </Text>
            <Text style={styles.text}>{`${ fixture.MatchDay } ${fixture.MatchTime}`}</Text>
          </View>
          <View style={styles.innerView}>
            <Image style={styles.icon} source={{uri: fixture.awayLogo}} />
            <Text style={styles.text}>{fixture.awayTeam}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    elevation: 4,
  },
  innerView: {
    flexDirection: 'column',
    width:160,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf:"center",
  },
  text:{
    textAlign:'center',
    color :'black',
  }
});

export default FeaxtureListItems;
