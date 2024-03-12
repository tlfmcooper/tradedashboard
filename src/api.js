import axios from 'axios';

const API_URL = process.env.SERVER_URL || 'http://localhost:3001/data';


export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};