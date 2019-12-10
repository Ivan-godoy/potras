<template>

    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
<!--            Aca esta el formulario de creacion de equipo-->
            <FormEquipo titulo="Creacion de Equipo"/>
        </vs-col>
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="3">
<!--            Aca esta el formulario de creacion de ciudad-->
            <FormCiudad titulo="Creacion de ciudad"/>
        </vs-col>
    </vs-row>
</template>

<script>
    import FormEquipo from "./FormEstadio";
    import FormCiudad from "./FormCiudad";
    export default {
        name: "FormularioEstadio",
        components:{
            FormEquipo,
            FormCiudad
        },
    }
</script>

<style scoped lang="stylus">
    .cardx
        margin 15px
    .default-input
        .inputx
            margin 15px
            margin-top 30px
    .contenedor
        display flex
        flex-direction row
    .tarjetas
        padding 30px
</style>
