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
  },
  getAllCharacters({ commit }) {
    const url = 'https://the-one-api.dev/v2/character';
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer x6y6jNj1VRAleNB293cR '
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('characterList', response.data.docs);
      });
  },
  getAllFilms({ commit }) {
    const url = 'https://the-one-api.dev/v2/movie';
    const authorization = {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer x6y6jNj1VRAleNB293cR '
      }
    };
    axios(url, authorization)
      .then((response) => {
        commit('movieList', response.data.docs);
      });
  }
};
