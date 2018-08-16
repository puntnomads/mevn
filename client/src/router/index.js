import Vue from "vue";
import Router from "vue-router";
import BookList from "../pages/BookList";
import ShowBook from "../pages/ShowBook";
import CreateBook from "../pages/CreateBook";
import EditBook from "../pages/EditBook";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "BookList",
      component: BookList
    },
    {
      path: "/show-book/:id",
      name: "ShowBook",
      component: ShowBook
    },
    {
      path: "/add-book",
      name: "CreateBook",
      component: CreateBook
    },
    {
      path: "/edit-book/:id",
      name: "EditBook",
      component: EditBook
    }
  ]
});
