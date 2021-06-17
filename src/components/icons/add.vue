<template>
    <svg 
        :width="width"
        :height="height"
        aria-labelledby="Adicionar tarefa"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">

        <g :fill="color"> <slot/> </g>
        
        <title>
            Adicionar tarefa
        </title>
        
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/>
    </svg>
</template>

<script>
export default {
    name: 'Add',
    props: {
        width: {
            type: [Number, String],
            default: 24
        },
        height: {
            type: [Number, String],
            default: 24
        },
        color: {
            type: String,
            default: 'black'
        }
    }
}
</script>