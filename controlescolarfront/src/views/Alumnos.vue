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
    h1 {
        font-size: 40px;
        font-family: sans-serif;
        margin-left: 140px;
        margin-top: -104px;
    }
</style>