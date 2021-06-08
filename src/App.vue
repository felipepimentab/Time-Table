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
    <p @click="reset()">Desenvolvido por Felipe Pimenta &copy; em Vitória </p>
    <div class="links">
      <a href="https://www.instagram.com/felipepimentab/"><Instagram/></a>
      <a href="https://twitter.com/felipepimentab"><Twitter/></a>
      <a href="https://github.com/felipepimentab/Time-Table"><GitHub/></a>
      <a href="https://www.linkedin.com/in/felipe-pimenta-4b7a58160/"><LinkedIn/></a>
    </div>
  </div>
</template>

<script>
import GitHub from './components/icons/github.vue';
import Instagram from './components/icons/instagram.vue';
import LinkedIn from './components/icons/linkedin.vue';
import Twitter from './components/icons/twitter.vue';


export default {
  components: {
    GitHub,
    Instagram,
    LinkedIn,
    Twitter,
  },
  methods: {
    reset() { // Método apenas para testes
      localStorage.setItem('organizador', JSON.stringify([
           0, null,    1,    1, null,
        null,    2,    0,    3,    3,
           4,    5,    4,    5, null,
           6, null, null, null, null]));
      localStorage.setItem('disciplinas', JSON.stringify([
        {
          "codigo":"SEL 0401",
          "nome":"Eletrônica de Potência",
          "professor":"José Roberto Boffino de Almeida",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=87770",
          "tarefas":[" Prova única - 14/07"],
          "cor":"bubblegum"
        },
        {
          "codigo":"SEL 0310",
          "nome":"Ondas Eletromagnéticas",
          "professor":"Leonardo André Ambrósio",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=86361",
          "tarefas":[" Lista 01 - 19/05"," Lista 02 - 26/05"," Lista 03 - 09/06"," Lista 04 - 16/06"," Lista 05 - 23/06"," P1 - 24/07"," P2 - 31/07"],
          "cor":"turquoise"
        },
        {
          "codigo":"SEL 0317",
          "nome":"Laboratório de Circuitos Eletrônicos II",
          "professor":"Marlon Rodrigues Garcia",
          "site":"Não tem site",
          "link":"#",
          "tarefas":[],
          "cor":"blueberry"
        },
        {
          "codigo":"SEL 0315",
          "nome":"Circuitos Eletrônicos III",
          "professor":"João Paulo Pereira do Carmo",
          "site":"Não tem site",
          "link":"#",
          "tarefas":[" P1 - 25/06"," P2 - 23/07"],
          "cor":"spring"
        },
        {
          "codigo":"SME 0320",
          "nome":"Estatística I",
          "professor":"Reiko Aoki",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=88184",
          "tarefas":[" P1 - 26/05"," P2 - 21/07"],
          "cor":"sea-foam"
        },
        {
          "codigo":"SMA 0356",
          "nome":"Cálculo IV",
          "professor":"Sergio Henrique Monari Soares",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=87079",
          "tarefas":[" Atividades semanais no moodle"," P1 - 22/05"," P2 - 19/06"," P3 - 31/07"],
          "cor":"salmon"
        },
        {
          "codigo":"SEP 0587",
          "nome":"Princípios de Economia",
          "professor":"Humberto Filipe de Andrade Januário Bettini",
          "site":"Não tem site",
          "link":"#",
          "tarefas":["Texto preliminar - 07/06", "P1 - 28/06", "Texto parcial - 12/07", "Texto final - 26/07", "Vídeo - 16/08"],
          "cor":"banana"
        },
      ]));
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'SF Rounded';
  src: url(../src/assets/SF-Pro-Rounded-Bold.ttf);
}
@font-face {
  font-family: 'SF Pro';
  src: url(../src/assets/SF-Pro-Regular.ttf);
}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html {
  font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
  overflow: overlay;
  ::-webkit-scrollbar { //the scrollbar.
    width: 10px;
  } 
  ::-webkit-scrollbar-thumb { //the draggable scrolling handle.
    background: rgba($color: white, $alpha: 0.3);
    width: 10px;
  }
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/color-lines.jpg);
  background-position: 0 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

body {
  width: 100vw;
  height: 100vh;
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
    font-family: 'SF Rounded';
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
    padding: 1rem;
    margin: 0;
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
