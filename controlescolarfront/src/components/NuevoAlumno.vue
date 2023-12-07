<template>
  <div class="NuevoAlumno">
    <section>
      <h2>Datos del Alumno - Nuevo</h2>
      <br />
      <label for="ncontrol">N.Control Alumno</label> <br />
      <input type="text" name="ncontrol" id="ncontrol" v-model="alumnos.ncontrol" />
      <br />
      <label for="nombre">Nombre del Alumno</label> <br />
      <input type="text" name="nombre" id="nombre" v-model="alumnos.nombre" />
      <br />
      <label for="carrera">Carrera del Alumno</label> <br />
      <input
        type="text"
        name="carrera"
        id="carrera"
        v-model="alumnos.carrera"
      /><br />
      <label for="estatus">Estatus del Alumno</label> <br />
      <input
        type="text"
        name="estatus"
        id="estatus"
        v-model="alumnos.estatus"
      />
      <br />
      <button @click.prevent="nuevoAlumno()">Nuevo Alumno</button>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';
export default {
  name: "NuevoAlumno",
  components: {},
  data: function () {
    return {
      alumnos: [],
    };
  },
  methods: {
    nuevoAlumno: async function(){
        const res = await axios.post(URL_DATOS + "/alumnos/", {
            ncon: this.alumnos.ncontrol,
            nom: this.alumnos.nombre,
            car: this.alumnos.carrera,
            est: this.alumnos.estatus,
        });
        console.log(res);
    }
  },
};
</script>
