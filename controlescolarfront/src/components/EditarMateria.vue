<template>
  <div class="EditarMateria">
    <section class="contenedor">
      <h2 class="subtitulo">Datos de la Materia</h2>
      <article class="clasearticle">
        <br />
        <label for="nombre">Nombre de la Materia</label> <br />
        <input type="text" name="nombre" id="nombre" v-model="materias.nombre" />
        <br />
        <label for="creditos">Creditos</label> <br />
        <input type="text" name="creditos" id="creditos" v-model="materias.creditos" /><br />
      </article>
      <button @click.prevent="actualizarMateria()" class="botonesacciones">Actualizar Materia</button>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";

export default {
  name: "EditarMateria",
  components: {},
  props: {
    clavemateria: Number,
  },
  data: function () { 
    return {
      materias: [],
    };
  },
  created() {
    this.traerDetalle();
  },
  methods: {
    traerDetalle: async function () {
      let m = [];
      await axios
        .get(URL_DATOS + "/materia/" + this.clavemateria)
        .then(function (response) {
          //console.log(response.data[0])
          m = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
          //console.log(alumnos)
        });
      this.materias = m;
    },
    actualizarMateria: async function () {
      let valorNombre = document.getElementById("nombre").value;
      if ( valorNombre == 0) {
        alert("Complete los Campos")
        return;
      }
      const res = await axios.put(URL_DATOS + "/materias/" + this.clavemateria, {
        // id: this.alumnos.ncontrol,
        nom: this.materias.nombre,
        cre: this.materias.creditos,
      });
      console.log(res);
    },
  },
};
</script>