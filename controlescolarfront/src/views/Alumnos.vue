<template>
    <div>
        <h1>Alumnos</h1>
        <AlumnoLista></AlumnoLista>
    </div>
</template>

<script>
    import AlumnoLista from '../components/AlumnosLista.vue'
    export default {
        name: "Alumnos",
        components: { AlumnoLista },
        data: function() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    
</style>