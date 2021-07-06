export default {
  bookList(state, payload) {
    state.books = [...payload];
  },
};
