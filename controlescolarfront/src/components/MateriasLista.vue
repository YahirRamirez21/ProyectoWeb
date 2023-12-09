<template>
    <div class="MateriasLista">
        <!-- <button @click.prevent="traerMaterias()">Materias</button> -->
        <button @click.prevent="nuevoMateria()">Nueva</button>
        <table>
            <thead>
                <tr>
                    <th>Clave Materia</th>
                    <th>Nombre</th>
                    <th>Creditos</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mat in materias" :key="mat.id">
                    <td>{{ mat.clavemateria }}</td>
                    <td>{{ mat.nombre }}</td>
                    <td>{{ mat.creditos }}</td>
                    <td>
                        <button @click.prevent="editarMateria(mat.clavemateria)">Editar</button>
                        <button @click.prevent="eliminarMateria(mat.clavemateria)">Eliminar</button>
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
        name: "MateriasLista",
        components: { },
        data: function() {
            return {
                materias: [],
            }
        },
        created() {
            this.traerMaterias()
        }, 
        methods: {
            traerMaterias: async function(){
                let m = [];
                await axios.get(URL_DATOS+'/materia')
                .then(function(response){
                    m = response.data;
                    console.log(response)
                }).catch(function(error){
                    console.log(error)
                });
                this.materias = m;
            },
            editarMateria: function(clavemateria) {
                this.$router.push({name: "editarMateria", params: {clavemateria: clavemateria}});
            },
            eliminarMateria: async function(clavemateria) {
                await axios.delete(URL_DATOS+"/materias/"+clavemateria); 
                this.traerMaterias();
            },
            nuevoMateria: function(){
                this.$router.push({name: "nuevaMateria", params: {}});
            }
        }
    }
</script>