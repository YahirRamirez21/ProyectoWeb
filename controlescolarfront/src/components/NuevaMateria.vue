<template>
  <div class="NuevaMateria">
    <section class="contenedor">
      <h2 class="subtitulo">Datos de la Materia</h2>
      <article class="clasearticle">
        <br />
        <label for="clavemateria">Clave de la Materia</label> <br />
        <input type="text" name="clavemateria" id="clavemateria" v-model="materias.clavemateria" />
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
      <button @click.prevent="nuevaMateria()" class="botonesacciones">Nueva Materia</button>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";
export default {
  name: "NuevaMateria",
  components: {},
  data: function () {
    return {
      materias: [],
    };
  },
  methods: {
    nuevaMateria: async function () {
      let valorClave = document.getElementById("clavemateria").value;
      let valorNombre = document.getElementById("nombre").value;
      let creditos = document.getElementById("creditos").value;
      if (valorClave == 0 || valorNombre == 0 || creditos == 0) {
        alert("Complete los Campos")
        return;
      }
      let existeID = false;
      await axios
        .get(URL_DATOS + "/verificarmateria/" + valorClave, {})
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
        const res = await axios.post(URL_DATOS + "/materias/", {
          cla: this.materias.clavemateria,
          nom: this.materias.nombre,
          cre: this.materias.creditos,
        });
        console.log(res);
      } else {
        alert("Clave Repetida");
      }

    },
  },
};
</script>
