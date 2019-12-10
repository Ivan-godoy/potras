<template>
    <div>
        <vs-card actionable class="cardx">
            <div slot="header">
                <h3>
                    {{titulo}}
                </h3>
            </div>
            <div>
                <div class="centerx">
                    <vs-input   label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
                </div>

            </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
                </vs-row>
            </div>

        </vs-card>
        <ErroresValidacion :errors="errors"/>
    </div>
</template>

<script>
    import Axios from "axios";
    import ErroresValidacion from "../../ErroresValidacion";
    export default {
        name: "FormCiudad",
        components:{
            ErroresValidacion
        },
        props:{
            titulo: null
        },
        data(){
            return{
                NombreCiudad:null,
                errors: null
            }
        },
        methods:{
            checkForm: function () {
                if (this.NombreCiudad && this.NombreCiudad.length > 2){
                    this.EnvioDatos()
                }
                this.errors = [];
                if (!this.NombreCiudad){
                    this.errors.push("El campo Nombre de Ciudad es requerido")
                }else{
                    if (this.NombreCiudad.length < 3){
                        this.errors.push("El campo nombre debe ser mayor a dos caracteres")
                    }
                }
            },
            EnvioDatos: function () {
                Axios.post('http://134.209.172.114/ciudades/',{
                    nombre: this.NombreCiudad
                }).then(
                    this.openConfirm("la Ciudad "+this.NombreCiudad),
                    this.NombreCiudad = "",
                )
            },
            openConfirm(fragmento){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente '+fragmento+".",
                })
            },
        }
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
