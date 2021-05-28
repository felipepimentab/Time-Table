<template>
    <div id="lista">
        <h2>Suas disciplinas</h2>
        <ul>
            <li :key="disciplina.lista" v-for="disciplina in disciplinas">
                <div class="info">
                    <h3>{{ disciplina.codigo }}</h3>
                    <h4>{{ disciplina.nome }}</h4>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Lista',
    props: {
        disciplinas: Array,
    }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#lista {
    width: calc(100% - 3rem);
    padding: 10px;
    margin-top: 2rem;
    background: linear-gradient(
    to right bottom,
    rgba(10, 10, 10, 0.8),
    rgba(10, 10, 10, 0.7)
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    color: $cinza-claro;
    li {
        margin: 2rem 0 2rem 0;
    }
    ul {
        margin: 0;
        padding: 0 0 0 20px;
    }
    h2, h3, h4 {
        font-family: 'San Francisco';
        margin: 0.3rem 0 0.3rem 0;
    }
    h4 {
        color: $cinza-pastel;
    }
}
</style>