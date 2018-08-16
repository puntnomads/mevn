import Vue from "vue";
import Component from "vue-class-component";
import { CREATE_BOOK } from "./type";

@Component // need this for reactivity
export default class CreateBook extends Vue {
  book = {};
  async onSubmit(evt) {
    evt.preventDefault();
    await this.$store.dispatch(CREATE_BOOK, this.book);
    this.$router.push({
      name: "ShowBook",
      params: { id: this.$store.getters.newBook._id }
    });
  }
}
