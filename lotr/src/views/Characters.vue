<template>
    <div>
        <h1>{{title}}</h1>
        <ul v-for="(character, index) in characters" :key="index">
            <li>{{character.name}}  {{character.race}} {{character.gender}}</li>
        </ul>
    </div>
</template>

<script>
import {
  mapActions, mapMutations, mapState
} from 'vuex';

export default {
  name: 'Characters',
  data() {
    return {
      title: 'Personajes'
    };
  },
  computed: {
    ...mapState(['characters']),
    ...mapMutations(['characterList'])
  },
  methods: {
    ...mapActions(['getAllCharacters'])

  },
  mounted() {
    this.getAllCharacters();
  }
};
</script>

<style lang="scss" scoped>

</style>
