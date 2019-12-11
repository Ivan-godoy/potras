<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <FormEquipo/>
        </vs-col>

    </vs-row>
</template>

<script>
    import FormEquipo from "./FormEquipo";
    export default {
        name: "FormularioEstadio",
        components:{FormEquipo},

    }
</script>

<style scoped lang="stylus">

</style>
