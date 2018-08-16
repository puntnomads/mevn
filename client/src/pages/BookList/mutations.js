import { FETCH_BOOKS } from "./type";

const mutations = {
  [FETCH_BOOKS](state, { books }) {
    state.books = books;
  }
};

export default mutations;
