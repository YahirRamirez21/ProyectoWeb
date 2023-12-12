<template>
  <div class="NuevoAlumno">
    <section class="contenedor">
      <h2 class="subtitulo">Datos del Alumno - Nuevo</h2>
      <article class="clasearticle">
        <br />
        <label for="ncontrol">N.Control Alumno</label> <br />
        <input type="text" name="ncontrol" id="ncontrol" v-model="alumnos.ncontrol" />
        <br />
        <label for="nombre">Nombre del Alumno</label> <br />
        <input type="text" name="nombre" id="nombre" v-model="alumnos.nombre" />
        <br />
        <label for="carrera">Carrera del Alumno</label> <br />
        <input type="text" name="carrera" id="carrera" v-model="alumnos.carrera" /><br />
        <label for="estatus">Estatus del Alumno</label> <br />
        <select class="claseselect" name="estatus" id="estatus" v-model="alumnos.estatus">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <br />
      </article>
      <button @click.prevent="nuevoAlumno()" class="botonesacciones">Nuevo Alumno</button>
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
    nuevoAlumno: async function () {
      let valorNControl = document.getElementById("ncontrol").value;
      let valorNombre = document.getElementById("nombre").value;
      let valorCarrera = document.getElementById("carrera").value;
      let valorEstatus = document.getElementById("estatus").value;
      if (valorNControl == 0 || valorNombre == 0 || valorCarrera == 0 || valorEstatus == "") {
        alert("Complete los Campos")
        return;
      }
      let existeID = false;
      await axios
        .get(URL_DATOS + "/verificaralumno/" + valorNControl, {})
        .then(function (response) {
          const c = response.data[0].count;
          if (c == 1) {
            existeID = true;
            console.log("clave repetida");
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
   
      if (existeID == false) {
        const res = await axios.post(URL_DATOS + "/alumnos/", {
          ncon: this.alumnos.ncontrol,
          nom: this.alumnos.nombre,
          car: this.alumnos.carrera,
          est: this.alumnos.estatus,
        });
        console.log(res);
      } else {
        alert("Numero de Control ya registrado");
        return;
      }

    }
  },
};
</script>
