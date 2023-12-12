<template>
    <div id="app">
        <section class="contenedorglobal">
            <nav class="nav">
                <article class="navseccion">
                    <router-link class="enlace" to="/maestros">Maestros</router-link>
                    <router-link class="enlace" to="/alumnos">Alumnos</router-link>
                    <router-link class="enlace" to="/grupos">Grupos</router-link>
                    <router-link class="enlace" to="/materias">Materias</router-link>
                    <router-link class="enlace" to="/carga">Carga</router-link>
                </article>

            </nav>
            <router-view />
            <section class="contenedor" id="contInicio">
                <section id="contenedorflex">
                    <img src="../src/assets/panelcontrol.png" alt="Panel Control Alumnos" id="imagenPanelControl">
                    <article class="seccion_article01">
                        SISTEMA DE CONTROL ESCOLAR
                    </article>
                    
                </section>
                <article class="cont_article01">
                        ¡Bienvenidos!
                </article>
                <img src="../src/assets/menos.png" alt="Linea" id="lineaabajo">

            </section>
        </section>
        <footer>
            &copy; 2023 Jesus Yahir Ramirez Sanchez <br/>
            Ximena Guadalupe Lopez Hernandez
        </footer>
    </div>
</template>

<style scoped>

/**PANTALLA DE INICIO */
footer{
    margin-top: -500px;
    margin-right: 43px;
    text-align: right;
    color: #00276c;
}
.seccion_article01 {
    background: #00276c;
    border-radius: 10px;
    color: white;
    width: 100%;
    height: 96%;
    text-align: center;
    font-size: 70px;
    font-family: Georgia;
    font-weight: bold;
    padding-top: 40px ;
    
}

.cont_article01 {
    color: #014ba0;/**014ba0 */
    margin: 0px auto;
    margin-top: 80px;
    font-size: 70px;
    font-weight: bold;
}

#contInicio{
    margin-top: 48px;
}

#contenedorflex{
    display: flex;
    align-items: center;
    margin-top: 100px;
    margin-left: 120px;
    margin-right:120px ;
    height: 50%;
}
#imagenPanelControl {
    width: 400px;
    margin-right: 50px;
}
#lineaabajo{
    width: 150px;
    margin: 0px auto;
    margin-top: -55px;

}

</style>
