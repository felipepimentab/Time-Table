<template>
    <div id="bloco" :class="cor">
      <h3>{{ codigo }}</h3>
      <h4>{{ nome }}</h4>
    </div>
</template>

<script>
export default {
  name: 'Bloco',
  props: {
    cor: String,
    codigo: String,
    nome: String,
  }
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

$vermelho-pastel: rgb(255, 182, 174);
$laranja-pastel: rgb(255, 225, 174);
$amarelo-pastel: rgb(250, 252, 175);
$verde-pastel: rgb(176, 242, 194);
$azul-pastel: rgb(176, 194, 242);
$roxo-pastel: rgb(233, 176, 242);
$rosa-pastel: rgb(255, 228, 225);

$vermelho: rgb(173, 124, 118);
$laranja: rgb(177, 156, 119);
$amarelo: rgb(173, 175, 123);
$verde: rgb(121, 167, 133);
$azul: rgb(123, 134, 167);
$roxo: rgb(151, 116, 156);
$rosa: rgb(179, 161, 159);

#bloco {
  min-width: 100px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $cinza-mais-escuro;
  border-radius: 5px;
  margin: 0.2rem;
  padding: 0.5rem;
  h3 {
    font-family: 'San Francisco';
    margin: 0.1rem;
    font-weight: bolder;
  }
  h4 {
    margin: 0.1rem;
    font-weight: bold;
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
</style>