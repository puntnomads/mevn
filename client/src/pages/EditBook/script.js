import Vue from "vue";
import Component from "vue-class-component";
import { GET_EDIT_BOOK, UPDATE_BOOK } from "./type";

@Component // need this for reactivity
export default class EditBook extends Vue {
  async created() {
    await this.$store.dispatch(GET_EDIT_BOOK, this.$route.params.id);
  }
  async onSubmit(evt) {
    evt.preventDefault();
    await this.$store.dispatch(UPDATE_BOOK, {
      id: this.$route.params.id,
      editBook: this.$store.getters.editBook
    });
    this.$router.push({
      name: "ShowBook",
      params: { id: this.$route.params.id }
    });
  }
  get book() {
    return this.$store.getters.editBook;
  }
}
