<template>
    <div class="GruposLista">
        <!-- <button @click.prevent="traerGrupos()">Grupos</button> -->
        <section class="contenedor">
            <article class="cajaboton">
                <button class="botonNuevo" @click.prevent="nuevoGrupo()">Nuevo</button>
                <table>
                    <thead>
                        <tr>
                            <th>Clave Grupo</th>
                            <th>Clave Materia</th>
                            <th>Clave Maestro</th>
                            <th>Limite Alumnos</th>
                            <th>Inscritos</th>
                            <th>Horario Lunes</th>
                            <th>Horario Martes</th>
                            <th>Horario Miercoles</th>
                            <th>Horario Jueves</th>
                            <th>Horario viernes</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="grp in grupos" :key="grp.id">
                            <td>{{ grp.clavegrupo }}</td>
                            <td>{{ grp.clavemateria }}</td>
                            <td>{{ grp.clavemaestro }}</td>
                            <td>{{ grp.limitealumnos }}</td>
                            <td>{{ grp.inscritos }}</td>
                            <td>{{ grp.horariolunes }}</td>
                            <td>{{ grp.horariomartes }}</td>
                            <td>{{ grp.horariomiercoles }}</td>
                            <td>{{ grp.horariojueves }}</td>
                            <td>{{ grp.horarioviernes }}</td>
                            <td>
                                <button class="botonAccion" @click.prevent="editarGrupo(grp.clavegrupo)">Editar</button>
                                <button class="botonAccion" @click.prevent="eliminarGrupo(grp.clavegrupo)">Eliminar</button>
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
        name: "GruposLista",
        components: { },
        data: function() {
            return {
                grupos: [],
            }
        },
        created() {
            this.traerGrupos();
        },
        methods: {
            traerGrupos: async function(){
                let g = [];
                await axios.get(URL_DATOS+'/grupos')
                .then(function(response){
                    g = response.data;
                    console.log(response)
                }).catch(function(error){
                    console.log(error)
                });
                this.grupos = g;
            },
            editarGrupo: function(clavegrupo) {
                this.$router.push({name: "editarGrupo", params: {clavegrupo: clavegrupo}});
            },
            eliminarGrupo: async function(clavegrupo) {
                await axios.delete(URL_DATOS+"/grupos/"+clavegrupo); 
                this.traerGrupos();
            },
            nuevoGrupo: function(){
                this.$router.push({name: "nuevoGrupo", params: {}});
            }
        }
    }
</script>