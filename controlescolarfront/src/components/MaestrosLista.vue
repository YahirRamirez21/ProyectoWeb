<template>
    <div class="MaestrosLista">
        <button @click.prevent="traerMaestros()">Maestros</button>
        <table>
            <thead>
                <tr>
                    <th>Clave Maestro</th>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Estatus</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="maes in maestros" :key="maes.id">
                    <td>{{ maes.clavemaestro }}</td>
                    <td>{{ maes.nombre }}</td>
                    <td>{{ maes.departamento }}</td>
                    <td>{{ maes.estatus }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import { URL_DATOS } from '../utils/constantes.js';
    import axios from 'axios';

    export default {
        name: "MaestrosLista",
        components: { },
        data: function() {
            return {
                maestros: [],
            }
        },
        methods: {
            traerMaestros: async function(){
                let a = [];
                await axios.get(URL_DATOS+'/maestros')
                .then(function(response){
                    a = response.data;
                    console.log(response)
                }).catch(function(error){
                    console.log(error)
                });
                this.maestros = a;
            }
        }
    }
</script>

<style>
    button {
        margin-bottom: 20px;
    }
    table {
        width: 90%;
        margin: 0 auto;
    }

    td {
        text-align: center;
        padding: 10px;
    }
</style>