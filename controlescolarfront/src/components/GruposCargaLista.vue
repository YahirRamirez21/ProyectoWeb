<template>
  <div class="GruposCargaLista">
    <label>Busqueda de Carga por alumno</label><br />
    <label for="ncontrol">No.Control</label>
    <input type="text" name="ncontrol" id="ncontrol" required />
    <button id="buscarCargaAlumno" @click.prevent="buscarCargaAlumno()">
      Buscar</button
    ><br />
    <div id="contenedor">
      <section class="consulta">
        <section v-for="itemc in cargaalum">
          <article>
            <p>Clave Grupo: {{ itemc.clavegrupo }}</p>
            <p>Clave Materia: {{ itemc.clavemateria }}</p>
            <p>N Control: {{ itemc.ncontrol }}</p>
          </article>
        </section>
      </section>

      <section class="grupos">
        <section v-for="item in gruposcarga">
          <article>
            <p>{{ item.clavegrupo }}</p>
            <p>{{ item.clavemateria }}</p>
            <p>{{ item.nombremateria }}</p>
            <p>{{ item.clavemaestro }}</p>
            <p>{{ item.nombremaestro }}</p>
            <p>{{ item.horario }}</p>
            <p id="cupos">cupos:{{ item.limite - item.inscritos }}</p>
            <a class="agg" href="#" @click.prevent="seleccionarGrupo(item)"
              >+</a
            >
          </article>
        </section>
      </section>
    </div>
    <button @click.prevent="guardarCarga()">Guardar Carga</button>
  </div>
</template>

<script>
import { URL_DATOS } from "../utils/constantes.js";
import axios from "axios";

export default {
  name: "GruposCargaLista",
  components: {},
  props: {
    ncontrol: Number,
  },
  data: function () {
    return {
      gruposcarga: [],
      cargaalum: [],
    };
  },
  created() {
    this.traerGruposCarga();
    //this.buscarCargaAlumno();
  },
  methods: {
    traerGruposCarga: async function () {
      let gc = [];
      await axios
        .get(URL_DATOS + "/carga")
        .then(function (response) {
          gc = response.data;
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.gruposcarga = gc;
    },
    buscarCargaAlumno: async function () {
      let ca = [];
      let numcon = document.getElementById("ncontrol").value;
      if(numcon.length === 0){
        alert("Ingrese numero de control");
        return;
      }
      await axios
        .get(URL_DATOS + "/carga/" + numcon)
        .then(function (response) {
          console.log("RESPONSE " + response);
          ca = response.data;
        })
        .catch(function (error) {
          console.log(error);
          //console.log(alumnos)
        });
      this.cargaalum = ca;
    },
    seleccionarGrupo: async function (grupos) {
      //console.log(grupo.clavemateria);
      let numcon = document.getElementById("ncontrol").value;
        if((grupos.limite - grupos.inscritos)== 0) {
        console.log(this.gruposcarga.limite - this.gruposcarga.inscritos);
        alert('Grupo agotado');
        return;
      }
      const res = await axios.post(URL_DATOS + "/carga", { ncon : numcon, clam: grupos.clavemateria, clag: grupos.clavegrupo });
      const res2 = await axios.put(URL_DATOS + "/gruposcarga/"+grupos.clavegrupo, {});
      this.buscarCargaAlumno();
      this.traerGruposCarga();
    },
    guardarCarga: async function () {
      
    },
  },
};
</script>

<style scoped>
section {
  border: 1px solid red;
}
.agg {
  text-decoration: none;
  color: #000;
  font-size: 30px;
}
.carga {
  width: 400px;
}
.consulta {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-right: 15px;
}
.grupos {
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-right: 15px;
}
#contenedor {
  display: flex;
}
</style>
