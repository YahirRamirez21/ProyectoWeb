<template>
  <div class="EditarMaestro">
    <section class="contenedor">
      <h2 class="subtitulo">Datos del Maestro</h2>
      <article class="clasearticle">
        <br>
        <label for="nombre">Nombre del Maestro</label> <br />
        <input type="text" name="nombre" id="nombre" v-model="maestros.nombre" />
        <br />
        <label for="departamento">Departamento del Maestro</label> <br />
        <!--<input type="text" name="departamento" id="departamento" v-model="maestros.departamento" /><br />-->
        <select class="claseselect" name="departamento" id="departamento" v-model="maestros.departamento">
          <option value="1" selected="true">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select><br>
        <label for="estatus">Estatus del maestro</label> <br />
        <!--<input type="text" name="estatus" id="estatus" v-model="maestros.estatus" />-->
        <select class="claseselect" name="estatus" id="estatus" v-model="maestros.estatus">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <br />
      </article>
      <br />
      <button @click.prevent="actualizarMaestro()" class="botonesacciones">Actualizar Maestro</button>
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
      let valorNombre = document.getElementById("nombre").value;
      let departamento = document.getElementById("departamento").value;
      let estatus = document.getElementById("estatus").value;

      console.log("Valor departamento"+departamento)
      if (valorNombre == "" || departamento == "" || estatus =="") {
        alert("Complete los Campos")
        return;
      }
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