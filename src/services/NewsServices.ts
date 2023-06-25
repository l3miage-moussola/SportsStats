import axios from 'axios';
import {CompetitionNews} from '../Models/FootballNewsModels';

const API_URL = 'https://football98.p.rapidapi.com/premierleague/news';
const options = {
  headers: {
    'X-RapidAPI-Key': '1f80563569msh488b53b87286862p140552jsna93f95f23db5',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  },
};

export const fetchPremierLeagueNews = async () => {
  try {
    const response = await axios.get(API_URL, options);
    const data: CompetitionNews[] = await response.data;
    console.log("SERVIIIIIIIICE",data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
