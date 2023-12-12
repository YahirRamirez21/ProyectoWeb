<template>
  <div class="NuevoGrupo">
    <section class="contenedor">
      <h2 class="subtitulo">Datos del Grupo</h2>
      <article class="clasearticle">
        <br />
        <label for="clavegrupo">Clave del Grupo</label> <br />
        <input type="text" name="clavegrupo" id="clavegrupo" v-model="grupos.clavegrupo" />
        <br />
        <label for="clavemateria">Clave de la Materia</label> <br />
        <input type="text" name="clavemateria" id="clavemateria" v-model="grupos.clavemateria" maxlength="8" />
        <br />
        <label for="clavemaestro">Clave del Maestro</label> <br />
        <input type="text" name="clavemaestro" id="clavemaestro" v-model="grupos.clavemaestro" maxlength="11" />
        <br />
        <label for="limitealumnos">Limite de Alumnos</label> <br />
        <input type="text" name="limitealumnos" id="limitealumnos" v-model="grupos.limitealumnos" maxlength="11" />
        <br />
        <label for="inscritos">Inscritos</label> <br />
        <input type="text" name="inscritos" id="inscritos" v-model="grupos.inscritos" maxlength="11" />
        <br />
        <label for="horariolunes">Horario Lunes</label> <br />
        <input type="text" name="horariolunes" id="horariolunes" v-model="grupos.horariolunes" maxlength="11"/>
        <br />
        <label for="horariomartes">Horario Martes</label> <br />
        <input type="text" name="horariomartes" id="horariomartes" v-model="grupos.horariomartes" maxlength="11"/>
        <br />
        <label for="horariomiercoles">Horario Miercoles</label> <br />
        <input type="text" name="horariomiercoles" id="horariomiercoles" v-model="grupos.horariomiercoles" maxlength="11" />
        <br />
        <label for="horariojueves">Horario Jueves</label> <br />
        <input type="text" name="horariojueves" id="horariojueves" v-model="grupos.horariojueves" maxlength="11" />
        <br />
        <label for="horarioviernes">Horario Viernes</label> <br />
        <input type="text" name="horarioviernes" id="horarioviernes" v-model="grupos.horarioviernes" maxlength="11"/>
        <br />
      </article>

      <button @click.prevent="nuevoGrupo()" class="botonesacciones">
        Nuevo Grupo
      </button>
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
      let valorClave = document.getElementById("clavegrupo").value;
      let valorClaveM = document.getElementById("clavemateria").value;
      let valorClaveMaestro = document.getElementById("clavemaestro").value;
      let valorLimite = document.getElementById("limitealumnos").value;
      let valorInscritos = document.getElementById("inscritos").value;
      let valorHorarioLunes = document.getElementById("horariolunes").value;
      let valorHorarioMartes = document.getElementById("horariomartes").value;
      let valorHorarioMiercoles = document.getElementById("horariomiercoles").value;
      let valorHorarioJueves = document.getElementById("horariojueves").value;
      let valorHorarioViernes = document.getElementById("horarioviernes").value;

      if (valorClave == 0 || valorLimite == 0 || valorInscritos == 0 || valorClaveM == 0 || valorClaveMaestro == 0 || valorHorarioLunes == 0 || valorHorarioMartes == 0 || valorHorarioMiercoles == 0 || valorHorarioJueves == 0 || valorHorarioViernes == 0) {
        alert("Complete los Campos");
        return;
      }
      let existeID = false;
      let existeMaes = false;
      let existeMat = false;
      await axios
        .get(URL_DATOS + "/verificargrupo/" + valorClave, {})
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
      await axios
        .get(URL_DATOS + "/verificarmaestro/" + valorClaveMaestro, {})
        .then(function (response) {
          const c = response.data[0].count;
          if (c == 1) {
            existeMaes = true;
            console.log("clave repetida");
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      await axios
        .get(URL_DATOS + "/verificarmateria/" + valorClaveM, {})
        .then(function (response) {
          const c = response.data[0].count;
          if (c == 1) {
            existeMat = true;
            console.log("clave repetida");
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      if (existeMaes == false) {
        alert("Clave Maestro No Existe")
        return;
      }
      if (existeMat == false) {
        alert("Clave Materia No Existe")
        return;
      }
      if (existeID == false) {
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
      } else {
        alert("Clave Repetida");
      }
    },
  },
};

</script>
