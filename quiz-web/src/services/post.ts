import { apiConfig } from '../utils';

const api = apiConfig.apiPosts;

const postService = {
  getPosts: () => {
    return api({
      method: 'GET',
      url: `/posts.json`,
    });
  },
};

export default postService;
