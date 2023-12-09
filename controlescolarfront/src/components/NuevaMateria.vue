<template>
  <div class="NuevaMateria">
    <section>
      <h2>Datos de la Materia</h2>
      <br />
      <label for="clavemateria">Clave de la Materia</label> <br />
      <input type="text" name="clavemateria" id="clavemateria" v-model="materias.clavemateria" />
      <br />
      <label for="nombre">Nombre de la Materia</label> <br />
      <input type="text" name="nombre" id="nombre" v-model="materias.nombre" />
      <br />
      <label for="creditos">Creditos</label> <br />
      <input
        type="text"
        name="creditos"
        id="creditos"
        v-model="materias.creditos"
      /><br />
      <button @click.prevent="nuevaMateria()">Nueva Materia</button>
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
      const res = await axios.post(URL_DATOS + "/materias/", {
        cla: this.materias.clavemateria,
        nom: this.materias.nombre,
        cre: this.materias.creditos,
      });
      console.log(res);
    },
  },
};
</script>
