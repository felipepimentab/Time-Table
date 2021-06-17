<template>
  <div id="grade">
    <div class="vazio"></div>
    <div class="dia"><h3>Segunda</h3></div>
    <div class="dia"><h3>Terça</h3></div>
    <div class="dia"><h3>Quarta</h3></div>
    <div class="dia"><h3>Quinta</h3></div>
    <div class="dia"><h3>Sexta</h3></div>

    <div class="horario"><h3>7:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[0]"/>
    <Bloco :disciplinas="disciplinas" :index="org[1]"/>
    <Bloco :disciplinas="disciplinas" :index="org[2]"/>
    <Bloco :disciplinas="disciplinas" :index="org[3]"/>
    <Bloco :disciplinas="disciplinas" :index="org[4]"/>

    <div class="horario"><h3>8:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[5]"/>
    <Bloco :disciplinas="disciplinas" :index="org[6]"/>
    <Bloco :disciplinas="disciplinas" :index="org[7]"/>
    <Bloco :disciplinas="disciplinas" :index="org[8]"/>
    <Bloco :disciplinas="disciplinas" :index="org[9]"/>

    <div class="horario"><h3>9:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[10]"/>
    <Bloco :disciplinas="disciplinas" :index="org[11]"/>
    <Bloco :disciplinas="disciplinas" :index="org[12]"/>
    <Bloco :disciplinas="disciplinas" :index="org[13]"/>
    <Bloco :disciplinas="disciplinas" :index="org[14]"/>

    <div class="horario"><h3>10:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[15]"/>
    <Bloco :disciplinas="disciplinas" :index="org[16]"/>
    <Bloco :disciplinas="disciplinas" :index="org[17]"/>
    <Bloco :disciplinas="disciplinas" :index="org[18]"/>
    <Bloco :disciplinas="disciplinas" :index="org[19]"/>

    <div class="horario"><h3>11:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[20]"/>
    <Bloco :disciplinas="disciplinas" :index="org[21]"/>
    <Bloco :disciplinas="disciplinas" :index="org[22]"/>
    <Bloco :disciplinas="disciplinas" :index="org[23]"/>
    <Bloco :disciplinas="disciplinas" :index="org[24]"/>

    <div class="horario"><h3>12:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[25]"/>
    <Bloco :disciplinas="disciplinas" :index="org[26]"/>
    <Bloco :disciplinas="disciplinas" :index="org[27]"/>
    <Bloco :disciplinas="disciplinas" :index="org[28]"/>
    <Bloco :disciplinas="disciplinas" :index="org[29]"/>

    <div class="horario"><h3>13:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[30]"/>
    <Bloco :disciplinas="disciplinas" :index="org[31]"/>
    <Bloco :disciplinas="disciplinas" :index="org[32]"/>
    <Bloco :disciplinas="disciplinas" :index="org[33]"/>
    <Bloco :disciplinas="disciplinas" :index="org[34]"/>

    <div class="horario"><h3>14:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[35]"/>
    <Bloco :disciplinas="disciplinas" :index="org[36]"/>
    <Bloco :disciplinas="disciplinas" :index="org[37]"/>
    <Bloco :disciplinas="disciplinas" :index="org[38]"/>
    <Bloco :disciplinas="disciplinas" :index="org[39]"/>

    <div class="horario"><h3>15:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[40]"/>
    <Bloco :disciplinas="disciplinas" :index="org[41]"/>
    <Bloco :disciplinas="disciplinas" :index="org[42]"/>
    <Bloco :disciplinas="disciplinas" :index="org[43]"/>
    <Bloco :disciplinas="disciplinas" :index="org[44]"/>

    <div class="horario"><h3>16:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[45]"/>
    <Bloco :disciplinas="disciplinas" :index="org[46]"/>
    <Bloco :disciplinas="disciplinas" :index="org[47]"/>
    <Bloco :disciplinas="disciplinas" :index="org[48]"/>
    <Bloco :disciplinas="disciplinas" :index="org[49]"/>

    <div class="horario"><h3>17:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[50]"/>
    <Bloco :disciplinas="disciplinas" :index="org[51]"/>
    <Bloco :disciplinas="disciplinas" :index="org[52]"/>
    <Bloco :disciplinas="disciplinas" :index="org[53]"/>
    <Bloco :disciplinas="disciplinas" :index="org[54]"/>

    <div class="horario"><h3>18:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[55]"/>
    <Bloco :disciplinas="disciplinas" :index="org[56]"/>
    <Bloco :disciplinas="disciplinas" :index="org[57]"/>
    <Bloco :disciplinas="disciplinas" :index="org[58]"/>
    <Bloco :disciplinas="disciplinas" :index="org[59]"/>
    
    <div class="horario"><h3>19:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[60]"/>
    <Bloco :disciplinas="disciplinas" :index="org[61]"/>
    <Bloco :disciplinas="disciplinas" :index="org[62]"/>
    <Bloco :disciplinas="disciplinas" :index="org[63]"/>
    <Bloco :disciplinas="disciplinas" :index="org[64]"/>
    
    <div class="horario"><h3>20:00</h3></div>
    <Bloco :disciplinas="disciplinas" :index="org[65]"/>
    <Bloco :disciplinas="disciplinas" :index="org[66]"/>
    <Bloco :disciplinas="disciplinas" :index="org[67]"/>
    <Bloco :disciplinas="disciplinas" :index="org[68]"/>
    <Bloco :disciplinas="disciplinas" :index="org[69]"/>
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
  grid-template-rows: 2rem auto auto auto auto auto auto auto auto auto auto auto auto;
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
