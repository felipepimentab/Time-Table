<template>
  <div id="grade">
    <div class="vazio"></div>
    <div class="dia"><h3>Segunda</h3></div>
    <div class="dia"><h3>Terça</h3></div>
    <div class="dia"><h3>Quarta</h3></div>
    <div class="dia"><h3>Quinta</h3></div>
    <div class="dia"><h3>Sexta</h3></div>

    <div class="horario"><h3>8:10</h3></div>
    <Bloco cor="vermelho" codigo="SEL0401" nome="Eletrônica de Potência" id="1"/>
    <Bloco/>
    <Bloco cor="laranja" codigo="SEL0310" nome="Ondas Eletromagnéticas" id="2"/>
    <Bloco cor="laranja" codigo="SEL0310" nome="Ondas Eletromagnéticas" id="2"/>
    <Bloco/>
    <div class="horario"><h3>10:10</h3></div>
    <Bloco/>
    <Bloco cor="amarelo" codigo="SEL0317" nome="Laboratório de Circuitos Eletrônicos II"/>
    <Bloco cor="vermelho" codigo="SEL0401" nome="Eletrônica de Potência"/>
    <Bloco cor="verde" codigo="SEL0315" nome="Circuitos Eletrônicos III"/>
    <Bloco cor="verde" codigo="SEL0315" nome="Circuitos Eletrônicos III"/>
    <div class="horario"><h3>14:20</h3></div>
    <Bloco cor="azul" codigo="SME0320" nome="Estatística I"/>
    <Bloco cor="roxo" codigo="SMA0356" nome="Cálculo IV"/>
    <Bloco cor="azul" codigo="SME0320" nome="Estatística I"/>
    <Bloco cor="roxo" codigo="SMA0356" nome="Cálculo IV"/>
    <Bloco/>
    <div class="horario"><h3>16:20</h3></div>
    <Bloco cor="rosa" codigo="SEP0587" nome="Princípios de Economia"/>
    <Bloco/>
    <Bloco/>
    <Bloco/>
    <Bloco/>
  </div>
 
</template>

<script>
import Bloco from './Bloco.vue'

export default {
  name: 'Grade',
  props: {
    disciplinas: Object,
  },
  components: {
    Bloco
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#grade {
  background: rgb(36, 36, 36);
  width: 70%;
  max-width: 850px;
  background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.6),
    rgba(36, 36, 36, 0.5)
  );
  border-radius: 10px;
  display: grid;
  grid-template-rows: 3rem auto auto auto auto;
  grid-template-columns: 3rem auto auto auto auto auto;
  padding: 10px;
}

.vazio {
  background: rgba(0,0,0,0);
}

.dia, .horario {
  font-family: 'San Francisco';
  color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
