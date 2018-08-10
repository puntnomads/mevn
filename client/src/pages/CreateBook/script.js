import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component // need this for reactivity
export default class CreateBook extends Vue {
  book = {};
  onSubmit(evt) {
    console.log("book: ", this.book);
    evt.preventDefault();
    axios
      .post(`http://localhost:3001/api/book`, this.book)
      .then(response => {
        this.$router.push({
          name: "ShowBook",
          params: { id: response.data._id }
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  }
}
