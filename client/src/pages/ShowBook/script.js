import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component // need this for reactivity
export default class ShowBook extends Vue {
  book = [];
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
  editbook(bookid) {
    this.$router.push({
      name: "EditBook",
      params: { id: bookid }
    });
  }
  deletebook(bookid) {
    axios
      .delete("http://localhost:3001/api/book/" + bookid)
      .then(() => {
        this.$router.push({
          name: "BookList"
        });
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
}
