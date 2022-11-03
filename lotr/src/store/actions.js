import axios from 'axios';

export default {
  getAllBooks({ commit }) {
    const url = process.env.VUE_APP_URL_BOOKS;
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.VUE_APP_AUTH1}`
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('bookList', response.data.docs);
      });
  },
  getAllCharacters({ commit }) {
    const url = process.env.VUE_APP_URL_CHARACTERS;
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.VUE_APP_AUTH2}`
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('characterList', response.data.docs);
      });
  },
  getAllFilms({ commit }) {
    const url = process.env.VUE_APP_URL_MOVIE;
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.VUE_APP_AUTH2}`
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('movieList', response.data.docs);
      });
  }
};
