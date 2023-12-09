<template>
    <div>
        <h1>Carga</h1>
        <label for="ncontrol">No.Control</label>
        <input type="text" name="ncontrol" id="ncontrol">
        
        <section class="seccion">
            <GruposCargaLista class="grupos"></GruposCargaLista>
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

<style scoped>
    .grupos {
        width: 500px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
</style>