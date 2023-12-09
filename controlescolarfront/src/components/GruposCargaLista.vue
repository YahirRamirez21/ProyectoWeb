<template>
  <div class="GruposCargaLista">
    <button @click.prevent="buscarCargaAlumno()">Buscar</button>
    <section v-for="item in gruposcarga">
      <article>
        <p>{{ item.clavegrupo }}</p>
        <p>{{ item.clavemateria }}</p>
        <p>{{ item.nombremateria }}</p>
        <p>{{ item.clavemaestro }}</p>
        <p>{{ item.nombremaestro }}</p>
        <p>{{ item.horario }}</p>
        <p>Cupos: {{ item.limite - item.inscritos }}</p>
        <a class="agg" href="#">+</a>
      </article>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "GruposCargaLista",
  components: {},
  props: {
    ncontrol: Number,
  },
  data: function () {
    return {
      gruposcarga: [],
    };
  },
  created() {
    this.traerGruposCarga();
  },
  methods: {
    traerGruposCarga: async function () {
        this.buscarCargaAlumno();
      let gc = [];
      await axios
        .get(URL_DATOS + "/carga")
        .then(function (response) {
          gc = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.gruposcarga = gc;
    },
    buscarCargaAlumno: async function () {
      let gc = [];
      await axios
        .get(URL_DATOS + "/carga/" + this.ncontrol)
        .then(function (response) {
          console.log("RESPONSE " + response.data[0]);
          gc = response.data[0];
          
        })
        .catch(function (error) {
          console.log(error);
          //console.log(alumnos)
        });
      this.gruposcarga = gc;
    },
  },
};
</script>

<style>
.agg {
  text-decoration: none;
  color: #000;
  font-size: 30px;
}
</style>
