<template>
    <div id="about" class="about">
        <section class="container">
            <h1>Sobre</h1>
            <h3>Projeto pessoal com fins de aprendizado no framework Vue.js</h3>
            <p>Trata-se da recriação de um projeto pessoal já existente, chamado Grade Horária:</p>
            <p class="quote">"O projeto consiste numa página interativa que contém a minha grade horária da faculdade durante o semestre 2021/1. Cada disciplina, ao ser clicada, apresenta informações a respeito de si mesma, como o nome do(a) professor(a), o link para a página da disciplina e uma lista dos métodos de avaliação escolhidos pelo(a) professor(a). O intuito desta aplicação é ajudar na organização com as matérias da faculdade durante o período de EAD, agrupando as informações mais relevantes a respeito de cada disciplina em uma única página."</p>
            <p>Esta versão da aplicação está sendo desenvolvida nos moldes de uma single page application do Vue. A primeira página, Home, apresenta as disciplinas em forma de grade horária, onde cada bloco de disciplina é um botão que, ao ser clicado, expande um seção abaixo contendo as principais informações a respeito da disciplina: código, nome, nome do(a) professor(a), link para a página da disciplina e uma lista dos métodos de avaliação. A página foi estruturada usando os components do Vue, de forma que sua estrutura pode ser facilmente escalável e alterada dinamicamente.</p>
            <p>A segunda página, Editor (ainda não completamente implementada), permite ao usuário configurar sua aplicação, inserindo os dados de suas disciplinas e montando sua grade horária. Os dados a respeito das disciplinas são armazenados na forma de um vetor de objetos JavaScript, onde cada índice do vetor corresponde a uma disciplina. Além disso, há um vetor chamado "organizador", que é responsável por posicionar corretamente cada disciplina em sua respectiva posição na grade horária, não limitada a uma posição por disciplina.</p>
            <p>Todos os dados serão armazenados no Local Storage do navegador, para que a aplicação possa ser executada sem conexão com a internet.</p>

        </section>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss" scoped>
.about {
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
    font-size: 16px;
}

.container  {
  width: calc(100% - 3rem);
  padding: 10px;
  margin-top: 2rem;
  border-radius: 15px;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
  );
  backdrop-filter: blur(5px);
  h1 {
    font-family: 'SF Rounded';
  }
  h1, h3, p {
    margin: 1rem;
    color: #ebebeb;
    text-align: start;
    text-justify: distribute;
  }
}

@media screen and (min-width: 700px) {
  .about {
    max-width: 700px;
  }
}
</style>