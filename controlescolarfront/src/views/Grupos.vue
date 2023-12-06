<template>
    <div>
        <h1>Grupos</h1>
        <GruposLista></GruposLista>
    </div>
</template>

<script>
    import GruposLista from '../components/GruposLista.vue';

    export default {
        name: "Grupos",
        components: { GruposLista },
        data: function() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    
</style>