<template>
    <div id="adicionar">
        <h2>Adicionar disciplina</h2>
        <form @submit="adiciona()" action="/#/edit">
            <label for="codigo">Código da disciplina:</label><br>
            <input type="text" name="codigo" class="infos" v-model="disciplina.codigo" required pattern="^([A-Z]{3} [0-9]{4})$" placeholder="ABC 1234" aria-placeholder="BCD 4567"><br>

            <label for="nome">Nome da disciplina:</label><br>
            <input type="text" name="nome" class="infos" v-model="disciplina.nome" required placeholder="Disciplina"><br>

            <label for="professor">Professor(a) responsável:</label><br>
            <input type="text" name="professor" class="infos" v-model="disciplina.professor" required
            placeholder="Nome do(a) professor(a)"><br>

            <label for="site">Site:</label><br>
            <input type="text" name="site" class="infos" v-model="disciplina.site" placeholder="Nome do portal"><br>

            <label for="link">Link:</label><br>
            <input type="url" name="link" class="infos" v-model="disciplina.link" placeholder="http://www.endereço.com.br"><br>

            <h3>Horário</h3>

            <div class="horario">
                <div class="horario__dia">
                    <h4>Segunda</h4>

                    <input type="checkbox" name="seg-0810" value="seg-0810" class="horario__input" v-model="posicao[0]">
                    <label class="horario__label" for="seg-0810">8:10</label><br>
                    
                    <input type="checkbox" name="seg-1010" value="seg-1010" class="horario__input" v-model="posicao[5]">
                    <label class="horario__label" for="seg-1010">10:10</label><br>

                    <input type="checkbox" name="seg-1420" value="seg-1420" class="horario__input" v-model="posicao[10]">
                    <label class="horario__label" for="seg-1420">14:20</label><br>

                    <input type="checkbox" name="seg-1620" value="seg-1620" class="horario__input" v-model="posicao[15]">
                    <label class="horario__label" for="seg-1620">16:20</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Terça</h4>

                    <input type="checkbox" name="ter-0810" value="ter-0810" class="horario__input" v-model="posicao[1]">
                    <label class="horario__label" for="ter-0810">8:10</label><br>
                    
                    <input type="checkbox" name="ter-1010" value="ter-1010" class="horario__input" v-model="posicao[6]">
                    <label class="horario__label" for="ter-1010">10:10</label><br>

                    <input type="checkbox" name="ter-1420" value="ter-1420" class="horario__input" v-model="posicao[11]">
                    <label class="horario__label" for="ter-1420">14:20</label><br>

                    <input type="checkbox" name="ter-1620" value="ter-1620" class="horario__input" v-model="posicao[16]">
                    <label class="horario__label" for="ter-1620">16:20</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Quarta</h4>

                    <input type="checkbox" name="qua-0810" value="qua-0810" class="horario__input" v-model="posicao[2]">
                    <label class="horario__label" for="qua-0810">8:10</label><br>
                    
                    <input type="checkbox" name="qua-1010" value="qua-1010" class="horario__input" v-model="posicao[7]">
                    <label class="horario__label" for="qua-1010">10:10</label><br>

                    <input type="checkbox" name="qua-1420" value="qua-1420" class="horario__input" v-model="posicao[12]">
                    <label class="horario__label" for="qua-1420">14:20</label><br>

                    <input type="checkbox" name="qua-1620" value="qua-1620" class="horario__input" v-model="posicao[17]">
                    <label class="horario__label" for="qua-1620">16:20</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Quinta</h4>

                    <input type="checkbox" name="qui-0810" value="qui-0810" class="horario__input" v-model="posicao[3]">
                    <label class="horario__label" for="qui-0810">8:10</label><br>
                    
                    <input type="checkbox" name="qui-1010" value="qui-1010" class="horario__input" v-model="posicao[8]">
                    <label class="horario__label" for="qui-1010">10:10</label><br>

                    <input type="checkbox" name="qui-1420" value="qui-1420" class="horario__input" v-model="posicao[13]">
                    <label class="horario__label" for="qui-1420">14:20</label><br>

                    <input type="checkbox" name="qui-1620" value="qui-1620" class="horario__input" v-model="posicao[18]">
                    <label class="horario__label" for="qui-1620">16:20</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Sexta</h4>

                    <input type="checkbox" name="sex-0810" value="sex-0810" class="horario__input" v-model="posicao[4]">
                    <label class="horario__label" for="sex-0810">8:10</label><br>
                    
                    <input type="checkbox" name="sex-1010" value="sex-1010" class="horario__input" v-model="posicao[9]">
                    <label class="horario__label" for="sex-1010">10:10</label><br>

                    <input type="checkbox" name="sex-1420" value="sex-1420" class="horario__input" v-model="posicao[14]">
                    <label class="horario__label" for="sex-1420">14:20</label><br>

                    <input type="checkbox" name="sex-1620" value="sex-1620" class="horario__input" v-model="posicao[19]">
                    <label class="horario__label" for="sex-1620">16:20</label><br>
                </div>
            </div>
            


            <label for="cor">Cor:</label><br>
            <select name="cor" id="cor" class="drop-down" @input="disciplina.cor = $event.target.value" :value="disciplina.cor" required>
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
            </select><br>

            <input type="submit" value="Adicionar" class="add">
        </form>
    </div>
