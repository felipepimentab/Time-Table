<template>
    <div id="adicionar">
        <h2>Adicionar disciplina</h2>
        <form @submit="adiciona()" action="/#/edit">
            <label for="codigo">Abreviação da disciplina:</label><br>
            <input type="text" name="codigo" class="infos" v-model="disciplina.codigo" maxlength="8" placeholder="Máx: 8 caractéres" aria-placeholder="ABCDEFGH"><br>

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
                    <input type="checkbox" name="seg-0700" value="seg-0700" class="horario__input" v-model="posicao[0]">
                    <label class="horario__label" for="seg-0700">7:00</label><br>
                    <input type="checkbox" name="seg-0800" value="seg-0800" class="horario__input" v-model="posicao[5]">
                    <label class="horario__label" for="seg-0800">8:00</label><br>
                    <input type="checkbox" name="seg-0900" value="seg-0900" class="horario__input" v-model="posicao[10]">
                    <label class="horario__label" for="seg-0900">9:00</label><br>
                    <input type="checkbox" name="seg-1000" value="seg-1000" class="horario__input" v-model="posicao[15]">
                    <label class="horario__label" for="seg-1000">10:00</label><br>
                    <input type="checkbox" name="seg-1100" value="seg-1100" class="horario__input" v-model="posicao[20]">
                    <label class="horario__label" for="seg-1100">11:00</label><br>
                    <input type="checkbox" name="seg-1200" value="seg-1200" class="horario__input" v-model="posicao[25]">
                    <label class="horario__label" for="seg-1200">12:00</label><br>
                    <input type="checkbox" name="seg-1300" value="seg-1300" class="horario__input" v-model="posicao[30]">
                    <label class="horario__label" for="seg-1300">13:00</label><br>
                    <input type="checkbox" name="seg-1400" value="seg-1400" class="horario__input" v-model="posicao[35]">
                    <label class="horario__label" for="seg-1400">14:00</label><br>
                    <input type="checkbox" name="seg-1500" value="seg-1500" class="horario__input" v-model="posicao[40]">
                    <label class="horario__label" for="seg-1500">15:00</label><br>
                    <input type="checkbox" name="seg-1600" value="seg-1600" class="horario__input" v-model="posicao[45]">
                    <label class="horario__label" for="seg-1600">16:00</label><br>
                    <input type="checkbox" name="seg-1700" value="seg-1700" class="horario__input" v-model="posicao[50]">
                    <label class="horario__label" for="seg-1700">17:00</label><br>
                    <input type="checkbox" name="seg-1800" value="seg-1800" class="horario__input" v-model="posicao[55]">
                    <label class="horario__label" for="seg-1800">18:00</label><br>
                    <input type="checkbox" name="seg-1900" value="seg-1900" class="horario__input" v-model="posicao[60]">
                    <label class="horario__label" for="seg-1900">19:00</label><br>
                    <input type="checkbox" name="seg-2000" value="seg-2000" class="horario__input" v-model="posicao[65]">
                    <label class="horario__label" for="seg-2000">20:00</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Terça</h4>
                    <input type="checkbox" name="ter-0700" value="ter-0700" class="horario__input" v-model="posicao[1]">
                    <label class="horario__label" for="ter-0700">7:00</label><br>
                    <input type="checkbox" name="ter-0800" value="ter-0800" class="horario__input" v-model="posicao[6]">
                    <label class="horario__label" for="ter-0800">8:00</label><br>
                    <input type="checkbox" name="ter-0900" value="ter-0900" class="horario__input" v-model="posicao[11]">
                    <label class="horario__label" for="ter-0900">9:00</label><br>
                    <input type="checkbox" name="ter-1000" value="ter-1000" class="horario__input" v-model="posicao[16]">
                    <label class="horario__label" for="ter-1000">10:00</label><br>
                    <input type="checkbox" name="ter-1100" value="ter-1100" class="horario__input" v-model="posicao[21]">
                    <label class="horario__label" for="ter-1100">11:00</label><br>
                    <input type="checkbox" name="ter-1200" value="ter-1200" class="horario__input" v-model="posicao[26]">
                    <label class="horario__label" for="ter-1200">12:00</label><br>
                    <input type="checkbox" name="ter-1300" value="ter-1300" class="horario__input" v-model="posicao[31]">
                    <label class="horario__label" for="ter-1300">13:00</label><br>
                    <input type="checkbox" name="ter-1400" value="ter-1400" class="horario__input" v-model="posicao[36]">
                    <label class="horario__label" for="ter-1400">14:00</label><br>
                    <input type="checkbox" name="ter-1500" value="ter-1500" class="horario__input" v-model="posicao[41]">
                    <label class="horario__label" for="ter-1500">15:00</label><br>
                    <input type="checkbox" name="ter-1600" value="ter-1600" class="horario__input" v-model="posicao[46]">
                    <label class="horario__label" for="ter-1600">16:00</label><br>
                    <input type="checkbox" name="ter-1700" value="ter-1700" class="horario__input" v-model="posicao[51]">
                    <label class="horario__label" for="ter-1700">17:00</label><br>
                    <input type="checkbox" name="ter-1800" value="ter-1800" class="horario__input" v-model="posicao[56]">
                    <label class="horario__label" for="ter-1800">18:00</label><br>
                    <input type="checkbox" name="ter-1900" value="ter-1900" class="horario__input" v-model="posicao[61]">
                    <label class="horario__label" for="ter-1900">19:00</label><br>
                    <input type="checkbox" name="ter-2000" value="ter-2000" class="horario__input" v-model="posicao[66]">
                    <label class="horario__label" for="ter-2000">20:00</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Quarta</h4>
                    <input type="checkbox" name="qua-0700" value="qua-0700" class="horario__input" v-model="posicao[2]">
                    <label class="horario__label" for="qua-0700">7:00</label><br>
                    <input type="checkbox" name="qua-0800" value="qua-0800" class="horario__input" v-model="posicao[7]">
                    <label class="horario__label" for="qua-0800">8:00</label><br>
                    <input type="checkbox" name="qua-0900" value="qua-0900" class="horario__input" v-model="posicao[12]">
                    <label class="horario__label" for="qua-0900">9:00</label><br>
                    <input type="checkbox" name="qua-1000" value="qua-1000" class="horario__input" v-model="posicao[17]">
                    <label class="horario__label" for="qua-1000">10:00</label><br>
                    <input type="checkbox" name="qua-1100" value="qua-1100" class="horario__input" v-model="posicao[22]">
                    <label class="horario__label" for="qua-1100">11:00</label><br>
                    <input type="checkbox" name="qua-1200" value="qua-1200" class="horario__input" v-model="posicao[27]">
                    <label class="horario__label" for="qua-1200">12:00</label><br>
                    <input type="checkbox" name="qua-1300" value="qua-1300" class="horario__input" v-model="posicao[32]">
                    <label class="horario__label" for="qua-1300">13:00</label><br>
                    <input type="checkbox" name="qua-1400" value="qua-1400" class="horario__input" v-model="posicao[37]">
                    <label class="horario__label" for="qua-1400">14:00</label><br>
                    <input type="checkbox" name="qua-1500" value="qua-1500" class="horario__input" v-model="posicao[42]">
                    <label class="horario__label" for="qua-1500">15:00</label><br>
                    <input type="checkbox" name="qua-1600" value="qua-1600" class="horario__input" v-model="posicao[47]">
                    <label class="horario__label" for="qua-1600">16:00</label><br>
                    <input type="checkbox" name="qua-1700" value="qua-1700" class="horario__input" v-model="posicao[52]">
                    <label class="horario__label" for="qua-1700">17:00</label><br>
                    <input type="checkbox" name="qua-1800" value="qua-1800" class="horario__input" v-model="posicao[57]">
                    <label class="horario__label" for="qua-1800">18:00</label><br>
                    <input type="checkbox" name="qua-1900" value="qua-1900" class="horario__input" v-model="posicao[62]">
                    <label class="horario__label" for="qua-1900">19:00</label><br>
                    <input type="checkbox" name="qua-2000" value="qua-2000" class="horario__input" v-model="posicao[67]">
                    <label class="horario__label" for="qua-2000">20:00</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Quinta</h4>
                    <input type="checkbox" name="qui-0700" value="qui-0700" class="horario__input" v-model="posicao[3]">
                    <label class="horario__label" for="qui-0700">7:00</label><br>
                    <input type="checkbox" name="qui-0800" value="qui-0800" class="horario__input" v-model="posicao[8]">
                    <label class="horario__label" for="qui-0800">8:00</label><br>
                    <input type="checkbox" name="qui-0900" value="qui-0900" class="horario__input" v-model="posicao[13]">
                    <label class="horario__label" for="qui-0900">9:00</label><br>
                    <input type="checkbox" name="qui-1000" value="qui-1000" class="horario__input" v-model="posicao[18]">
                    <label class="horario__label" for="qui-1000">10:00</label><br>
                    <input type="checkbox" name="qui-1100" value="qui-1100" class="horario__input" v-model="posicao[23]">
                    <label class="horario__label" for="qui-1100">11:00</label><br>
                    <input type="checkbox" name="qui-1200" value="qui-1200" class="horario__input" v-model="posicao[28]">
                    <label class="horario__label" for="qui-1200">12:00</label><br>
                    <input type="checkbox" name="qui-1300" value="qui-1300" class="horario__input" v-model="posicao[33]">
                    <label class="horario__label" for="qui-1300">13:00</label><br>
                    <input type="checkbox" name="qui-1400" value="qui-1400" class="horario__input" v-model="posicao[38]">
                    <label class="horario__label" for="qui-1400">14:00</label><br>
                    <input type="checkbox" name="qui-1500" value="qui-1500" class="horario__input" v-model="posicao[43]">
                    <label class="horario__label" for="qui-1500">15:00</label><br>
                    <input type="checkbox" name="qui-1600" value="qui-1600" class="horario__input" v-model="posicao[48]">
                    <label class="horario__label" for="qui-1600">16:00</label><br>
                    <input type="checkbox" name="qui-1700" value="qui-1700" class="horario__input" v-model="posicao[53]">
                    <label class="horario__label" for="qui-1700">17:00</label><br>
                    <input type="checkbox" name="qui-1800" value="qui-1800" class="horario__input" v-model="posicao[58]">
                    <label class="horario__label" for="qui-1800">18:00</label><br>
                    <input type="checkbox" name="qui-1900" value="qui-1900" class="horario__input" v-model="posicao[63]">
                    <label class="horario__label" for="qui-1900">19:00</label><br>
                    <input type="checkbox" name="qui-2000" value="qui-2000" class="horario__input" v-model="posicao[68]">
                    <label class="horario__label" for="qui-2000">20:00</label><br>
                </div>

                <div class="horario__dia">
                    <h4>Sexta</h4>
                    <input type="checkbox" name="sex-0700" value="sex-0700" class="horario__input" v-model="posicao[4]">
                    <label class="horario__label" for="sex-0700">7:00</label><br>
                    <input type="checkbox" name="sex-0800" value="sex-0800" class="horario__input" v-model="posicao[9]">
                    <label class="horario__label" for="sex-0800">8:00</label><br>
                    <input type="checkbox" name="sex-0900" value="sex-0900" class="horario__input" v-model="posicao[14]">
                    <label class="horario__label" for="sex-0900">9:00</label><br>
                    <input type="checkbox" name="sex-1000" value="sex-1000" class="horario__input" v-model="posicao[19]">
                    <label class="horario__label" for="sex-1000">10:00</label><br>
                    <input type="checkbox" name="sex-1100" value="sex-1100" class="horario__input" v-model="posicao[24]">
                    <label class="horario__label" for="sex-1100">11:00</label><br>
                    <input type="checkbox" name="sex-1200" value="sex-1200" class="horario__input" v-model="posicao[29]">
                    <label class="horario__label" for="sex-1200">12:00</label><br>
                    <input type="checkbox" name="sex-1300" value="sex-1300" class="horario__input" v-model="posicao[34]">
                    <label class="horario__label" for="sex-1300">13:00</label><br>
                    <input type="checkbox" name="sex-1400" value="sex-1400" class="horario__input" v-model="posicao[39]">
                    <label class="horario__label" for="sex-1400">14:00</label><br>
                    <input type="checkbox" name="sex-1500" value="sex-1500" class="horario__input" v-model="posicao[44]">
                    <label class="horario__label" for="sex-1500">15:00</label><br>
                    <input type="checkbox" name="sex-1600" value="sex-1600" class="horario__input" v-model="posicao[49]">
                    <label class="horario__label" for="sex-1600">16:00</label><br>
                    <input type="checkbox" name="sex-1700" value="sex-1700" class="horario__input" v-model="posicao[54]">
                    <label class="horario__label" for="sex-1700">17:00</label><br>
                    <input type="checkbox" name="sex-1800" value="sex-1800" class="horario__input" v-model="posicao[59]">
                    <label class="horario__label" for="sex-1800">18:00</label><br>
                    <input type="checkbox" name="sex-1900" value="sex-1900" class="horario__input" v-model="posicao[64]">
                    <label class="horario__label" for="sex-1900">19:00</label><br>
                    <input type="checkbox" name="sex-2000" value="sex-2000" class="horario__input" v-model="posicao[69]">
                    <label class="horario__label" for="sex-2000">20:00</label><br>
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
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
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
                org =   [
                null, null, null, null, null, 
                null, null, null, null, null, 
                null, null, null, null, null, 
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null,  
                null, null, null, null, null, 
                null, null, null, null, null,  
                null, null, null, null, null, 
            ];
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
            this.posicao = [
                false, false, false, false, false, 
                false, false, false, false, false, 
                false, false, false, false, false, 
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false,  
                false, false, false, false, false, 
                false, false, false, false, false,  
                false, false, false, false, false, 
            ]
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
    h2, h4 {
        margin: 0 0 1rem 0;
    }
    h3 {
        margin: 0;
    }
    .horario {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .horario__dia {
        padding: 1rem;
        width: auto;
        }
        .horario__input {
            width: auto;
            padding: 0.5rem;
        }
        .horario__label {
            width: auto;
            padding: 0.5rem;
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
        margin: 0.5rem 0 1rem 0;
        padding: 0.3rem;
        
        border-radius: 0.3rem;
        font-family: 'SF Pro';
        font-size: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .infos {
        width: calc(100% - 0.6rem);
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