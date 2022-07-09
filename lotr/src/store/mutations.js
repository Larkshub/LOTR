export default {
  bookList(state, payload) {
    state.books = [...payload];
  },
  characterList(state, payload) {
    state.characters = [...payload];
    console.log(state.characters);
  }
};
