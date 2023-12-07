<template>
    <div class="AlumnosLista">
        <button @click.prevent="traerAlumnos()">Alumnos</button>
        <table>
            <thead>
                <tr>
                    <th>No.Control</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="alu in alumnos" :key="alu.id">
                    <td>{{ alu.ncontrol }}</td>
                    <td>{{ alu.nombre }}</td>
                    <td>{{ alu.carrera }}</td>
                    <td>{{ alu.estatus }}</td>
                    <td>
                        <Button>Añadir</Button>
                        <Button @click.prevent="editarAlumno(alu.id)">Editar</Button>
                        <Button >Eliminar</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import { URL_DATOS } from '../utils/constantes.js';
    import axios from 'axios';

    export default {
        name: "AlumnosLista",
        components: {},
        data: function() {
            return {
                alumnos: [],
            };
        },
        methods: {
            traerAlumnos: async function(){
                let a = [];
                await axios.
                    get(URL_DATOS+'/alumnos')
                    .then(function(response){
                        a = response.data;
                        console.log(response)
                    }).catch(function(error){
                        console.log(error)
                    });
                this.alumnos = a;
            },
            editarAlumno: function(id) {
                this.$router.push({name: "editarAlumno", params: {id: id}})
            }   
        }
    }
</script>