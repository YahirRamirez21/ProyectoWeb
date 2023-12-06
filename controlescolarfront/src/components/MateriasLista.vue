<template>
    <div class="MateriasLista">
        <button @click.prevent="traerMaterias()">Materias</button>
        <table>
            <thead>
                <tr>
                    <th>Clave Materia</th>
                    <th>Nombre</th>
                    <th>Creditos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="mat in materias" :key="mat.id">
                    <td>{{ mat.clavemateria }}</td>
                    <td>{{ mat.nombre }}</td>
                    <td>{{ mat.creditos }}</td>
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
            }
        }
    }
</script>