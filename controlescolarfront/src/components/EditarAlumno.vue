<template>
  <div class="EditarAlumno">
    <section class="contenedor">
      <h2 class="subtitulo">Datos del Alumno</h2>
      <article class="clasearticle">
        <br />
        <label for="nombre">Nombre del Alumno</label> <br />
        <input type="text" name="nombre" id="nombre" v-model="alumnos.nombre" />
        <br />
        <label for="carrera">Carrera del Alumno</label> <br />
        <input type="text" name="carrera" id="carrera" v-model="alumnos.carrera" /><br />
        <label for="estatus">Estatus del Alumno</label> <br />
        <input type="text" name="estatus" id="estatus" v-model="alumnos.estatus" />
        <br />
      </article>
      <button @click.prevent="actualizarAlumno()" class="botonesacciones">Actualizar Alumno</button>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";

export default {
  name: "EditarAlumno",
  components: {},
  props: {
    ncontrol: Number,
  },
  data: function () {
    return {
      alumnos: [],
    };
  },
  created() {
    this.traerDetalle();
  },
  methods: {
    traerDetalle: async function () {
      let a = [];
      await axios
        .get(URL_DATOS + "/alumnos/" + this.ncontrol)
        .then(function (response) {
          //console.log(response.data[0])
          a = response.data[0];
        })
        .catch(function (error) {
          console.log(error);
          //console.log(alumnos)
        });
      this.alumnos = a;
    },
    actualizarAlumno: async function () {
      let valorNombre = document.getElementById("nombre").value;
      let valorCarrera = document.getElementById("carrera").value;
      if (valorNombre == 0 || valorCarrera==0) {
        alert("Complete los Campos")
        return;
      }
      const res = await axios.put(URL_DATOS + "/alumnos/" + this.ncontrol, {
        // id: this.alumnos.ncontrol,
        nom: this.alumnos.nombre,
        car: this.alumnos.carrera,
        est: this.alumnos.estatus,
      });
      console.log(res);
    },
  },
};
</script>

<style scoped>
/** 
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 300px;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  outline: none;
  border: 1px solid black;
}*/
</style>
