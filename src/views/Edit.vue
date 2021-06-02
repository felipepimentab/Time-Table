<template>
  <div id="edit" class="edit">
    <div class="container">
      <Lista :disciplinas="disciplinas"/>
      <Adicionar :disciplinas="disciplinas"/>
      <div class="botao"><button>Apagar todas as disciplinas</button></div>
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
  }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

.container  {
  width: calc(100% - 3rem);
  padding: 10px;
  margin-top: 2rem;
  border-radius: 10px;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

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

.botao {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 250px;
  align-self: center;
  border: none;
  border-radius: 5px;
  font-family: 'San Francisco';
  font-size: 1.2rem;
  background: linear-gradient(
    to right bottom,
    rgba(253, 83, 83, 0.9),
    rgba(255, 83, 83, 0.8));
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