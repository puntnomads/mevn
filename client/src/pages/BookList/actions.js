import axios from "axios";
import { FETCH_BOOKS } from "./type";

const actions = {
  [FETCH_BOOKS]: async ({ commit }) => {
    try {
      const response = await axios.get("http://localhost:3001/api/book");
      commit("FETCH_BOOKS", { books: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;
