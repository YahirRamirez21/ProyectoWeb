<template>
    <div class="NuevoMaestro">
        <section>
          <h2>Datos del Maestro</h2>
          <br />
          <label for="clavemaestro">Clave del Maestro</label> <br />
          <input type="text" name="clavemaestro" id="clavemaestro" v-model="maestros.clavemaestro" />
          <br />
          <label for="nombre">Nombre del Maestro</label> <br />
          <input type="text" name="nombre" id="nombre" v-model="maestros.nombre" />
          <br />
          <label for="departamento">Departamento del Maestro</label> <br />
          <input
            type="text"
            name="departamento"
            id="departamento"
            v-model="maestros.departamento"
          /><br />
          <label for="estatus">Estatus del maestro</label> <br />
          <input type="text" name="estatus" id="estatus" v-model="maestros.estatus" />
          <br />
          <button @click.prevent="nuevoMaestro()">Nuevo Maestro</button>
        </section>
      </div>
  </template>
  
  <script>
  import { URL_DATOS } from '../utils/constantes';
  import axios from 'axios';
  export default {
    name: "NuevoMaestro",
    components: {},
    data: function () {
      return {
        maestros: [],
      };
    },
    methods: {
      nuevoMaestro: async function(){
          const res = await axios.post(URL_DATOS + "/maestros/", {
              cla: this.maestros.clavemaestro,
              nom: this.maestros.nombre,
              dep: this.maestros.departamento,
              est: this.maestros.estatus,
          });
          console.log(res);
      }
    },
  };
  </script>
  