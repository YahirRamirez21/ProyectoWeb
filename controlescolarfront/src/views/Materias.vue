<template>
    <div>
        <h1>Materias</h1>
        <MateriasLista></MateriasLista>
    </div>
</template>

<script>
    import MateriasLista from '../components/MateriasLista.vue'
    export default {
        name: "Materias",
        components: { MateriasLista },
        data: function() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    
</style>