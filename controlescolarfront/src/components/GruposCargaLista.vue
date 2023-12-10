<template>
  <div class="GruposCargaLista">
    <label>Busqueda de Carga por alumno</label><br>
    <label for="ncontrol">No.Control</label>
    <input type="text" name="ncontrol" id="ncontrol">
    <button @click.prevent="buscarCargaAlumno()">Buscar</button><br>
    <div id="contenedor">
      <section class="consulta">
      <section v-for="itemc in cargaalum" >
      <article>
        <p>Clave Grupo: {{ itemc.clavegrupo }}</p>
        <p>Clave Materia: {{ itemc.clavemateria }}</p>
        <p>N Control: {{ itemc.ncontrol }}</p>
      </article>
    </section>
    </section>
    
    <section class="grupos">
      <section v-for="item in gruposcarga" >
      <article>
        <p>{{ item.clavegrupo }}</p>
        <p>{{ item.clavemateria }}</p>
        <p>{{ item.nombremateria }}</p>
        <p>{{ item.clavemaestro }}</p>
        <p>{{ item.nombremaestro }}</p>
        <p>{{ item.horario }}</p>
        <p>Cupos: {{ item.limite - item.inscritos }}</p>
        <a class="agg" href="#" @click.prevent="seleccionarGrupo(item)">+</a>
      </article>
    </section>
    </section>

    <section class="carga">
      <h3>Aqui realizar carga</h3>
      <label for="ncontrol">Ingresa No. Control</label>
      <input type="text" name="ncontrol1" id="ncontrol1">
      <button @click.prevent="guardarCarga()">Guardar Carga</button>
      

    </section>
    </div>
    
    
    
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
      cargaalum:[],
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
      await axios
        .get(URL_DATOS + "/carga/"+numcon)
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
    seleccionarGrupo: function(grupo){

    },
    guardarCarga: async function(){
      const res = await axios.post(URL_DATOS+"/carga",{
        
      })
    }
  },
};
</script>

<style scoped >
section{
  border: 1px solid red;
}
.agg {
  text-decoration: none;
  color: #000;
  font-size: 30px;
}
.carga{
  width: 400px;
}
.consulta{
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
#contenedor{
  display: flex;
}

</style>
