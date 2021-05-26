<template>
  <div class="home">
    <h1 class="titulo">Grade Horária</h1>
    <Grade @detalhe-id="detalheId" :disciplinas="disciplinas" :org="organizador"/>
    <Detalhes :disciplina="disciplinas[i]"/>
    <p>Designed by Felipe Pimenta &copy; in Vitória</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Grade from '@/components/Grade.vue';
import Detalhes from '@/components/Detalhes.vue';

export default {
  name: 'Home',
  components: {
    Grade,
    Detalhes,
  },
  data: function() {
    return {
      i: null,
      organizador: [
           0, null,    1,    1, null,
        null,    2,    0,    3,    3,
           4,    5,    4,    5, null,
           6, null, null, null, null],
      disciplinas: [
        {
          "codigo":"SEL 0401",
          "nome":"Eletrônica de Potência",
          "professor":"José Roberto Boffino de Almeida",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=87770",
          "tarefas":[" Prova única - 14/07"],
          "cor":"vermelho"
        },
        {
          "codigo":"SEL 0310",
          "nome":"Ondas Eletromagnéticas",
          "professor":"Leonardo André Ambrósio",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=86361",
          "tarefas":[" Lista 01 - 19/05"," Lista 02 - 26/05"," Lista 03 - 09/06"," Lista 04 - 16/06"," Lista 05 - 23/06"," P1 - 24/07"," P2 - 31/07"],
          "cor":"laranja"
        },
        {
          "codigo":"SEL 0317",
          "nome":"Laboratório de Circuitos Eletrônicos II",
          "professor":"Marlon Rodrigues Garcia",
          "site":"Não tem site",
          "link":"#",
          "tarefas":[],
          "cor":"amarelo"
        },
        {
          "codigo":"SEL 0315",
          "nome":"Circuitos Eletrônicos III",
          "professor":"João Paulo Pereira do Carmo",
          "site":"Não tem site",
          "link":"#",
          "tarefas":[" P1 - 11/06"," P2 - 23/07"],
          "cor":"verde"
        },
        {
          "codigo":"SME 0320",
          "nome":"Estatística I",
          "professor":"Reiko Aoki",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=88184",
          "tarefas":[" P1 - 26/05"," P2 - 21/07"],
          "cor":"azul"
        },
        {
          "codigo":"SMA 0356",
          "nome":"Cálculo IV",
          "professor":"Sergio Henrique Monari Soares",
          "site":"Moodle",
          "link":"https://edisciplinas.usp.br/course/view.php?id=87079",
          "tarefas":[" Atividades semanais no moodle"," P1 - 22/05"," P2 - 19/06"," P3 - 31/07"],
          "cor":"roxo"
        },
        {
          "codigo":"SEP 0587",
          "nome":"Princípios de Economia",
          "professor":"Humberto Filipe de Andrade Januário Bettini",
          "site":"Não tem site",
          "link":"#",
          "tarefas":["Texto preliminar - 07/06", "P1 - 28/06", "Texto parcial - 12/07", "Texto final - 26/07", "Vídeo - 16/08"],
          "cor":"rosa"
        },
      ]
    }
  },
    methods: {
    detalheId(index) {
    this.i = index;
    }
  },
}
</script>

<style lang="scss">
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

.home {
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  p {
    font-weight: lighter;
    margin: 0;
    padding: 1rem;
  }
}

.titulo {
  font-family: 'San Francisco';
  color: $cinza-claro; 
  align-self: center;
  margin: 1rem;
}

@media screen and (min-width: 1000px) {
  .home {
    max-width: 1000px;
  }
}
</style>
