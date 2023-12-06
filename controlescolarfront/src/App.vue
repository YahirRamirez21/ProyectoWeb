<template>
    <div id="app">
        <nav class="nav">
            <router-link class="enlace" to="/maestros">Maestros</router-link>
            <router-link class="enlace" to="/maestros">Alumnos</router-link>
            <router-link class="enlace" to="/maestros">Grupos</router-link>
            <router-link class="enlace" to="/maestros">Materias</router-link>
            <router-link class="enlace" to="/maestros">Carga</router-link>
         </nav>
        <router-view/>
    </div>
</template>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: lightgray;
    }

    div {
        margin-top: 30px;
        /*height: 50px;*/
    }

    .nav {
        border-radius: 10px;
        width: 500px;
        margin: 0 auto;
        background-color: white;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nav > * {
        background-color: transparent;
        text-decoration: none;
        color: black;
        font-size: 20px;
    }

</style>
