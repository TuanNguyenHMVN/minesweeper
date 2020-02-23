import axios from 'axios';

export const getMinesApi = (level) => {
  let size = level && level === 'beginner' ? 9 : 16;
  let mines = level && level === 'beginner' ? 10 : 40;

  return axios({
    method: 'get',
    url: `https://tiki-minesweeper.herokuapp.com/getMines?size=${size}&mines=${mines}`
  });
}