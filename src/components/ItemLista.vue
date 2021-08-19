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
            <input type="text" v-model="model.codigo" autofocus required maxlength="8">
            <input type="text" v-model="model.nome" required>
            <input type="text" v-model="model.professor" required>
            <input type="text" v-model="model.site" placeholder="Site">
            <input type="text" v-model="model.link" placeholder="Link">
            <input type="text" v-model="model.aula" placeholder="Aula on-line">
            <select name="cor" id="cor" class="drop-down" v-model="model.cor" required>
                <option value="lime">Lime</option>
                <option value="spring">Spring</option>
                <option value="sea-foam">Sea Foam</option>
                <option value="turquoise">Turquoise</option>
                <option value="aqua">Aqua</option>
                <option value="blueberry">Blueberry</option>
                <option value="grape">Grape</option>
                <option value="magenta">Magenta</option>
                <option value="strawberry">Strawberry</option>
                <option value="salmon">Salmon</option>
                <option value="cantaloupe">Cantaloupe</option>
                <option value="banana">Banana</option>
                <option value="honeydew">Honeydew</option>
                <option value="flora">Flora</option>
                <option value="spindrift">Spindrift</option>
                <option value="ice">Ice</option>
                <option value="sky">Sky</option>
                <option value="orchid">Orchid</option>
                <option value="lavender">Lavender</option>
                <option value="bubblegum">Bubblegum</option>
                <option value="carnation">Carnation</option>
            </select>
            <input type="submit" value="Confirmar" class="submit">
            </form>
        </div>
    </div>
</template>

<script>
import Pencil from './icons/pencil.vue';
import Eraser from './icons/eraser.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: "ItemLista",
    components: {
        Pencil,
        Eraser
    },
    props: {
        disciplina: Object
    },
    computed: {
        ...mapGetters([
            'disciplinas',
            'organizador'
        ])
    },
    data() {
        return {
            editando: false,
            model: this.disciplina,
        }
    },
    methods: {
        ...mapMutations([
            'SET_DISCIPLINAS',
            'SET_ORGANIZADOR'
        ]),
        apagaDisciplina() {
            if(confirm('Tem certeza que deseja excluir esta disciplina?')) {
                let dis = this.disciplinas;
                dis.splice((dis.findIndex(element => element.id == this.disciplina.id)), 1);
                this.$store.commit('SET_DISCIPLINAS', dis);
                
                let org = this.organizador;
                org.forEach(element => {
                    if (element == this.disciplina.id) {
                        org.splice((org.findIndex(elmnt => elmnt == this.disciplina.id)), 1, null);
                    }
                });
                this.$store.commit('SET_ORGANIZADOR', org)
            }
        },
        comecaEdit() {
            this.editando = true;
        },
        confirmaEdit() {
            this.editando = false;
            let dis = this.disciplinas;
            dis.splice((dis.findIndex(element => element.id == this.disciplina.id)), 1, this.model);
            this.$store.commit('SET_DISCIPLINAS', dis);
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
    &:hover {
        cursor: pointer;
    }
    svg {
        padding-left: 0.5rem;
        
    }
}

select {
    background: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 5px;
    margin: 0.5rem 0 1rem 0;
    padding: 0.25rem;
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    font-size: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .submit {
        padding: 0.5rem;
        background-color: rgba($color: white, $alpha: 0.2);
        border-radius: 0.5rem;
        transition: background-color 200ms linear;
        &:hover {
            background-color: rgba($color: white, $alpha: 0.1);
        }
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