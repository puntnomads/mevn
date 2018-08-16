import { CREATE_BOOK } from "./type";

const mutations = {
  [CREATE_BOOK](state, { newBook }) {
    state.newBook = newBook;
  }
};

export default mutations;
