import axios from 'axios';
import env from '../../configs/env';

// const option = {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// }

const apiPosts = axios.create({
  baseURL: `${env.VITE_URL_BDMS_SERVICE}`,
  // ...option
});

const apiAuthors = axios.create({
  baseURL: `${env.VITE_URL_BDMS_SERVICE}`,
});

const apiConfig = {
  apiPosts,
  apiAuthors,
};

export default apiConfig;
