# Vue Time-Table
## Projeto pessoal com fins de aprendizado no *framework* **Vue.js**.
Trata-se da recriação de um projeto pessoal já existente, chamado **Grade Horária**:
>"O projeto consiste numa página interativa que contém a minha grade horária da faculdade durante o semestre 2021/1. Cada disciplina, ao ser clicada, apresenta informações a respeito de si mesma, como o nome do(a) professor(a), o link para a página da disciplina e uma lista dos métodos de avaliação escolhidos pelo(a) professor(a). O intuito desta aplicação é ajudar na organização com as matérias da faculdade durante o período de EAD, agrupando as informações mais relevantes a respeito de cada disciplina em uma única página."

Esta versão da aplicação está sendo desenvolvida nos moldes de uma *single page application* do Vue. A primeira página, **Home**, apresenta as disciplinas em forma de grade horária, onde cada bloco de disciplina é um botão que, ao ser clicado, expande um seção abaixo contendo as principais informações a respeito da disciplina: código, nome, nome do(a) professor(a), link para a página da disciplina e uma lista dos métodos de avaliação. A página foi estruturada usando os *components* do Vue, de forma que sua estrutura pode ser facilmente escalável e alterada dinamicamente.

A segunda página, **Editor** (ainda não completamente implementada), permite ao usuário configurar sua aplicação, inserindo os dados de suas disciplinas e montando sua grade horária. Os dados a respeito das disciplinas são armazenados na forma de um vetor de objetos JavaScript, onde cada índice do vetor corresponde a uma disciplina. Além disso, há um vetor chamado "organizador", que é responsável por posicionar corretamente cada disciplina em sua respectiva posição na grade horária, não limitada a uma posição por disciplina.

Todos os dados serão armazenados no *Local Storage* do navegador, para que a aplicação possa ser executada sem conexão com a internet.

### O projeto aborda HTML, SASS (CSS), e Javascript, nos moldes do *framework* Vue.js.