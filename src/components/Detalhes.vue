<template>
    <div id="detalhes">
        <h2>{{ codigo }}</h2>
        <h3>{{ nome }}</h3>
        <h4>{{ professor }}</h4>
        <a :href="link">{{ site }}</a>
    </div>
</template>

<script>
export default {
    name: 'Detalhes',
    props: {
        codigo: String,
        nome: String,
        professor: String,
        site: String,
        link: String,
    }
}
</script>

<style lang="scss" scoped>
#detalhes {
    width: 70%;
    max-width: 850px;
    background: linear-gradient(
    to right bottom,
    rgba(36, 36, 36, 0.6),
    rgba(36, 36, 36, 0.5)
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    h2, h3, a {
        font-family: 'San Francisco';
        color: #ebebeb;
        margin: 0;
    }
}
</style>