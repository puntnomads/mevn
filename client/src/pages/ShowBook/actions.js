import axios from "axios";
import { GET_BOOK, DELETE_BOOK } from "./type";

const actions = {
  [GET_BOOK]: async ({ commit }, id) => {
    try {
      const response = await axios.get("http://localhost:3001/api/book/" + id);
      commit("GET_BOOK", { showBook: response.data });
    } catch (error) {
      console.log(error);
    }
  },
  [DELETE_BOOK]: async (context, id) => {
    try {
      await axios.delete("http://localhost:3001/api/book/" + id);
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;
