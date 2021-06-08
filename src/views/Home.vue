<template>
  <div id="home" class="home">
    <Grade @click="teste()" v-if="this.disciplinas" :key="this.disciplinas" @detalhe-id="detalheId" :disciplinas="disciplinas" :org="organizador"/>
    <Detalhes :disciplina="disciplinas ? disciplinas[i] : null"/>
    <SemDisciplina v-if="!this.disciplinas" :key="this.disciplinas"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grade from '@/components/Grade.vue';
import Detalhes from '@/components/Detalhes.vue';
import SemDisciplina from '@/components/SemDisciplina.vue';

export default {
  name: 'Home',
  components: {
    Grade,
    Detalhes,
    SemDisciplina,
  },
  data: function() {
    return {
      i: null,
      organizador: JSON.parse(localStorage.getItem('organizador')),
      disciplinas: JSON.parse(localStorage.getItem('disciplinas')),
    }
  },
    methods: {
      detalheId(index) {
      this.i = index;
      },
      teste() {
        console.log(this.disciplinas);
      }
  },
}
</script>

<style lang="scss">
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

h2 {
  color: #d6d6d6;
  margin: 2rem;
}

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
}

.titulo {
  font-family: 'SF Rounded';
  color: $cinza-claro; 
  align-self: center;
  margin: 1rem;
}

@media screen and (min-width: 700px) {
  .home {
    max-width: 700px;
  }
}

@media screen and (min-width: 1000px) {
  .home {
    max-width: 1000px;
  }
}
</style>
