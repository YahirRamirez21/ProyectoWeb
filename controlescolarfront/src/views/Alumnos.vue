<template>
    <div>
        <h1>Alumnos</h1>
        <AlumnoLista></AlumnoLista>

        <!-- <button>Añadir</button>
        <button @click.prevent="editarAlumno(id)">Modificar</button>
        <button>Eliminar</button> -->
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