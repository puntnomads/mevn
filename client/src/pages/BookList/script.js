import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component // need this for reactivity
export default class BookList extends Vue {
  fields = {
    isbn: { label: "ISBN", sortable: true, class: "text-center" },
    title: { label: "Book Title", sortable: true },
    actions: { label: "Action", class: "text-center" }
  };
  books = [];
  errors = [];
  created() {
    axios
      .get(`http://localhost:3001/api/book`)
      .then(response => {
        this.books = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
  details(book) {
    this.$router.push({
      name: "ShowBook",
      params: { id: book._id }
    });
  }
}
