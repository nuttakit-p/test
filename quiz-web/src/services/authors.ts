import { apiConfig } from '../utils';

const api = apiConfig.apiAuthors;

const authorsService = {
  getAuthors: () => {
    return api({
      method: 'GET',
      url: `/authors.json`,
    });
  },
};

export default authorsService;
