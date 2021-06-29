<template>
  <div id="grade">
    <div class="vazio"></div>
    <div class="dia"><h3>Segunda</h3></div>
    <div class="dia"><h3>Terça</h3></div>
    <div class="dia"><h3>Quarta</h3></div>
    <div class="dia"><h3>Quinta</h3></div>
    <div class="dia"><h3>Sexta</h3></div>

    <div class="horario"><h3>8:10</h3></div>
    <Bloco :disciplinas="disciplinas" :index="organizador[0]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[1]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[2]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[3]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[4]"/>

    <div class="horario"><h3>10:10</h3></div>
    <Bloco :disciplinas="disciplinas" :index="organizador[5]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[6]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[7]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[8]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[9]"/>

    <div class="horario"><h3>14:20</h3></div>
    <Bloco :disciplinas="disciplinas" :index="organizador[10]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[11]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[12]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[13]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[14]"/>

    <div class="horario"><h3>16:20</h3></div>
    <Bloco :disciplinas="disciplinas" :index="organizador[15]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[16]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[17]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[18]"/>
    <Bloco :disciplinas="disciplinas" :index="organizador[19]"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Bloco from './Bloco.vue'

export default {
  name: 'Grade',
  computed: {
    ...mapGetters([
      'disciplinas',
      'organizador',
    ]),
  },
  components: {
    Bloco
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#grade {
  width: calc(100% - 2rem);
  max-width: 60rem;
  margin: 0.5rem 0 0 0;
  padding: 0.2rem 0.5rem 0.5rem 0.2rem;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  backdrop-filter: blur(0.5rem);
  border-radius: 1rem;
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: 1.5rem 1fr 1fr 1fr 1fr 1fr;
}

.dia, .horario {
  font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  padding: 0.2rem;
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
.horario {
  transform: rotate(-90deg);
}

@media screen and (min-width: 700px) {
  #grade {
    width: calc(100% - 4rem);
    margin-top: 2rem;
    grid-template-columns: 3rem 1fr 1fr 1fr 1fr 1fr;
  }
  .dia {
    padding: 0.5rem;
  }
  .horario {
    transform: none;
  }
}
</style>
