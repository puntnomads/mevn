import Vue from "vue";
import Component from "vue-class-component";
import { GET_BOOK, DELETE_BOOK } from "./type";

@Component // need this for reactivity
export default class ShowBook extends Vue {
  created() {
    this.$store.dispatch(GET_BOOK, this.$route.params.id);
  }
  editbook(bookid) {
    this.$router.push({
      name: "EditBook",
      params: { id: bookid }
    });
  }
  async deletebook(bookid) {
    await this.$store.dispatch(DELETE_BOOK, bookid);
    this.$router.push({
      name: "BookList"
    });
  }
  get book() {
    return this.$store.getters.showBook;
  }
}
