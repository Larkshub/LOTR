<template>
<div class="grid" style="--bs-columns: 3; --bs-gap: 5rem;" >
<Card
 v-for="(movie, index) in movies"
 :key="index"
 :name="movie.name"
 :duration="movie.runtimeInMinutes"
  />
</div>
</template>

<script>
import {
  mapActions, mapMutations, mapState
} from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'Films',
  components: {
    Card
  },
  data() {
    return {
      title: 'Películas y series'
    };
  },
  computed: {
    ...mapState(['movies']),
    ...mapMutations(['movieList'])
  },
  methods: {
    ...mapActions(['getAllFilms'])

  },
  mounted() {
    this.getAllFilms();
  }
};

</script>

<style lang="scss" scoped>

</style>
