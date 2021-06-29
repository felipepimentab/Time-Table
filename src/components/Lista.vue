<template>
    <div :key="disciplinas" id="lista">
        <h2>Suas disciplinas</h2>
        <span v-if="disciplinas.lenght=0" class="sem-disciplinas">Você ainda não possui disciplinas</span>
        <ul>
            <li :key="disciplina" v-for="disciplina in disciplinas">
                <ItemLista :disciplina="disciplina" />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ItemLista from './ItemLista.vue';

export default {
    name: 'Lista',
    components: {
        ItemLista
    },
    computed: {
        ...mapGetters ([
            'disciplinas'
        ])
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    color: $cinza-claro;
    li {
        margin: 2rem 0 2rem 0;
    }
    ul {
        width: calc(100% - 1rem);
        margin: 0;
        padding: 0 0 0 1rem;
    }
    h2 {
        margin: 0;
    }
}

@media screen and (min-width: 1000px) {
    #lista {
        width: calc(100% - 2rem);
    }
}
</style>