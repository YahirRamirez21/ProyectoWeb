<template>
    <div class="cargaVista">
        <h1>Carga</h1>
        <section class="seccion">
            <GruposCargaLista ></GruposCargaLista>
        </section>
        
    </div>    
</template>

<script>
    import GruposCargaLista from '../components/GruposCargaLista.vue';

    export default {
        name: "Carga",
        components: { GruposCargaLista },
        data: function() {
            return { }
        },
        methods: {}
    }
</script>
