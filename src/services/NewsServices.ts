import axios from 'axios';
import {CompetitionNews} from '../Models/FootballNewsModels';

const API_URL = 'https://football98.p.rapidapi.com/';
const options = {
  headers: {
    'X-RapidAPI-Key': '4784f41077msh67a52812eebfabfp170047jsnd0817ad1ba87',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  },
};

export const fetchNews = async (name: string) => {
  try {
    const response = await axios.get(API_URL + name + '/news', options);
    const data: CompetitionNews[] = await response.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
