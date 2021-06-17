<template>
    <div @click="detalhe(index)" id="bloco" :class=" index!=null ? disciplina.cor : ' '">
      <h3>{{ index!=null ? disciplina.codigo : ' ' }}</h3>
      <h4>{{ index!=null ? disciplina.nome : ' ' }}</h4>
    </div>
</template>

<script>
export default {
  name: 'Bloco',
  props: {
    disciplinas: Object,
    index: String,
  },
  data() {
    return {
      disciplina: this.disciplinas.find(element => element.id == this.index),
    }
  },
  methods: {
    detalhe(index) {
      if (index!=null) {
        this.$store.commit('SELECIONAR_DETALHES', this.disciplina.id)
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

$lime: #d6ffad;
$spring: #b6ffb6;
$sea-foam: #b4ffd9;
$turquoise: #a1ffff;
$aqua: #a7d1fc;
$blueberry:#b7b7ff;
$grape: #d6adff;
$magenta: #ffb8ff;
$strawberry: #ffadd6;
$salmon: #fda6a6;
$cantaloupe: #ffdeaf;
$banana: #fcfcaf;
$honeydew: #e9ffbe;
$flora: #b8ffb8;
$spindrift: #c8ffed;
$ice: #bbffff;
$sky: #bfeaff;
$orchid: #c2c2ff;
$lavender: #ecc6ff;
$bubblegum: #ffbdff;
$carnation: #ffb1e5;



.lime {
  background-color: rgba($lime, 0.8);
  &:hover {
    background-color: rgba($lime, 0.5);
  }
}

.spring {
  background-color: rgba($spring, 0.8);
  &:hover {
    background-color: rgba($spring, 0.5);
  }
}

.sea-foam {
  background-color: rgba($sea-foam, 0.8);
  &:hover {
    background-color: rgba($sea-foam, 0.5);
  }
}

.turquoise {
  background-color: rgba($turquoise, 0.8);
  &:hover {
    background-color: rgba($turquoise, 0.5);
  }
}

.aqua {
  background-color: rgba($aqua, 0.8);
  &:hover {
    background-color: rgba($aqua, 0.5);
  }
}

.blueberry {
  background-color: rgba($blueberry, 0.8);
  &:hover {
    background-color: rgba($blueberry, 0.5);
  }
}

.grape {
  background-color: rgba($grape, 0.8);
  &:hover {
    background-color: rgba($grape, 0.5);
  }
}

.magenta {
  background-color: rgba($magenta, 0.8);
  &:hover {
    background-color: rgba($magenta, 0.5);
  }
}

.strawberry {
  background-color: rgba($strawberry, 0.8);
  &:hover {
    background-color: rgba($strawberry, 0.5);
  }
}

.salmon {
  background-color: rgba($salmon, 0.8);
  &:hover {
    background-color: rgba($salmon, 0.5);
  }
}

.cantaloupe {
  background-color: rgba($cantaloupe, 0.8);
  &:hover {
    background-color: rgba($cantaloupe, 0.5);
  }
}

.banana {
  background-color: rgba($banana, 0.8);
  &:hover {
    background-color: rgba($banana, 0.5);
  }
}

.honeydew {
  background-color: rgba($honeydew, 0.8);
  &:hover {
    background-color: rgba($honeydew, 0.5);
  }
}

.flora {
  background-color: rgba($flora, 0.8);
  &:hover {
    background-color: rgba($flora, 0.5);
  }
}

.spindrift {
  background-color: rgba($spindrift, 0.8);
  &:hover {
    background-color: rgba($spindrift, 0.5);
  }
}

.ice {
  background-color: rgba($ice, 0.8);
  &:hover {
    background-color: rgba($ice, 0.5);
  }
}

.sky {
  background-color: rgba($sky, 0.8);
  &:hover {
    background-color: rgba($sky, 0.5);
  }
}

.orchid {
  background-color: rgba($orchid, 0.8);
  &:hover {
    background-color: rgba($orchid, 0.5);
  }
}

.lavender {
  background-color: rgba($lavender, 0.8);
  &:hover {
    background-color: rgba($lavender, 0.5);
  }
}

.bubblegum {
  background-color: rgba($bubblegum, 0.8);
  &:hover {
    background-color: rgba($bubblegum, 0.5);
  }
}

.carnation {
  background-color: rgba($carnation, 0.8);
  &:hover {
    background-color: rgba($carnation, 0.5);
  }
}

#bloco {
  padding: 0;
  margin: 0.2rem;
  
  word-wrap: break-word;
  word-break: all;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $cinza-mais-escuro;
  border-radius: 0.5rem;
  transition: background-color 200ms linear;
  h3 {
    word-wrap: break-word;
    word-break: all;
    max-width: 2rem;
    font-size: 1rem;
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    font-weight: bolder;
    margin: 0;
    padding: 0;
    cursor: default;
  }
  h4 {
    font-weight: bold;
    display: none;
    margin: 0;
    padding: 0;
    cursor: default;
  }
}
@media screen and (min-width: 360px) {
  #bloco {
    h3 {
      margin: 0 0.1rem;
      max-width: 3rem;
    }
  }
}

@media screen and (min-width: 700px) {
  #bloco {
    padding: 0.5rem;
   min-height: 2rem;
    h4 {
      display: block;
    }
    h3 {
      display: none;
    }
  }
}
</style>