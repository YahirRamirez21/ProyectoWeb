<template>
  <div id="app">
    <section class="contenedorglobal">
      <nav class="nav">
        <article class="navseccion">
          <router-link class="enlace" to="/Principal">Principal</router-link>
          <router-link class="enlace" to="/maestros">Maestros</router-link>
          <router-link class="enlace" to="/alumnos">Alumnos</router-link>
          <router-link class="enlace" to="/grupos">Grupos</router-link>
          <router-link class="enlace" to="/materias">Materias</router-link>
          <router-link class="enlace" to="/carga">Carga</router-link>
        </article>
      </nav>
      <router-view />
    </section>
    
  </div>
</template>

<style>
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
  width: 600px;
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

.navseccion > * {
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
  background-color: rgb(0, 39, 108, 0.8);
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


