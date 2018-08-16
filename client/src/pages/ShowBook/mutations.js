import { GET_BOOK } from "./type";

const mutations = {
  [GET_BOOK](state, { showBook }) {
    state.showBook = showBook;
  }
};

export default mutations;
