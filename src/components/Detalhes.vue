<template>
    <div :key="disciplina" v-if="disciplina" id="detalhes">
        <h2>{{ disciplina.codigo }}</h2>
        <h3>{{ disciplina.nome }}</h3>
        <h4>Professor(a): {{ disciplina.professor }}</h4>
        <div v-if="disciplina.link!=''" class="link">
            <p>Site:</p><a :href="disciplina.link"> {{ disciplina.site }}</a>
        </div>
        <h4>Tarefas:</h4>
        <ul>
            <li :key="tarefa.id" v-for="tarefa in disciplina.tarefas">{{ tarefa }} <button @click="apagaTarefa(tarefa)"><Eraser :height="16" :width="16" class="botoes"/></button></li> 
        </ul>
        <ul class="add">
            <li class="add__btn" @click="adicionar()" v-show="ativo"><Add :width="24" :height="24"/></li>  
            <li v-show="!ativo">
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
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Add from './icons/add.vue'
import Eraser from './icons/eraser.vue'

export default {
    name: 'Detalhes',
    components: {
        Add,
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
    max-width: 60rem;
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
    align-items: flex-start;
    text-align: start;
    h2, h3, h4, li {
        margin: 0 0.5rem 0.5rem 0.5rem;
    }
    h2, h3, li {
        font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
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
    a {
        margin: 0 0 0.5rem 0.2rem;
    }
    p {
        margin: 0 0 0.5rem 0.5rem;
    }
    ul {
        margin: 0;
        padding-left: 3rem;
    }
    .add {
        list-style-type: none;
        padding-left: 2.5rem;
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
    width: calc(100% - 4rem);
    margin-top: 2rem;
  }
}
</style>