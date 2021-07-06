import axios from 'axios';

export default {
  getAllBooks({ commit }) {
    const url = 'https://the-one-api.dev/v2/book';
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 0St10OYxOS-IZpsuDVEn'
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('bookList', response.data.docs);
      });
  }
};
