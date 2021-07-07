<template>
    <main>
        <h1>{{list}}</h1>
        <ul v-for="(book,index) in getTheFirstBook" :key="index">
          <li>{{book.name}}</li>
        </ul>
    </main>
</template>

<script>
import {
  mapActions, mapGetters, mapMutations, mapState
} from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
      list: 'Trilogía'
    };
  },
  computed: {
    ...mapState(['books']),
    ...mapMutations(['bookList']),
    ...mapGetters(['getTheFirstBook'])
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
