import axios from "axios";
import { CREATE_BOOK } from "./type";

const actions = {
  [CREATE_BOOK]: async ({ commit }, book) => {
    try {
      const response = await axios.post("http://localhost:3001/api/book", book);
      commit("CREATE_BOOK", { newBook: response.data });
    } catch (error) {
      console.log(error);
    }
  }
};

export default actions;
