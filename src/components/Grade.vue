<template>
  <div class="grade">
    <div class="teste" id="vazio"></div>
    <div class="teste d"></div>
    <div class="teste d"></div>
    <div class="teste d"></div>
    <div class="teste d"></div>
    <div class="teste d"></div>

    <div class="teste h"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>

    <div class="teste h"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>

    <div class="teste h"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>

    <div class="teste h"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
    <div class="teste m"></div>
  </div>
</template>

<script>
export default {
  name: 'Grade',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.grade {
  background: rgb(36, 36, 36);
  min-height: 80vh;
  width: 60%;
  background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.7),
    rgba(36, 36, 36, 0.5)
  );
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.teste {
  min-height: 10%;
  min-width: 10%;
  background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.9),
    rgba(36, 36, 36, 0.6)
  );
  border-radius: 10px;
  margin: 0.1%;
  .h {
    width: 10%;
  }
  .d {
    height: 10%;
  }
  .m {
    width: auto;
    height: auto;
  }
}

  #vazio {
    background: rgba(0,0,0,0);
  }
</style>
