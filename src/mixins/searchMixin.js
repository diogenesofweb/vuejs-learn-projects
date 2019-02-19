export default {
  computed: {
    filtredItems() {
      return this.items.filter(el => el.title.includes(this.search));
    }
  }
};
