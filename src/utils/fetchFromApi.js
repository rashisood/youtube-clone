import axios from 'axios';
// const axios = require("axios");


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults:'50',
      // part: 'snippet',
      // videoId: 'M7FIvfx5J10'
    },
    headers: {
        'X-RapidAPI-Key': 
        // '97926e32bdmsh5b3925ec77a0288p168401jsn6931bbef1485',
        //'a2b83ee029msh849b361125fca7fp16ffeajsn11ab67462015',
        '716cbea802msh8dc03ca03e20dbdp13fe17jsnb9c0ec4c4aee',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
  };

  export const fetchFromApi = async(url) =>
  {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }
  