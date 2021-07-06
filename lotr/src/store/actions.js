import axios from 'axios';

export default {
  getAllBooks({ commit }) {
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 0St10OYxOS-IZpsuDVEn'
      }
    };
    axios(process.env.VUE_APP_URL_BOOKS, authorization)
      .then((response) => {
        commit('bookList', response.data.docs);
      });
  }
};
