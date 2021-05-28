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
    disciplina: Object,
    index: Number,
  },
  methods: {
    detalhe(index) {
      if (index!=null) {this.$emit('detalhe-index', index)}
    }
  },
  emits: ['detalhe-index'],
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

.lime {
  background: linear-gradient(
    to right bottom,
    rgba(214, 255, 173, 0.8),
    rgba(214, 255, 173, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(164, 205, 123, 0.8),
      rgba(164, 205, 123, 0.7)
    );
  }
}

.spring {
  background: linear-gradient(
    to right bottom,
    rgba(182, 255, 182, 0.8),
    rgba(182, 255, 182, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(132, 205, 132, 0.8),
      rgba(132, 205, 132, 0.7)
    );
  }
}

.sea-foam {
  background: linear-gradient(
    to right bottom,
    rgba(180, 255, 217, 0.8),
    rgba(180, 255, 217, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(130, 205, 167, 0.8),
      rgba(130, 205, 167, 0.7)
    );
  }
}

.turquoise {
  background: linear-gradient(
    to right bottom,
    rgba(161, 255, 255, 0.8),
    rgba(161, 255, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(111, 205, 205, 0.8),
      rgba(111, 205, 205, 0.7)
    );
  }
}

.aqua {
  background: linear-gradient(
    to right bottom,
    rgba(167, 209, 252, 0.8),
    rgba(167, 209, 252, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(117, 169, 202, 0.8),
      rgba(117, 169, 202, 0.7)
    );
  }
}

.blueberry {
  background: linear-gradient(
    to right bottom,
    rgba(183, 183, 255, 0.8),
    rgba(183, 183, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(133, 133, 205, 0.8),
      rgba(133, 133, 205, 0.7)
    );
  }
}

.grape {
  background: linear-gradient(
    to right bottom,
    rgba(214, 173, 255, 0.8),
    rgba(214, 173, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(164, 123, 205, 0.8),
      rgba(164, 123, 205, 0.7)
    );
  }
}

.magenta {
  background: linear-gradient(
    to right bottom,
    rgba(255, 184, 255, 0.8),
    rgba(255, 184, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(205, 134, 205, 0.8),
      rgba(205, 134, 205, 0.7)
    );
  }
}

.strawberry {
  background: linear-gradient(
    to right bottom,
    rgba(255, 173, 214, 0.8),
    rgba(255, 173, 214, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(205, 123, 164, 0.8),
      rgba(205, 123, 164, 0.7)
    );
  }
}

.salmon {
  background: linear-gradient(
    to right bottom,
    rgba(253, 166, 166, 0.8),
    rgba(253, 166, 166, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(203, 116, 116, 0.8),
      rgba(203, 116, 116, 0.7)
    );
  }
}

.cantaloupe {
  background: linear-gradient(
    to right bottom,
    rgba(255, 222, 175, 0.8),
    rgba(255, 222, 175, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(205, 172, 125, 0.8),
      rgba(205, 172, 125, 0.7)
    );
  }
}

.banana {
  background: linear-gradient(
    to right bottom,
    rgba(252, 252, 175, 0.8),
    rgba(252, 252, 175, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(202, 202, 125, 0.8),
      rgba(202, 202, 125, 0.7)
    );
  }
}

.honeydew {
  background: linear-gradient(
    to right bottom,
    rgba(233, 255, 190, 0.8),
    rgba(233, 255, 190, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(183, 205, 140, 0.8),
      rgba(183, 205, 140, 0.7)
    );
  }
}

.flora {
  background: linear-gradient(
    to right bottom,
    rgba(184, 255, 184, 0.8),
    rgba(184, 255, 184, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(134, 205, 134, 0.8),
      rgba(134, 205, 134, 0.7)
    );
  }
}

.spindrift {
  background: linear-gradient(
    to right bottom,
    rgba(200, 255, 237, 0.8),
    rgba(200, 255, 237, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(150, 205, 187, 0.8),
      rgba(150, 205, 187, 0.7)
    );
  }
}

.ice {
  background: linear-gradient(
    to right bottom,
    rgba(187, 255, 255, 0.8),
    rgba(187, 255, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(137, 205, 205, 0.8),
      rgba(137, 205, 205, 0.7)
    );
  }
}

.sky {
  background: linear-gradient(
    to right bottom,
    rgba(191, 234, 255, 0.8),
    rgba(191, 234, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(141, 174, 205, 0.8),
      rgba(141, 174, 205, 0.7)
    );
  }
}

.orchid {
  background: linear-gradient(
    to right bottom,
    rgba(194, 194, 255, 0.8),
    rgba(194, 194, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(148, 148, 205, 0.8),
      rgba(148, 148, 205, 0.7)
    );
  }
}

.lavender {
  background: linear-gradient(
    to right bottom,
    rgba(236, 198, 255, 0.8),
    rgba(236, 198, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(186, 148, 205, 0.8),
      rgba(186, 148, 205, 0.7)
    );
  }
}

.bubblegum {
  background: linear-gradient(
    to right bottom,
    rgba(255, 189, 255, 0.8),
    rgba(255, 189, 255, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(205, 139, 205, 0.8),
      rgba(205, 139, 205, 0.7)
    );
  }
}

.carnation {
  background: linear-gradient(
    to right bottom,
    rgba(255, 177, 229, 0.8),
    rgba(255, 177, 229, 0.7)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(205, 127, 179, 0.8),
      rgba(205, 127, 179, 0.7)
    );
  }
}

#bloco {
  padding: 5px;
  margin: 3px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $cinza-mais-escuro;
  border-radius: 5px;
  h3 {
    font-family: 'San Francisco';
    font-weight: bolder;
    margin: 0;
    padding: 0;
  }
  h4 {
    font-weight: bold;
    display: none;
    margin: 0;
    padding: 0;
  }
}

@media screen and (min-width: 700px) {
  #bloco {
    padding: 10px;
    margin: 5px;
    min-height: 75px;
    h4 {
      display: block;
    }
  }
}
</style>