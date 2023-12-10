<template>
    <div class="MaestrosLista">
        <!-- <button @click.prevent="traerMaestros()">Maestros</button> -->
        <section class="contenedor">
            <article class="cajaboton">
                <button class="botonNuevo" @click.prevent="nuevoMaestro()">Nuevo</button>
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
                                <button class="botonAccion" @click.prevent="editarMaestro(maes.clavemaestro)">Editar</button>
                                <button class="botonAccion" @click.prevent="eliminarMaestro(maes.clavemaestro)">Eliminar</button>
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

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .cajaboton {
        width: 95%;
        background-color: white;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100vh;
        border-radius: 10px;
    }

    .botonNuevo {
        margin: 50px auto;
        padding: 10px 50px;
        outline: none;
        border: none;
        background-color: #014ba0;
        color: white;
        border-radius: 5px;
        font-size: 20px;

    }

    .botonNuevo:hover {
        cursor: pointer;
        background-color: #00276c;
        transition: 0.3s;
    }

    table {
        width: 90%;
        margin: 0 auto;
        border-radius: 10px;
        padding: 10px;
        border-collapse: collapse;
        background-color: #5b7dcf;
    }

    thead {
        background-color: #014ba0;
        color: white;
    }

    th:nth-child(1){
        border-radius: 10px 0px 0px 0px;
    }
    th:last-child{
        border-radius: 0px 10px 0px 0px;
    }

    th, td {
        text-align: center;
        padding: 20px;
    }

    tr:nth-child(even) {
        background-color: #96b3ff;
    }

    .botonAccion {
        padding: 5px 20px;
        color: white;
        outline: none;
        border: none;
        background-color: #00276c;
        margin-right: 2px;
        border-radius: 5px;
    }

    .botonAccion:hover {
        cursor: pointer;
        background-color: rgb(0, 39, 108, .7);
    }
</style>