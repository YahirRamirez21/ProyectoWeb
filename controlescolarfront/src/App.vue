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
            <router-view/>
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
        background-color: lightgray;
        margin-top: -50px;
        height: 100vh;
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


    .navseccion > * {
        background-color: transparent;
        text-decoration: none;
        color: white;
        font-size: 20px;
    }

</style>
