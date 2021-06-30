<template>
  <div id="home" class="home">
    <Grade v-if="this.disciplinas.length>0" :key="this.disciplinas"/>
    <SemDisciplina v-else :key="this.disciplinas"/>
    <Detalhes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grade from '@/components/Grade.vue';
import Detalhes from '@/components/Detalhes.vue';
import SemDisciplina from '@/components/SemDisciplina.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Grade,
    Detalhes,
    SemDisciplina,
  },
  computed: {
    ...mapGetters([
      'disciplinas',
    ])
  }
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
  font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  color: $cinza-claro; 
  align-self: center;
  margin: 1rem;
}

@media screen and (min-width: 700px) {
}

</style>
