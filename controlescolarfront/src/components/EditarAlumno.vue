<template>
    <div class="EditarAlumno">
        Datos del Alumno
        <br>
        <label for="nombre">Nombre del Alumno</label>
        <input type="text" name="nombre" id="nombre" :value="alumnos.nombre">
        <input type="text" name="carrera" id="carrera">
        <input type="text" name="nombre" id="nombre">
    </div>
</template>

<script>
    import { URL_DATOS } from '../utils/constantes';
    import axios from 'axios';

    export default {
        name: "editarAlumno",
        components: {},
        props: {
            id: Number,
        },
        data: function() {
            return {
                 alumnos: [],
            };
        },
        created(){
            this.traerDetalle()
        },
        methods: { 
            traerDetalle: async function() {
                let a = [];
                await axios
                .get(URL_DATOS + '/editarAlumnos/'+this.id)
                .then(function(response) {
                    a = response.data[0];
                }) 
                .catch(function(error) {
                    console.log(error);
                });
                this.alumnos = a;
            }
        }
    }
</script>