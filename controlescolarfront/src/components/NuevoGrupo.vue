<template>
  <div class="NuevoGrupo">
    <section>
      <h2>Datos del Grupo</h2>
      <br />
      <label for="clavegrupo">Clave del Grupo</label> <br />
      <input
        type="text"
        name="clavegrupo"
        id="clavegrupo"
        v-model="grupos.clavegrupo"
      />
      <br />
      <label for="clavemateria">Clave de la Materia</label> <br />
      <input
        type="text"
        name="clavemateria"
        id="clavemateria"
        v-model="grupos.clavemateria"
      />
      <br />
      <label for="clavemaestro">Clave del Maestro</label> <br />
      <input
        type="text"
        name="clavemaestro"
        id="clavemaestro"
        v-model="grupos.clavemaestro"
      />
      <br />
      <label for="limitealumnos">Limite de Alumnos</label> <br />
      <input
        type="text"
        name="limitealumnos"
        id="limitealumnos"
        v-model="grupos.limitealumnos"
      />
      <br />
      <label for="inscritos">Inscritos</label> <br />
      <input
        type="text"
        name="inscritos"
        id="inscritos"
        v-model="grupos.inscritos"
      />
      <br />
      <label for="horariolunes">Horario Lunes</label> <br />
      <input
        type="text"
        name="horariolunes"
        id="horariolunes"
        v-model="grupos.horariolunes"
      />
      <br />
      <label for="horariomartes">Horario Martes</label> <br />
      <input
        type="text"
        name="horariomartes"
        id="horariomartes"
        v-model="grupos.horariomartes"
      />
      <br />
      <label for="horariomiercoles">Horario Miercoles</label> <br />
      <input
        type="text"
        name="horariomiercoles"
        id="horariomiercoles"
        v-model="grupos.horariomiercoles"
      />
      <br />
      <label for="horariojueves">Horario Jueves</label> <br />
      <input
        type="text"
        name="horariojueves"
        id="horariojueves"
        v-model="grupos.horariojueves"
      />
      <br />
      <label for="horarioviernes">Horario Viernes</label> <br />
      <input
        type="text"
        name="horarioviernes"
        id="horarioviernes"
        v-model="grupos.horarioviernes"
      />
      <br />
      <button @click.prevent="nuevoGrupo()">Nuevo Grupo</button>
    </section>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes";
import axios from "axios";
export default {
  name: "NuevoGrupo",
  components: {},
  data: function () {
    return {
      grupos: [],
    };
  },
  methods: {
    nuevoGrupo: async function () {
      const res = await axios.post(URL_DATOS + "/grupos/", {
        clg: this.grupos.clavegrupo,
        claMat: this.grupos.clavemateria,
        claMto: this.grupos.clavemaestro,
        lim: this.grupos.limitealumnos,
        ins: this.grupos.inscritos,
        horL: this.grupos.horariolunes,
        horM: this.grupos.horariomartes,
        horMi: this.grupos.horariomiercoles,
        horJ: this.grupos.horariojueves,
        horV: this.grupos.horarioviernes,
      });
      console.log(res);
    },
  },
};
</script>
