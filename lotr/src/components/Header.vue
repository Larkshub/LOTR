<template>
    <nav>
        <span><router-link to="/">{{home}}</router-link></span>
        <span><router-link to="/characters">{{characters}}</router-link></span>
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

nav {
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
