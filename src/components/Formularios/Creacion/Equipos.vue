<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <FormEquipo
                    titulo="Creacion de Equipo" :Accion="tipo"
            />
        </vs-col>

    </vs-row>
</template>

<script>
    import FormEquipo from "./FormEquipo";
    export default {
        name: "FormularioEstadio",
        components:{FormEquipo},
        data(){
            return{
                tipo: 1
            }
        },
        mounted() {
            this.$emit("ActivandoEdicion")
        }
    }
</script>

<style scoped lang="stylus">

</style>
