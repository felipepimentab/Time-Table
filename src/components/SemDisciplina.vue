<template>
    <router-link to="/edit" class="sem-disciplina">
        <h2>Monte sua grade</h2>
        <h3>Parece que você ainda não possui disciplinas</h3>
        <h3>Clique aqui para adicionar</h3>
    </router-link>
</template>

<script>
export default {
    name: 'SemDisciplinas',
}
</script>

<style lang="scss" scoped>
.sem-disciplina {
    border-radius: 15px;
    background: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.6)
    );
    backdrop-filter: blur(5px);
    width: auto;
    margin: 4rem;
    padding: 2rem;
    color: #ebebeb;
    font-family: 'SF Rounded', 'Helvetica Nue', Helvetica, Arial, sans-serif;
    text-decoration: none;
    h2 {
        font-size: 2rem;
        color: white;
    }
    h3 {
        font-family: 'SF Pro';
    }
}
</style>