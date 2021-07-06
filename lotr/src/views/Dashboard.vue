<template>
    <main>
        <h1>{{list}}</h1>
        <ul v-for="(book,index) in books" :key="index">
          <li>{{book.name}}</li>
        </ul>
    </main>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
      list: 'Trilogía'
    };
  },
  computed: {
    ...mapState(['books']),
    ...mapMutations(['bookList'])
  },
  methods: {
    ...mapActions(['getAllBooks'])

  },
  mounted() {
    this.getAllBooks();
  }
};
</script>

<style lang="scss" scoped>

</style>
