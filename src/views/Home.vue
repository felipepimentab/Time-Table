<template>
  <div class="home">
    <h1 class="titulo">Grade Horária</h1>
    <Grade msg="Grade Horária"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Grade from '@/components/Grade.vue'

export default {
  name: 'Home',
  components: {
    Grade
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

body {
  background: url(D:/Felipe/Documentos/Vue-TimeTable/time-table/src/assets/background-dark-8k.jpg), cover, no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.home {
  width: 100vw;
  height: 90vh;
  padding: 0 0 10vh 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titulo {
  font-family: 'San Francisco';
  color: $cinza-claro; 
  align-self: center;
}
</style>
