<template>
    <div id="detalhes">
        <h2>{{ codigo }}</h2>
        <h3>{{ nome }}</h3>
        <h4>Professor: {{ professor }}</h4>
        <a :href="link">Site: {{ site }}</a>
        <ul :key="tarefa.id" v-for="tarefa in tarefas">
            <li>{{ tarefa }} </li>       
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Detalhes',
    props: {
        codigo: String,
        nome: String,
        professor: String,
        site: String,
        link: String,
        tarefas: Array,
    }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#detalhes {
    width: 70%;
    max-width: 850px;
    background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.6),
    rgba(36, 36, 36, 0.5)
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 3rem 0 3rem 0;
    padding: 10px;
    h2, h3, h4, a, li {
        font-family: 'San Francisco';
        margin: 0.4rem;
        text-decoration: none;
    }
    h2, h3, li {
        color: $cinza-claro;
    }
    h4, a {
        color: $cinza-pastel;
    }
}
</style>