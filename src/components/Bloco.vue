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

.vermelho {
  background: linear-gradient(
    to right bottom,
    rgba(255, 182, 174, 0.9),
    rgba(255, 182, 174, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(173, 124, 118, 0.9),
      rgba(173, 124, 118, 0.6)
    );
  }
}

.laranja {
  background: linear-gradient(
    to right bottom,
    rgba(255, 225, 174, 0.9),
    rgba(255, 225, 174, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(177, 156, 119, 0.9),
      rgba(177, 156, 119, 0.6)
    );
  }
}

.amarelo {
  background: linear-gradient(
    to right bottom,
    rgba(250, 252, 175, 0.9),
    rgba(250, 252, 175, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(173, 175, 123, 0.9),
      rgba(173, 175, 123, 0.6)
    );
  }
}

.verde {
  background: linear-gradient(
    to right bottom,
    rgba(176, 242, 194, 0.9),
    rgba(176, 242, 194, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(121, 167, 133, 0.9),
      rgba(121, 167, 133, 0.6)
    );
  }
}

.azul {
  background: linear-gradient(
    to right bottom,
    rgba(176, 194, 242, 0.9),
    rgba(176, 194, 242, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(123, 134, 167, 0.9),
      rgba(123, 134, 167, 0.6)
    );
  }
}

.roxo {
  background: linear-gradient(
    to right bottom,
    rgba(233, 176, 242, 0.9),
    rgba(233, 176, 242, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(151, 116, 156, 0.9),
      rgba(151, 116, 156, 0.6)
    );
  }
}

.rosa {
  background: linear-gradient(
    to right bottom,
    rgba(255, 228, 225, 0.9),
    rgba(255, 228, 225, 0.6)
  );
  &:hover {
    background: linear-gradient(
      to right bottom,
      rgba(179, 161, 159, 0.9),
      rgba(179, 161, 159, 0.6)
    );
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