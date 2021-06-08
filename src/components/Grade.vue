<template>
  <div id="grade">
    <div class="vazio"></div>
    <div class="dia"><h3>Segunda</h3></div>
    <div class="dia"><h3>Terça</h3></div>
    <div class="dia"><h3>Quarta</h3></div>
    <div class="dia"><h3>Quinta</h3></div>
    <div class="dia"><h3>Sexta</h3></div>

    <div class="horario"><h3>8:10</h3></div>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[0]]" :index="org[0]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[1]]" :index="org[1]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[2]]" :index="org[2]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[3]]" :index="org[3]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[4]]" :index="org[4]"/>

    <div class="horario"><h3>10:10</h3></div>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[5]]" :index="org[5]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[6]]" :index="org[6]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[7]]" :index="org[7]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[8]]" :index="org[8]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[9]]" :index="org[9]"/>

    <div class="horario"><h3>14:20</h3></div>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[10]]" :index="org[10]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[11]]" :index="org[11]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[12]]" :index="org[12]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[13]]" :index="org[13]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[14]]" :index="org[14]"/>

    <div class="horario"><h3>16:20</h3></div>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[15]]" :index="org[15]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[16]]" :index="org[16]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[17]]" :index="org[17]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[18]]" :index="org[18]"/>
    <Bloco @detalhe-index="detalhe" :disciplina="disciplinas[org[19]]" :index="org[19]"/>
  </div>
</template>

<script>
import Bloco from './Bloco.vue'

export default {
  name: 'Grade',
  props: {
    disciplinas: Object,
    org: Array,
  },
  components: {
    Bloco
  },
  methods: {
    detalhe(index) {
      this.$emit('detalhe-id', index)
    },
  },
  emits: ['detalhe-id'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#grade {
  width: calc(100% - 2rem);
  margin: 2rem 0 0 0;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 2rem auto auto auto auto;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
}

.dia, .horario {
  font-family: 'SF Rounded';
  font-size: 12px;
  color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 0;
    padding: 0;
  }
}

@media screen and (min-width: 700px) {
  #grade {
    grid-template-columns: 6% 18.8% 18.8% 18.8% 18.8% 18.8%;
  }
}

@media screen and (min-width: 1000px) {
  
}
</style>
