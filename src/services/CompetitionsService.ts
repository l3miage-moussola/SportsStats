import axios from 'axios';
import {Competition} from '../Models/FootballNewsModels';

const API_URL = 'https://football98.p.rapidapi.com/competitions';

const options = {
  headers: {
    'X-RapidAPI-Key': '4784f41077msh67a52812eebfabfp170047jsnd0817ad1ba87',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  },
};

export const getCompetitions = async () => {
  try {
    const response = await axios.get(API_URL, options);
    const data = response.data;
    const newData = data.substring(1, data.length - 1);
    const array = newData.split(',');
    let i = 0;
    return array.map(function (element: string) {
      return {id: i++, name: element} as Competition;
    });
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des compétitions :",
      error,
    );
    return [];
  }
};
