<template>    
    <div class="EditarMaestro">
        <section>
          <h2>Datos del Maestro</h2>
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
          <button @click.prevent="actualizarMaestro()">Actualizar Maestro</button>
        </section>
      </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";

export default {
  name: "EditarMaestro",
  components: {},
  props: {
    clavemaestro: Number,
  },
  data: function () {
    return {
      maestros: [],
    };
  },
  created() {
    this.traerDetalle();
  },
  methods: {
    traerDetalle: async function () {
      let m = [];
      await axios
        .get(URL_DATOS + "/maestros/" + this.clavemaestro)
        .then(function (response) {
          //console.log(response.data[0])
          m = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
          //console.log(alumnos)
        });
      this.maestros = m;
    },
    actualizarMaestro: async function () {
        const res = await axios.put(URL_DATOS + "/maestros/" + this.clavemaestro, {
        // id: this.alumnos.ncontrol,
        nom: this.maestros.nombre,
        dep: this.maestros.departamento,
        est: this.maestros.estatus,
      });
      console.log(res);
    },
  },
};
</script>