<template>
    <div>
        <h1>Maestros</h1>
        <MaestrosLista></MaestrosLista>
    </div>
</template>

<script>
    import MaestrosLista from '../components/MaestrosLista.vue';

    export default {
        name: "Maestros",
        components: { MaestrosLista },
        data: function() {
            return {}
        },
        methods: {}
    }
</script>

<style>


</style>