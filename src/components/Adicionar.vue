<template>
    <div id="adicionar">
        <h2>Adicionar disciplina</h2>
        <form action="">
            <label for="codigo">Código da disciplina:</label><br>
            <input type="text" name="codigo"><br>   

            <label for="nome">Nome da disciplina</label><br>
            <input type="text" name="nome"><br>

            <label for="professor">Professor responsável:</label><br>
            <input type="text" name="professor"><br>

            <label for="site">Site:</label><br>
            <input type="text" name="site"><br>

            <label for="link">Link:</label><br>
            <input type="url" name="link"><br>

            <label for="cor">Cor:</label><br>
            <select name="cor" id="cor" class="drop-down">
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
export default {
    name: 'Adicionar',
}
</script>

<style lang="scss" scoped>
$cinza-escuro: #404040;
$cinza-mais-escuro: #202020;
$cinza-pastel: #d6d6d6;
$cinza-claro: #ebebeb;

#adicionar {
    width: calc(100% - 3rem);
    padding: 10px;
    margin-top: 2rem;
    background: linear-gradient(
    to right bottom,
    rgba(10, 10, 10, 0.8),
    rgba(10, 10, 10, 0.7)
    );
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    color: $cinza-claro;
    font-family: 'San Francisco';
    h2 {
        margin: 0 0 1rem 0;
    }
    select {
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.4)
        );
        border: none;
        border-radius: 5px;
        margin: 1rem 0 1rem 0;
        padding: 0.25rem;
        font-family: 'San Francisco';
    }
    input {
        border: none;
        margin: 1rem 0 1rem 0;
        padding: 0.3rem;
        border-radius: 5px;
        font-family: 'San Francisco';
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.4)
        );
    }
    .add {
        font-size: 1.2rem;
        &:hover {
            background: linear-gradient(
                to right bottom,
                rgba(205, 205, 205, 0.5),
                rgba(205, 205, 205, 0.4)
            );
        }
    }
}
</style>