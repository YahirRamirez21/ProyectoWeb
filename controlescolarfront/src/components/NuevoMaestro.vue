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
      <p id="mensaje"></p>

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
      let departamento = document.getElementById("departamento").value;
      let estatus = document.getElementById("estatus").value;

      console.log("Valor departamento"+departamento)
      if (valorClave == 0 || valorNombre == 0 || departamento == "" || estatus =="") {
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
        if(res.status==200){
          let mensaje=document.getElementById("mensaje");
          mensaje.textContent="Maestro Añadido con Éxito";
          console.log("Todo Correcto");
        }
        console.log(res);

      } else {
        alert("Clave Repetida");
        return;
      }




    }
  },
};
</script>
  
<style >

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.contenedorglobal {
    background-color: #adcdea;
    margin-top: -50px;
    height: 1400px;
}

div {
    margin-top: 50px;
    /*height: 50px;*/
}

.nav {
    width: 500px;
    margin: 0px auto;
    padding: 10px 0px;
}

.navseccion {
    background-color: #00276c;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
}


.navseccion>* {
    background-color: transparent;
    text-decoration: none;
    color: white;
    font-size: 20px;
}

/** */
/*AQUI AGREGE PARA LAS VENTANAS DE NUEVO Y EDITAR */
.botonesacciones {
    margin: 10px auto;
    background-color: #00276c;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    outline: none;
    padding: 10px 50px;
}

.botonesacciones:hover {
    background-color: rgb(0, 39, 108, .8);
    cursor: pointer;
}

.clasearticle {
    background-color: #014ba0;
    border-radius: 5px;
    font-size: 20px;
    margin: 0px auto;
    text-align: center;
    width: 500px;
    padding-bottom: 30px;
}

.clasearticle input {
    background: #afcdea;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 10px;
    height: 30px;
    text-align: center;
    width: 90%;
}

.clasearticle label {
    color: white;
    font-family: sans-serif;
}

.claseselect {
    background: #afcdea;
    margin: 10px 0px 10px 0px;
    width: 100px;
}

.contenedor {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    margin: 0 auto;
    width: 95%;
    height: 120vh;
}

.subtitulo {
    margin: 0px auto;
    margin-top: 50px;
    font-family: sans-serif;
}
</style>