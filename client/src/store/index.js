import Vue from "vue";
import Vuex from "vuex";

import BookList from "../pages/BookList/module";
import CreateBook from "../pages/CreateBook/module";
import EditBook from "../pages/EditBook/module";
import ShowBook from "../pages/ShowBook/module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    BookList,
    CreateBook,
    EditBook,
    ShowBook
  }
});
