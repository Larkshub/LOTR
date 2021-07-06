<template>
    <main>
        <ul v-for="(book,index) in bookList" :key="index">
        </ul>
    </main>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {

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
