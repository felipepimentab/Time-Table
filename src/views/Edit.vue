<template>
  <div id="edit" class="edit">
    <div class="container">
      <div class="wrap">
      <Lista v-if="disciplinas" :key="disciplinas" :disciplinas="disciplinas"/>
      <Adicionar :disciplinas="disciplinas"/>
      </div>
      <div class="botao"><button @click="apaga()">Apagar todas as disciplinas</button></div>
    </div>
    
  </div>
  
</template>

<script>
import Lista from '@/components/Lista.vue';
import Adicionar from '@/components/Adicionar.vue';

export default {
  name: 'Edit',
  components: {
    Lista,
    Adicionar
  },
  data: function() {
    return {
      disciplinas: JSON.parse(localStorage.getItem('disciplinas')),
    }
  },
  methods: {
    apaga() {
      if(confirm('Tem certeza que deseja apagar todas as disciplinas?')) {
        console.log('Todas as disciplinas foram apagadas');
        localStorage.clear();
        this.disciplinas = JSON.parse(localStorage.getItem('disciplinas'));
      } else {
        console.log('Nenhuma disciplina foi apagada');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

.container  {
  width: auto;
  padding: 10px;
  margin-top: 2rem;
  border-radius: 10px;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit {
  width: calc(100% - 3rem);
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

.wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.botao {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 1rem;
  padding: 1rem;
  width: auto;
  align-self: center;
  border: none;
  border-radius: 5px;
  font-family: 'San Francisco';
  font-size: 1.2rem;
  transition: all 200ms linear;
  background-color: rgba(255, 100, 100, 0.8);
  &:hover {
    background-color: rgba(255, 100, 100, 0.5);
  }
}

@media screen and (min-width: 700px) {
  .edit {
    width: auto;
  }
  .botao {
    width: auto;
  }
}

@media screen and (min-width: 1000px) {
  .edit {
    max-width: 1000px;
  }
}
</style>