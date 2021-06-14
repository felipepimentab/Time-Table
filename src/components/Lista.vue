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
        disciplinas: Object,
    }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#lista {
    margin: 1rem;
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
    h3 {
        font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        margin: 0.3rem 0 0.3rem 0;
    }
    h4 {
        font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        margin: 0.3rem 0 0.3rem 0;
    }
    h2 {
        margin: 0;
    }
    h4 {
        color: $cinza-pastel;
    }
}

@media screen and (min-width: 1000px){
    #lista {
        min-width: 25rem;
    }
}
</style>