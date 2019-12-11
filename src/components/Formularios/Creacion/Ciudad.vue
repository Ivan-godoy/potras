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
                                <vs-input  label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
                            </div>

                        </div>
                        <div slot="footer">
                            <vs-row vs-justify="flex-end">
                                <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
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
        {{info}}
    </div>

</template>

<script>
    import TablaCiudades from "../../Tablas/TablaCiudades";
    import Axios from "axios"
    export default {
        name: "Ciudad",
        components: {TablaCiudades},
        data: () => {
            return {
                errors: [],
                NombreCiudad: null,
                info: null,
            }
        },
        methods: {
            checkForm: function () {
                if (this.NombreCiudad && this.NombreCiudad.length > 2) {
                    this.EnvioDatos()
                }
                this.errors = [];
                if (!this.NombreCiudad) {
                    this.errors.push("El campo nombre no debe estar vacio")
                    if (this.NombreCiudad.length < 3) {
                        this.errors.push("El campo nombre debe ser mayor a dos caracteres")
                    }
                }
            }
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
