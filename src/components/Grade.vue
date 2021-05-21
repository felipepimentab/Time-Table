<template>
  <div class="grade">
   
  </div>
</template>

<script>
export default {
  name: 'Grade',
  props: {
    msg: String
  }
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
    rgba(36, 36, 36, 0.3)
  );
  border-radius: 10px;
}
</style>
