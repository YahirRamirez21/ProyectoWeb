<template>
  <div class="GruposCargaLista">
    <section class="buscar">
      <!-- <label>Busqueda de Carga por alumno</label><br /> -->
      <article class="buscar__article">
        <label for="ncontrol">No.Control</label>
        <article class="articleBuscar">
          <input type="text" name="ncontrol" id="ncontrol" required />
          <button id="buscarCargaAlumno" @click.prevent="buscarCargaAlumno()">
            Buscar</button
          ><br />
        </article>
      </article>
    </section>
    <section class="encabezados">
      <h2>Grupos Cargados por el alumno</h2>
      <h2 class="heading">Grupos disponibles</h2>
    </section>
    <div id="contenedor">
      
      <section class="consulta">
        <section v-for="itemc in cargaalum">
          <article class="card">
            <p>Clave Grupo: {{ itemc.clavegrupo }}</p>
            <p>Clave Materia: {{ itemc.clavemateria }}</p>
            <p>N Control: {{ itemc.ncontrol }}</p>
          </article>
        </section>
      </section>

      <section class="grupos">
        <section v-for="item in gruposcarga">
          <article class="card">
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
      if (numcon.length === 0) {
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
      if (grupos.limite - grupos.inscritos == 0) {
        console.log(this.gruposcarga.limite - this.gruposcarga.inscritos);
        alert("Grupo agotado");
        return;
      }
      const res = await axios.post(URL_DATOS + "/carga", {
        ncon: numcon,
        clam: grupos.clavemateria,
        clag: grupos.clavegrupo,
      });
      const res2 = await axios.put(
        URL_DATOS + "/gruposcarga/" + grupos.clavegrupo,
        {}
      );
      this.buscarCargaAlumno();
      this.traerGruposCarga();
    },
    guardarCarga: async function () {},
  },
};
</script>

<style scoped>
* {
  font-family: sans-serif;
}

.encabezados {
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 230px;
  margin-bottom: 10px;
}

.heading {
  margin-right: -300px;
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
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 15px;
  margin-top: 30px;
  height: 90%;
  border-radius: 10px;
  background-color: #adcdea;
  padding: 10px;
}
.grupos {
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-right: 15px;
  margin-top: 30px;
  background-color: #adcdea;
  height: 90%;
  border-radius: 10px;
  padding: 10px;
}
#contenedor {
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 95%;
  border-radius: 10px;
  margin: 0 auto;
  background-color: #fff;
  height: 700px;
}

.buscar {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.buscar__article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}
.buscar__article label{
  margin-bottom: 10px;
  margin-right: 20px;
  font-size: 20px;
}

.buscar__article input{
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 10px;
  font-size: 20px;
}
.buscar__article button {
  border: none;
  border-radius: 5px;
  background-color: #014ba0;
  font-size: 20px;
  color: #fff;
  padding: 5px 15px;
}

.buscar__article button:hover {
  cursor: pointer;
  background-color: rgb(1, 75, 160, .8);
}
.articleBuscar {
  display: flex;
}

.card {
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px;
}


</style>
