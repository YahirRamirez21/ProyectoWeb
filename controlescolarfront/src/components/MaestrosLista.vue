<template>
    <div class="MaestrosLista">
        <!-- <button @click.prevent="traerMaestros()">Maestros</button> -->
        <button @click.prevent="nuevoMaestro()">Nuevo</button>
        <table>
            <thead>
                <tr>
                    <th>Clave Maestro</th>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="maes in maestros" :key="maes.id">
                    <td>{{ maes.clavemaestro }}</td>
                    <td>{{ maes.nombre }}</td>
                    <td>{{ maes.departamento }}</td>
                    <td>{{ maes.estatus }}</td>
                    <td>
                        <button @click.prevent="editarMaestro(maes.clavemaestro)">Editar</button>
                        <button @click.prevent="eliminarMaestro(maes.clavemaestro)">Eliminar</button>
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
        name: "MaestrosLista",
        components: { },
        data: function() {
            return {
                maestros: [],
            }
        },
        created() {
            this.traerMaestros()
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
            },
            editarMaestro: function(clavemaestro) {
                this.$router.push({name: "editarMaestro", params: {clavemaestro: clavemaestro}});
            },
            eliminarMaestro: async function(clavemaestro) {
                await axios.delete(URL_DATOS+"/maestros/"+clavemaestro); 
                this.traerMaestros();
            },
            nuevoMaestro: function(){
                this.$router.push({name: "nuevoMaestro", params: {}});
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