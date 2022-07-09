<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid custom">
      <router-link class="navbar-brand" to="/">{{home}}</router-link>
    </div>
    <div class="container-fluid">
      <router-link to="/characters">{{characters}}</router-link>
    </div>

</nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      home: 'Inicio',
      characters: 'Personajes'
    };
  }
};
</script>

<style lang="scss" scoped>

.custom {
    background-color: yellow;
    display: flex;
    justify-content: space-around;
    height: 2rem;
}

a {
    text-decoration: none;
    color: black;
}

</style>
