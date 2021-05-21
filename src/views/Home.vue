<template>
  <div class="home">
    <h1 class="titulo">Grade Horária</h1>
    <Grade/>
    <Detalhes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grade from '@/components/Grade.vue';
import Detalhes from '@/components/Detalhes.vue';

export default {
  name: 'Home',
  props: {
    disciplinas: Object,
  },
  components: {
    Grade,
    Detalhes,
  }
}
</script>

<style lang="scss">
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

$vermelho-pastel: #FFB6AE;
$laranja-pastel: #FFE1AE;
$amarelo-pastel: #FAFCAF;
$verde-pastel: #B0F2C2;
$azul-pastel: #B0C2F2;
$roxo-pastel: #E9B0F2;
$rosa-pastel: #FFE4E1;

$vermelho: #ad7c76;
$laranja: #b19c77;
$amarelo: #adaf7b;
$verde: #79a785;
$azul: #7b86a7;
$roxo: #97749c;
$rosa: #b3a19f;

@font-face {
  font-family: 'San Francisco';
  src: url(SF-Pro-Rounded-Bold.ttf);
}

html {
  background-image: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/big-sur-dark.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;

}

.home {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}

.titulo {
  font-family: 'San Francisco';
  color: $cinza-claro; 
  align-self: center;
  margin: 2rem;
}
</style>
