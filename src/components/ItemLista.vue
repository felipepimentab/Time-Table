<template>
    <div id="item-lista">
        <div class="flex" v-if="!editando" :key="disciplina">
            <div class="info">
            <h3>{{ disciplina.codigo }}</h3>
            <h4>{{ disciplina.nome }}</h4>
            </div>
            <div class="botoes">
                <Pencil @click="comecaEdit()" />
                <Eraser @click="apagaDisciplina()" />
            </div>
        </div>
        <div class="form" v-if="editando">
            <form @submit.prevent="confirmaEdit()">
            <input type="text" v-model="model.codigo" autofocus>
            <input type="text" v-model="model.nome">
            <input type="text" v-model="model.professor">
            <input type="text" v-model="model.site">
            <input type="text" v-model="model.link">
            <input type="submit" value="CONFIRMAR" class="submit">
            </form>
        </div>
    </div>
</template>

<script>
import Pencil from './icons/pencil.vue';
import Eraser from './icons/eraser.vue';

export default {
    name: "ItemLista",
    components: {
        Pencil,
        Eraser
    },
    props: {
        disciplina: Object
    },
    data() {
        return {
            disciplinas: JSON.parse(localStorage.getItem('disciplinas')),
            editando: false,
            model: this.disciplina,
        }
    },
    methods: {
        apagaDisciplina() {
            if(confirm('Tem certeza que deseja excluir esta disciplina?')) {
                this.disciplinas.splice((this.disciplinas.findIndex(element => element.id == this.disciplina.id)), 1);
                localStorage.setItem('disciplinas', JSON.stringify(this.disciplinas))
            } else {
                console.log('A disciplina não foi apagada')
            }
        },
        comecaEdit() {
            this.editando = true;
        },
        confirmaEdit() {
            this.editando = false;
            this.disciplinas.splice((this.disciplinas.findIndex(element => element.id == this.disciplina.id)), 1, this.model);
            localStorage.setItem('disciplinas', JSON.stringify(this.disciplinas));
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    margin: 0.3rem 0 0.3rem 0;
}
h4 {
    font-family: 'SF Pro', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    margin: 0.3rem 0 0.3rem 0;
}
.flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.info {
    max-width: calc(100% - 4rem);
}
.botoes {
    fill: #ebebeb;
    :hover {
        cursor: pointer;
    }
    svg {
        padding-left: 0.5rem;
        
    }
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .submit {
        padding: 0.5rem;
        background-color: rgba($color: white, $alpha: 0.2);
        border-radius: 0.5rem;
    }
    input {
        background: none;
        border: none;
        width: 100%;
        padding: 0.5rem 0;
        font-size: 1rem;
        font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
        color: #ebebeb;
    }
}
</style>