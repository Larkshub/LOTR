export default {
  bookList(state, payload) {
    state.books = [...payload];
    console.log(state.books);
  },
  characterList(state, payload) {
    state.characters = [...payload];
    console.log(state.characters);
  },
  movieList(state, payload) {
    state.movies = [...payload];
    console.log(state.movies);
  }
};
