<template>
    <div class="row gap background media">
        <Card v-for="(character, index) in characters"
        :key="index"
        :name="character.name"
        :race="character.race"
        :gender="character.gender"
        />
    </div>
</template>

<script>
import {
  mapActions, mapMutations, mapState
} from 'vuex';
import Card from '@/components/Card.vue';

export default {
  name: 'Characters',
  components: {
    Card
  },
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
@import "@/styles/colors.scss";
.gap {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.gap > div {
  margin: 2rem 2rem;
}

.background {
  background-color: $greybackground;
}

@media  screen and (min-width: 680px) {
    .media {
      display: flex;
      justify-content: center;
    }

  }
</style>
