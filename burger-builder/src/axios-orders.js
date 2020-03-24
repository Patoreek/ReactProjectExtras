import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-63a4b.firebaseio.com/'
});

export default instance;
