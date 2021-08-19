<template>
  <div id="edit" class="edit">
    <div class="container">
      <div class="split">
      <Lista/>
      <Adicionar/>
      </div>
      <div class="botao"><button @click="apaga()">Apagar todas as disciplinas</button></div>
    </div>
    
  </div>
  
</template>

<script>
import Lista from '@/components/Lista.vue';
import Adicionar from '@/components/Adicionar.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Edit',
  components: {
    Lista,
    Adicionar
  },
  methods: {
    ...mapMutations([
      'SET_DISCIPLINAS',
      'SET_ORGANIZADOR',
    ]),
    ...mapActions([
      'lerMemoria'
    ]),
    apaga() {
      if(confirm('Tem certeza que deseja apagar todas as disciplinas?')) {
        localStorage.clear();
        this.lerMemoria();
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

.edit {
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
  h1 {
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    color: $cinza-claro; 
    align-self: center;
    margin: 1rem;
  }
}

.container  {
  width: calc(100% - 2rem);
  max-width: 60rem;
  margin: 0.5rem 0 0 0;
  padding: 0.5rem;
  border-radius: 1rem;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  backdrop-filter: blur(0.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.split {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  transition: all 200ms linear;
  background-color: rgba(255, 100, 100, 0.8);
  &:hover {
    background-color: rgba(255, 100, 100, 0.5);
  }
}

@media screen and (min-width: 700px) {
  .container {
    width: calc(100% - 4rem);
    margin-top: 2rem;
  }
  .split {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
  }
}
@media screen and (min-width: 1000px) {
  .split {
    grid-template-columns: 1fr auto;
  }
}
</style>