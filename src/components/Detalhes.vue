<template>
    <div v-if="disciplina" id="detalhes">
        <h2>{{ disciplina.codigo }}</h2>
        <h3>{{ disciplina.nome }}</h3>
        <h4>Professor: {{ disciplina.professor }}</h4>
        <div v-if="disciplina.link!='#'" class="link">
            <p>Site:</p><a :href="disciplina.link">{{ disciplina.site }}</a>
        </div>
        <ul :key="tarefa.id" v-for="tarefa in disciplina.tarefas">
            <li>{{ tarefa }} </li>       
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Detalhes',
    props: {
        disciplina: Object,
    }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#detalhes {
    width: calc(100% - 3rem);
    padding: 10px;
    margin-top: 2rem;
    background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.6),
    rgba(36, 36, 36, 0.5)
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    h2, h3, h4, li, a, p {
        margin: 0.4rem;
    }
    h2, h3, li {
        font-family: 'San Francisco';
        color: $cinza-claro;
    }
    h4, a, p {
        color: $cinza-pastel;
    }
    .link {
        display: flex;
        align-items: center;
    }
    a, p {
        padding: 0;
        font-weight: 600;
    }
}
</style>