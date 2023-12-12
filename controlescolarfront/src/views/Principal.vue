<template>
  <div>
    <section class="contenedor contenedor2" id="contInicio">
      <section id="contenedorflex">
        <img
          src="../assets/panelcontrol.png"
          alt="Panel Control Alumnos"
          id="imagenPanelControl"
        />
        <article class="seccion_article01">SISTEMA DE CONTROL ESCOLAR</article>
      </section>
      <article class="cont_article01">¡Bienvenidos!</article>
      <img src="../assets/menos.png" alt="Linea" id="lineaabajo" />
    </section>
    <footer>
        &copy; 2023 Jesus Yahir Ramirez Sanchez <br />
        Ximena Guadalupe Lopez Hernandez
      </footer>
  </div>
</template>

<style scoped>
/**PANTALLA DE INICIO */
footer {
  margin-top: 20px;
  margin-right: 50px;
  text-align: right;
  color: #00276c;
}
.seccion_article01 {
  background: #00276c;
  border-radius: 10px;
  color: white;
  width: 100%;
  height: 80%;
  text-align: center;
  font-size: 70px;
  font-family: Georgia;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cont_article01 {
  color: #014ba0; /**014ba0 */
  margin: 0px auto;
  margin-top: 70px;
  font-size: 90px;
  font-weight: bold;
}

#contInicio {
  margin-top: 48px;
}

#contenedorflex {
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-left: 150px;
  margin-right: 150px;
  height: 40%;
}
#imagenPanelControl {
  width: 420px;
  margin-right: 50px;
}
#lineaabajo {
  width: 150px;
  margin: 0px auto;
  margin-top: -55px;
}
</style>
