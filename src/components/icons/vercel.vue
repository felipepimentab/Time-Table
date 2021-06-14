<template>
    <svg 
        :width="width"
        :height="height"
        aria-labelledby="Vercel"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        
        <g :fill="color"> <slot/> </g>
        
        <title>
            Vercel
        </title>
        <path d="M24 22.525H0l12-21.05 12 21.05z"/> 
    </svg>
</template>

<script>
export default {
    name: 'Vercel',
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