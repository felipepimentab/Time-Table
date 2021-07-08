<template>
  <div class="nav">
    <router-link to="/">Grade Horária</router-link>
    <div class="subnav">
      <router-link to="/edit">Editar</router-link>
      <router-link to="/about">Sobre</router-link>
    </div>
  </div>
  <router-view/>
  <div class="rodape">
    <p>Desenvolvido por Felipe Pimenta &copy; em Vitória </p>
    <p>v {{ versao.numero }} - {{ versao.nome }}</p>
    <div class="links">
      <a href="https://www.instagram.com/felipepimentab/"><Instagram/></a>
      <a href="https://twitter.com/felipepimentab"><Twitter/></a>
      <a href="https://github.com/felipepimentab/Time-Table"><GitHub/></a>
      <a href="https://www.linkedin.com/in/felipe-pimenta-4b7a58160/"><LinkedIn/></a>
      <a href="https://vercel.com/"><Vercel/></a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import GitHub from './components/icons/github.vue';
import Instagram from './components/icons/instagram.vue';
import LinkedIn from './components/icons/linkedin.vue';
import Twitter from './components/icons/twitter.vue';
import Vercel from './components/icons/vercel.vue'

export default {
  components: {
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
    Vercel,
  },
  methods: {
    ...mapActions([
    'lerMemoria'
    ]),
    ...mapMutations([
      'SET_DISCIPLINAS',
      'SET_ORGANIZADOR'
    ]),
  },
  created() {
    this.lerMemoria();
  },
  computed: {
    ...mapGetters([
      'versao'
    ])
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'SF Rounded';
  src: url(./assets/SF-Pro-Rounded-Bold.ttf);
}
@font-face {
  font-family: 'SF Pro';
  src: url(./assets/SF-Pro-Regular.ttf);
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
  overflow: overlay;
  ::-webkit-scrollbar { //the scrollbar.
    width: 0.5rem;
  } 
  ::-webkit-scrollbar-thumb { //the draggable scrolling handle.
    background: rgba($color: white, $alpha: 0.3);
    width: 0.5rem;
  }
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(https://i.pinimg.com/originals/5d/ab/4d/5dab4d5e50156cb929c1b1946085bdde.jpg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.7)
  );
  backdrop-filter: blur(5px);
  .subnav {
    display: flex;
    align-items: center;
  }
  a {
    font-size: 1.3rem;
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    padding: 1rem;
    margin: 0;
    color: rgba($color: white, $alpha: 0.5);
    font-weight: bolder;
    text-decoration: none;
    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}

.rodape {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  p {
    font-weight: bold;
    padding: 0 1rem 1rem 1rem;
    margin: 0;
    cursor: default;
  }
  .links {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: black;
      margin: 0 1rem 0 1rem;
    }
  }
}

@media screen and (min-width: 350) {
  .nav {
  width: calc(100% - 2rem);
  padding: 0 1rem 0 1rem;
  }
}
</style>
