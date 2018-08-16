import Vue from "vue";
import Component from "vue-class-component";
import { FETCH_BOOKS } from "./type";

@Component // need this for reactivity
export default class BookList extends Vue {
  fields = {
    isbn: { label: "ISBN", sortable: true, class: "text-center" },
    title: { label: "Book Title", sortable: true },
    actions: { label: "Action", class: "text-center" }
  };
  errors = [];
  created() {
    this.$store.dispatch(FETCH_BOOKS);
  }
  get books() {
    return this.$store.getters.books;
  }
  details(book) {
    this.$router.push({
      name: "ShowBook",
      params: { id: book._id }
    });
  }
}
