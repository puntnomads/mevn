import { GET_EDIT_BOOK } from "./type";

const mutations = {
  [GET_EDIT_BOOK](state, { editBook }) {
    state.editBook = editBook;
  }
};

export default mutations;
