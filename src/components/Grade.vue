<template>
  <div id="grade">
    <div class="vazio"></div>
    <div class="dia"><h3>Segunda</h3></div>
    <div class="dia"><h3>Terça</h3></div>
    <div class="dia"><h3>Quarta</h3></div>
    <div class="dia"><h3>Quinta</h3></div>
    <div class="dia"><h3>Sexta</h3></div>

    <div class="horario"><h3>8:10</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[0]"/>
    <Bloco :disciplinas="disciplinas" :index="org[1]"/>
    <Bloco :disciplinas="disciplinas" :index="org[2]"/>
    <Bloco :disciplinas="disciplinas" :index="org[3]"/>
    <Bloco :disciplinas="disciplinas" :index="org[4]"/>

    <div class="horario"><h3>10:10</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[5]"/>
    <Bloco :disciplinas="disciplinas" :index="org[6]"/>
    <Bloco :disciplinas="disciplinas" :index="org[7]"/>
    <Bloco :disciplinas="disciplinas" :index="org[8]"/>
    <Bloco :disciplinas="disciplinas" :index="org[9]"/>

    <div class="horario"><h3>14:20</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[11]"/>
    <Bloco :disciplinas="disciplinas" :index="org[12]"/>
    <Bloco :disciplinas="disciplinas" :index="org[10]"/>
    <Bloco :disciplinas="disciplinas" :index="org[13]"/>
    <Bloco :disciplinas="disciplinas" :index="org[14]"/>

    <div class="horario"><h3>16:20</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[15]"/>
    <Bloco :disciplinas="disciplinas" :index="org[16]"/>
    <Bloco :disciplinas="disciplinas" :index="org[17]"/>
    <Bloco :disciplinas="disciplinas" :index="org[18]"/>
    <Bloco :disciplinas="disciplinas" :index="org[19]"/>
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
  border-radius: 15px;
  display: grid;
  grid-template-rows: 2rem auto auto auto auto;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
}

.dia, .horario {
  font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
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
