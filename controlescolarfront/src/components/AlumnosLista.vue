<template>
    <div class="AlumnosLista">
        <section class="contenedor">
            <article class="cajaboton">
                <button class="botonNuevo" @click.prevent="nuevoAlumno()">Nuevo</button>
                <!-- <button @click.prevent="traerAlumnos()">Alumnos</button> -->
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
                        <tr v-for="alu in alumnos" :key="alu.ncontrol">
                            <td>{{ alu.ncontrol }}</td>
                            <td>{{ alu.nombre }}</td>
                            <td>{{ alu.carrera }}</td>
                            <td>{{ alu.estatus }}</td>
                            <td>
                                <Button class="botonAccion" @click.prevent="editarAlumno(alu.ncontrol)">Editar</Button>
                                <Button class="botonAccion" @click.prevent="eliminarAlumno(alu.ncontrol)">Eliminar</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
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
        created() {
            this.traerAlumnos()
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
            editarAlumno: function(ncontrol) {
                this.$router.push({name: "editarAlumno", params: {ncontrol: ncontrol}});
            },
            eliminarAlumno: async function(ncontrol) {
                await axios.delete(URL_DATOS+"/alumnos/"+ncontrol); 
                this.traerAlumnos();
            },
            nuevoAlumno: function(){
                this.$router.push({name: "nuevoAlumno", params: {}});
            }
        }
    }
</script>