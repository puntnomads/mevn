import axios from "axios";
import { GET_EDIT_BOOK, UPDATE_BOOK } from "./type";

const actions = {
  [GET_EDIT_BOOK]: async ({ commit }, id) => {
    try {
      const response = await axios.get("http://localhost:3001/api/book/" + id);
      commit("GET_EDIT_BOOK", { editBook: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  [UPDATE_BOOK]: async ({ commit }, { id, editBook }) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/book/" + id,
        editBook
      );
      commit("CREATE_BOOK", { editBook: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;
