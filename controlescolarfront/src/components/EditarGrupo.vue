<template>
    <div class="EditarGrupo">
      <section>
        <h2>Datos del Grupo</h2>
        <br />
        <label for="clavemateria">Clave de la Materia</label> <br />
        <input type="text" name="clavemateria" id="clavemateria" v-model="grupos.clavemateria" />
        <br />
        <label for="clavemaestro">Clave del Maestro</label> <br />
        <input type="text" name="clavemaestro" id="clavemaestro" v-model="grupos.clavemaestro" />
        <br />
        <label for="limitealumnos">Limite de Alumnos</label> <br />
        <input type="text" name="limitealumnos" id="limitealumnos" v-model="grupos.limitealumnos" />
        <br />
        <label for="inscritos">Inscritos</label> <br />
        <input type="text" name="inscritos" id="inscritos" v-model="grupos.inscritos" />
        <br />
        <label for="horariolunes">Horario Lunes</label> <br />
        <input type="text" name="horariolunes" id="horariolunes" v-model="grupos.horariolunes" />
        <br />
        <label for="horariomartes">Horario Martes</label> <br />
        <input type="text" name="horariomartes" id="horariomartes" v-model="grupos.horariomartes" />
        <br />
        <label for="horariomiercoles">Horario Miercoles</label> <br />
        <input type="text" name="horariomiercoles" id="horariomiercoles" v-model="grupos.horariomiercoles" />
        <br />
        <label for="horariojueves">Horario Jueves</label> <br />
        <input type="text" name="horariojueves" id="horariojueves" v-model="grupos.horariojueves" />
        <br />
        <label for="horarioviernes">Horario Viernes</label> <br />
        <input type="text" name="horarioviernes" id="horarioviernes" v-model="grupos.horarioviernes" />
        <br />
        <button @click.prevent="actualizarGrupo()">Actualizar Grupo</button>
      </section>
    </div>
  </template>
  
  <script>
  import { URL_DATOS } from "../utils/constantes";
  import axios from "axios";
  
  export default {
    name: "EditarGrupo",
    components: {},
    props: {
      clavegrupo: Number,
    },
    data: function () {
      return {
        grupos: [],
      };
    },
    created() {
      this.traerDetalle();
    },
    methods: {
      traerDetalle: async function () {
        let g = [];
        await axios
          .get(URL_DATOS + "/grupos/" + this.clavegrupo)
          .then(function (response) {
            //console.log(response.data[0])
            g = response.data[0];
          })
          .catch(function (error) {
            console.log(error);
            //console.log(alumnos)
          });
        this.grupos = g;
      },
       actualizarGrupo: async function () {
          const res = await axios.put(URL_DATOS + "/grupos/" + this.clavegrupo, {
          // id: this.alumnos.ncontrol,
          claMat: this.grupos.clavemateria,
          claMaes: this.grupos.clavemaestro,
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
  
  <style>
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
  }
  
  </style>
  