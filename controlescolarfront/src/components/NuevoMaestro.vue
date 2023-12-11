<template>
  <div class="NuevoMaestro">
    <section class="contenedor">
      <h2 class="subtitulo">Datos del Maestro</h2>
      <article class="clasearticle">
        <br />
        <label for="clavemaestro">Clave del Maestro</label> <br />
        <input type="text" name="clavemaestro" id="clavemaestro" v-model="maestros.clavemaestro" maxlength="11" />
        <br />
        <label for="nombre">Nombre del Maestro</label> <br />
        <input type="text" name="nombre" id="nombre" v-model="maestros.nombre" />
        <br />
        <label for="departamento">Departamento del Maestro</label> <br />
        <!--<input type="text" name="departamento" id="departamento" v-model="maestros.departamento"  maxlength="11"/><br />-->
        <select class="claseselect" name="departamento" id="departamento" v-model="maestros.departamento">
          <!--<option value="" disabled>Seleccione Una Opcion</option>-->
          <option value="1" selected="true">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select><br>
        <label for="estatus">Estatus del maestro</label> <br />
        <!--<input type="text" name="estatus" id="estatus" v-model="maestros.estatus" maxlength="A" />-->
        <select class="claseselect" name="estatus" id="estatus" v-model="maestros.estatus">
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <br />
      </article>
      <button @click.prevent="nuevoMaestro()" class="botonesacciones">Nuevo Maestro</button>

    </section>

  </div>
</template>
  
<script>
import { URL_DATOS } from '../utils/constantes';
import axios from 'axios';
export default {
  name: "NuevoMaestro",
  components: {},
  data: function () {
    return {
      maestros: [],
    };
  },
  methods: {
    nuevoMaestro: async function () {
      let valorClave = document.getElementById("clavemaestro").value;
      let valorNombre = document.getElementById("nombre").value;
      if (valorClave == 0 || valorNombre == 0) {
        alert("Complete los Campos")
        return;
      }
      let existeID = false;
      await axios
        .get(URL_DATOS + "/verificarmaestro/" + valorClave, {})
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
        const res = await axios.post(URL_DATOS + "/maestros/", {
          cla: this.maestros.clavemaestro,
          nom: this.maestros.nombre,
          dep: this.maestros.departamento,
          est: this.maestros.estatus,
        });
        console.log(res);

      } else {
        alert("Clave Repetida");
        return;
      }




    }
  },
};
</script>
  
<style scoped></style>