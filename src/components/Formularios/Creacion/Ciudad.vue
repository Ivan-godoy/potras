<template>
    <div>
        <vs-row vs-justify="center">
            <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="3">
                <vs-card actionable class="cardx">
                    <div slot="header">
                        <h3>
                            Creacion de ciudades
                        </h3>
                    </div>
                        <div>
                            <div class="centerx">
                                <vs-input label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
                            </div>

                        </div>
                        <div slot="footer">
                            <vs-row vs-justify="flex-end">
                                <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Equipo</vs-button>
                            </vs-row>
                        </div>

                </vs-card>
<!--                errores de validacion-->
                <vs-list v-if="errors.length">
                    <vs-list-header title="Errores" color="danger"></vs-list-header>
                    <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
                    </vs-list-item>
                </vs-list>
<!--                aca terminan los errores-->
            </vs-col>
            <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="5">
                <vs-card actionable class="cardx">
                    <TablaCiudades/>
                </vs-card>

            </vs-col>
        </vs-row>
    </div>

</template>

<script>
    import TablaCiudades from "../../Tablas/TablaCiudades";
    export default {
        name: "Ciudad",
        components:{TablaCiudades},
        data:()=> {
            return{
                errors: [],
                NombreCiudad: null,
            }
        },
        methods:{
            checkForm: function () {
            if (this.NombreCiudad && this.NombreCiudad.length > 2){
                this.EnvioDatos()
            }
            this.errors = [];
            if (!this.NombreCiudad){
                this.errors.push("El campo nombre no debe estar vacio")
            }
            if (this.NombreCiudad.length < 3){
                this.errors.push("El campo nombre debe ser mayor a dos caracteres")
            }
        },
            EnvioDatos: function () {
                this.openConfirm()
            },
            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente la ciudad '+this.NombreCiudad+".",
                    accept:this.acceptAlert
                })
            },
            acceptAlert(color){
                this.$vs.notify({
                    color:'success',
                    title:'Guardado',
                    text:'Se guardo la ciudad '+this.NombreCiudad+"."
                })
            },
        }
    }
</script>

<style scoped lang="stylus">
    .default-input
        .inputx
            margin 10px
    .tarjetas
        padding 30px
</style>
