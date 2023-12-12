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
        <select class="claseselect" name="creditos" id="creditos" v-model="materias.creditos">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
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
      let creditos = document.getElementById("creditos").value;
      if (valorNombre == 0 || creditos == 0) {
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