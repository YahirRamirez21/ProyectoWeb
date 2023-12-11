<template>
  <div>
    <h1>Alumnos</h1>
    <a class="back" href="http://localhost:8080"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-left"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M5 12l6 6" />
        <path d="M5 12l6 -6" /></svg
    ></a>
    <AlumnoLista></AlumnoLista>

    <!-- <button>Añadir</button>
        <button @click.prevent="editarAlumno(id)">Modificar</button>
        <button>Eliminar</button> -->
  </div>
</template>

<script>
import AlumnoLista from "../components/AlumnosLista.vue";
export default {
  name: "Alumnos",
  components: { AlumnoLista },
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style>
h1 {
  font-size: 40px;
  font-family: sans-serif;
  margin-left: 140px;
  margin-top: -104px;
}

svg {
  position: absolute;
  right: 20px;
  top: 40px;
  width: 100px;
  text-decoration: none;
  color: black;
}
</style>
