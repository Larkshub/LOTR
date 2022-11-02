<template>
    <div class="card" style="width: 17rem; ">
  <div class="card-body" >
    <h5 class="card-title">{{name}}</h5>
<div v-if="duration">
    <h6 class="card-subtitle mb-2 text-muted">Duración: {{duration}} minutos</h6>
</div>
<div v-if="race">
    <h6 class="card-subtitle mb-2 text-muted">Raza: {{race}}</h6>
</div>
<div v-if="gender">
    <h6 class="card-subtitle mb-2 text-muted">Género: {{gender}}</h6>
</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    duration: String,
    gender: String,
    name: String,
    race: String

  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>

h5 {
  font-family: 'Aniron';
  font-size: 20px
}
</style>
