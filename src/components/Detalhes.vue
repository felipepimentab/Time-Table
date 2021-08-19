<template>
    <div :key="disciplina" v-if="disciplina" id="detalhes">
        <div class="informacoes-gerais">
            <h2>{{ disciplina.codigo }}</h2>
            <h3>{{ disciplina.nome }}</h3>
            <h4>Professor(a): {{ disciplina.professor }}</h4>
            <div v-if="disciplina.link!=''" class="link">
                <p>Site:</p><a :href="disciplina.link" target="_blank" class="moodle"> {{ disciplina.site }}</a>
            </div>
            <div v-if="disciplina.aula!=''">
                <p>Link para aula on-line:</p><a :href="disciplina.aula" target="_blank">{{ disciplina.aula }}</a>
            </div>
        </div>
        <div class="tarefas-e-notas">
            <h2 class="tarefas-titulo">Tarefas:</h2>
            <ul>
                <li :key="tarefa.id" v-for="tarefa in disciplina.tarefas">{{ tarefa }} <button @click="apagaTarefa(tarefa)"><Eraser :height="16" :width="16" class="botoes"/></button></li> 
            </ul>
            <ul class="add">
                <li class="add-li">
                    <form @submit.prevent="adicionaTarefa()">
                        <input autofocus 
                        class="add__input" 
                        type="text" 
                        placeholder="Nova tarefa" 
                        v-model="novaTarefa">
                        <input type="submit" value="Adicionar" class="add__input">
                    </form>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Eraser from './icons/eraser.vue'

export default {
    name: 'Detalhes',
    components: {
        Eraser,
    },
    data() {
        return {
            exibir: null,
            ativo: true,
            novaTarefa: '',
        }
    },
    methods: {
        ...mapMutations ([
            'SET_DISCIPLINAS'
        ]),
        adicionar() {
            this.ativo = false
        },
        adicionaTarefa() {
            if (this.novaTarefa != '') {
                this.ativo = true;
                const dis = this.disciplinas;
                const minhasTarefas = dis[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas;
                minhasTarefas.push(this.novaTarefa);
                dis[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas = minhasTarefas;
                this.$store.commit('SET_DISCIPLINAS', dis);
                this.novaTarefa = '';
            }
        },
        apagaTarefa(tarefa) {
            const dis = this.disciplinas;
            const minhasTarefas = dis[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas;
            minhasTarefas.splice((minhasTarefas.findIndex(elemento => elemento == tarefa)), 1);
            dis[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas = minhasTarefas;
            this.$store.commit('SET_DISCIPLINAS', dis);
        }
    },
    computed: {
        ...mapGetters([
            'disciplinas',
            'seletor',
        ]),
        disciplina() {
            if (this.disciplinas) {
                return this.disciplinas.find(element => element.id == this.seletor)
            } else {
                return null
            }
        }
    },
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#detalhes {
    width: calc(100% - 2rem);
    max-width: 59rem;
    padding: 0.5rem;
    margin-top: 0.5rem;
    background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
    );
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    .informacoes-gerais, .tarefa-e-notas {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: start;
    }
    .tarefa-e-notas {
        background: rgba(255, 255, 255, 0.5);
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
    }
    h2, h3, h4, li, p, a {
        font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        padding: 0 0 1rem 0;
        margin: 0;
        color: $cinza-pastel;
    }
    li.add-li {
        padding: 0;
    }
    h2 {
        font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        color: $cinza-claro;
    }
    h2.tarefas-titulo {
        margin-top: 2rem;
    }
    .link {
        display: flex;
        align-items: center;
    }
    a, p {
        font-weight: 600;
    }
    a.moodle {
        margin-left: 0.2rem;
    }
    ul {
        margin: 0;
        padding-left: 1.5rem;
    }
    .add {
        list-style-type: none;
        padding-left: 0;
        li {
            margin: 0;
        }
    }
    .add__btn {
        margin: 0;
        padding: 0;
        :hover {
            cursor: pointer;
        }
        svg {
            fill: #ebebeb;
        }
    }
    .add__input {
        font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        margin: 0 0.5rem 0 0;
        padding: 0.5rem;
        color: white;
        background-color: rgba($color: white, $alpha: 0.2);
    }
    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0 0 0 0.5rem;
    }
    .botoes {
    fill: #ebebeb;
    &:hover {
        cursor: pointer;
    }
    svg {
        padding-left: 0.5rem;
        
    }
}
}

@media screen and (min-width: 700px) {
  #detalhes {
    width: calc(100% - 5rem);
    margin-top: 2rem;
    padding: 1rem;
    flex-direction: row;
    h2.tarefas-titulo {
        margin-top: 0;
    }
  }
}
</style>