<template>
    <div id="about" class="about">
        <section class="container">
          <h1>Sobre</h1>
          <h3>O que é</h3>
          <p>Grade Horária é um projeto pessoal desenvolvido por Felipe Pimenta com fins de aprendizado no framework Vue.js. O projeto segue os padrões de uma Single Page Application (SPA) e visa também, futuramente, ser implementado como um Progressive Web App (PWA).</p>
          <h3>Para que serve</h3>
          <p>A ideia da aplicação surgiu da percepção de uma dificuldade em se manter a organização com relação às disciplinas da faculdade durante os semestres de ensino à distância. A necessidade de se adaptar rapidamente ao ensino remoto trouxe inconsistências nos métodos adotados pelos docentes tanto com relação às formas de avaliação quanto com a maneira de se disponibilizar o conteúdo e realizar os encontros virtuais. Esta aplicação visa facilitar e simplificar a organização do aluno com suas disciplinas da faculdade, possibilitando o agrupamento de informações referentes às diversas disciplinas em uma única página.</p>
          <h3>Como usar</h3>
          <p>Para usar o aplicativo, o usuário deve adicionar suas disciplinas à sua grade acessando a aba <router-link to="/edit">Editar</router-link>. As disciplinas devem conter seu código, seu nome, o nome do professor responsável, seu(s) horário(s) e uma cor para ser apresentada na grade, podendo conter também um site associado à disciplina.</p>
          <p>Uma vez inserida a disciplina na grade, o usuário pode visualizá-la na aba <router-link to=”/”>Grade Horária</router-link>, na devida posição associada ao horário da disciplina. Ao clicar na disciplina, é exibida uma seção com as informações inseridas a respeito da mesma. Nesta seção é também possível adicionar tarefas à disciplina, como os métodos de avaliação escolhidos pelo professor, por exemplo.</p>
          <p>Recomenda-se que esta aba seja adicionada à barra de favoritos do navegador, para fácil acesso. No celular, o usuário pode também adicionar esta aba aos favoritos ou criar um atalho para ela em sua tela de ínicio. Para isso, basta seguir o passo-a-passo:</p>
          <div class="passo-a-passo">
            <ul class="passo-a-passo__ios">
              <h4>iOS:</h4>
              <li><p>Abra a Grade Horária no Safari.</p></li>
              <li><p>Clique no botão de compartilhar, na barra inferior do navegador.</p></li>
              <li><p>Selecione a opção "Adicionar à tela de íncio".</p></li>
            </ul>
            <ul class="passo-a-passo__android">
              <h4>Android:</h4>
              <li><p>Abra a Grade Horária no Chrome.</p></li>
              <li><p>Clique no botão de menu.</p></li>
              <li><p>Selecione a opção "Adicionar atalho para a página".</p></li>
            </ul>
          </div>
          <h3>Considerações</h3>
          <p>Esta aplicação ainda está em fase de desenvolvimento (Beta) e, por isso, pode apresentar eventuais erros em certas funcionalidades. Sinta-se encorajado a informar qualquer bug ou oferecer sugestões entrando em contato comigo em qualquer uma das minhas redes sociais listadas abaixo.</p>
          <p>Esta é uma aplicação Open Source hospedada no portal Vercel. Seu repositório está disponível na minha página do GitHub, listada abaixo.</p>
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
  .quote {
    font-style: italic;
  }
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
  h1, h2, h3, p {
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    margin: 1rem;
    color: #ebebeb;
    text-align: start;
    text-justify: distribute;
  }
  h4 {
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    color: #ebebeb;
    margin-top: 0;
  }
  p, a {
    font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
  }
  a {
    color: #ebebeb;
  }
  ul {
    margin: 1rem;
    padding-left: 1rem;
  }
  li {
    margin: 0;
    padding: 0;
    color: #ebebeb;
    p {
      margin-left: 0;
    }
  }
}

@media screen and (min-width: 700px) {
  .about {
    max-width: 700px;
  }
  .passo-a-passo {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
}
</style>