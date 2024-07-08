import Cookies from 'js-cookie';

const cookies = {
  setCode: (code: string) => {
    if (code) {
      return Cookies.set('code', code);
    }
  },

  destroyCode: () => {
    return Cookies.remove('code');
  },

  getCode: () => {
    return Cookies.get('code');
  },
};

export default cookies;
