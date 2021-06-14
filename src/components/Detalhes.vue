<template>
    <div :key="disciplina" v-if="disciplina" id="detalhes">
        <h2>{{ disciplina.codigo }}</h2>
        <h3>{{ disciplina.nome }}</h3>
        <h4>Professor: {{ disciplina.professor }}</h4>
        <div v-if="disciplina.link!='#'" class="link">
            <p>Site:</p><a :href="disciplina.link">{{ disciplina.site }}</a>
        </div>
        <ul>
            <li :key="tarefa.id" v-for="tarefa in disciplina.tarefas">{{ tarefa }} </li>
        </ul>
        <ul class="add">
            <li><button class="add__btn" @click="adicionar()" v-show="ativo"><p>&plus;</p></button></li>  
            <li v-show="!ativo">
                <form @submit.prevent="adicionaTarefa()">
                    <input 
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
export default {
    name: 'Detalhes',
    props: {
        disciplinas: Object
    },
    data() {
        return {
            exibir: null,
            ativo: true,
            novaTarefa: '',
        }
    },
    methods: {
        adicionar() {
            this.ativo = false
        },
        adicionaTarefa() {
            if (this.novaTarefa != '') {
                this.ativo = true;
                const auxiliar = this.disciplinas;
                const minhasTarefas = auxiliar[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas;
                minhasTarefas.push(this.novaTarefa);
                auxiliar[this.disciplinas.findIndex(element => element.id == this.disciplina.id)].tarefas = minhasTarefas;
                localStorage.setItem('disciplinas', JSON.stringify(auxiliar));
                this.novaTarefa = '';
            }
        }
    },
    computed: {
        disciplina() {
            return this.disciplinas.find(element => element.id == this.$store.state.selecionado)
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
    width: calc(100% - 3rem);
    padding: 10px;
    margin-top: 2rem;
    background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.6)
    );
    backdrop-filter: blur(5px);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    h2, h3, h4, li, a, p {
        margin: 0.4rem;
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
        font-family: 'SF Rounded';
        margin: 0;
        padding: 0;
        width: 1.5rem;
        height: 1.5rem;
        color: white;
        display: flex;
        align-content: center;
        justify-content: center;
        font-size: 1.5rem;
        border: none;
        border-radius: 100%;
        background-color: rgba($color: white, $alpha: 0.2);
        p {
            position: relative;
            bottom: 0.2rem;
            margin: 0;
        }
    }
    .add__input {
        font-family: 'SF Pro';
        border: none;
        border-radius: 5px;
        margin: 0 0.5rem 0 0;
        padding: 0.5rem;
        color: white;
        background-color: rgba($color: white, $alpha: 0.2);
    }
}
</style>