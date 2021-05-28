<template>
  <div class="edit">
    <h1>Edite sua grade</h1>
    <Grade :disciplinas="disciplinas" :org="organizador"/>
    <Lista :disciplinas="disciplinas"/>
    <Adicionar/>
  </div>
  
</template>

<script>
import Grade from '@/components/Grade.vue';
import Lista from '@/components/Lista.vue';
import Adicionar from '@/components/Adicionar.vue';

export default {
  name: 'Edit',
  components: {
    Grade,
    Lista,
    Adicionar
  },
  data: function() {
    return {
      i: null,
      organizador: [
           0,    1,    2,    3,    4,
           5,    6, null,    0,    0,
           0,    0,    0,    0,    0,
           0,    0,    0,    0,    0],
      disciplinas: [
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
          "tarefas":[" P1 - 11/06"," P2 - 23/07"],
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

.edit {
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
  h1 {
    font-family: 'San Francisco';
    color: $cinza-claro; 
    align-self: center;
    margin: 1rem;
  }
}

@media screen and (min-width: 700px) {
  .edit {
    max-width: 700px;
  }
}

@media screen and (min-width: 1000px) {
  .edit {
    max-width: 1000px;
  }
}
</style>