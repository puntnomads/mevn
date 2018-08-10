import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component // need this for reactivity
export default class EditBook extends Vue {
  book = {};
  created() {
    axios
      .get(`http://localhost:3001/api/book/` + this.$route.params.id)
      .then(response => {
        this.book = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
  onSubmit(evt) {
    evt.preventDefault();
    axios
      .put(`http://localhost:3001/api/book/` + this.$route.params.id, this.book)
      .then(() => {
        this.$router.push({
          name: "ShowBook",
          params: { id: this.$route.params.id }
        });
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