</template>

<script>
import Disciplina from '../domain/disciplina/disciplina.js'

export default {
    name: 'Adicionar',
    data: function() {
        return {
            disciplina: {
                codigo: '',
                nome: '',
                professor: '',
                site: '',
                link: '',
                cor: '',
                tarefas: [],
            },
            posicao: [
                false, false, false, false, false, 
                false, false, false, false, false, 
                false, false, false, false, false, 
                false, false, false, false, false, 
            ],
            organizador: JSON.parse(localStorage.getItem('organizador'))
        }
    },
    props: {
        disciplinas: Array,
    },
    methods: {
        adiciona() {
            if (this.disciplinas) {
                var dis = this.disciplinas;
                var org = this.organizador;
            } else {
                dis = [];
                org = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            }
            this.disciplina = new Disciplina(
                this.disciplina.codigo,
                this.disciplina.nome,
                this.disciplina.professor,
                this.disciplina.site,
                this.disciplina.link,
                this.disciplina.cor
            );
            dis.push(this.disciplina);
            localStorage.setItem('disciplinas', JSON.stringify(dis));

            for(let i=0; i<= this.posicao.length; i++) {
                if(this.posicao[i] === true && org[i] === null) {
                    //org[i] = dis.length-1;
                    org[i] = this.disciplina.id;
                }
            }
            localStorage.setItem('organizador', JSON.stringify(org));
            this.disciplina = {codigo: '', nome: '', professor: '', site: '', link: '', cor: '', tarefas: []}
            this.posicao = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
        }
    },
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#adicionar {
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1)
    );
    width: auto;
    padding: 1rem;
    margin: 0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    color: $cinza-claro;
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    h2 {
        margin: 0 0 0.5rem 0;
    }
    h3, h4 {
        margin: 0 0 0.5rem 0;
    }
    .horario {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .horario__dia {
        width: auto;
        margin: 0 0.5rem;
        }
        .horario__input {
            width: 1.5rem;
            height: 1.5rem;
            padding: 0.5rem;
            margin: 0;
        }
        .horario__label {
            position: relative;
            bottom: 0.3rem;
            width: auto;
            height: auto;
            margin: 0.5rem;
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
        width: 100%;
    }
    
    input {
        border: none;
        padding: 0.3rem;
        
        border-radius: 0.3rem;
        font-family: 'SF Pro';
        font-size: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .infos {
        width: calc(100% - 0.6rem);
        margin: 0.1rem 0 0.5rem 0;
    }
    .add {
        font-size: 1.2rem;
        width: calc(100% - 0.6rem);
        transition: all 200ms linear;
        &:hover {
            background-color:rgba(255, 255, 255, 0.5)
        }
    }
}

@media screen and (min-width: 700px) {
  #adicionar {
    align-self: center;
  }
}
</style>