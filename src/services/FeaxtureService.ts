import axios from 'axios';
import {feaxture, MatchDay} from '../Models/FootballNewsModels';
const API_URL = 'https://football98.p.rapidapi.com/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4784f41077msh67a52812eebfabfp170047jsnd0817ad1ba87',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  },
};
export const getFeaxture = async (/*nom: {item: string}*/) => {
  try {
    const response = await axios.get(
      API_URL + 'premierleague/fixtures',
      options,
    );
    const matchDaysTab = response.data as MatchDay[];
    console.log('MATch \n', matchDaysTab);
    const fixtures = [] as feaxture[];
    matchDaysTab.forEach(matchDay => {
      matchDay.matchDay.forEach(fix => {
        fixtures.push(fix);
      });
    });
    console.log('FIXTURE SRV \n ', fixtures);
    return fixtures;
  } catch (error) {
    console.error(error);
    return [];
  }
};
