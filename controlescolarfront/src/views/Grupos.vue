<template>
  <div>
    <h1>Grupos</h1>
    <a class="back" href="http://localhost:8080/Principal"
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
    <GruposLista></GruposLista>
  </div>
</template>

<script>
import GruposLista from "../components/GruposLista.vue";

export default {
  name: "Grupos",
  components: { GruposLista },
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style></style>
