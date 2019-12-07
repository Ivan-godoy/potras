<template>

    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card actionable class="cardx" >
                <div slot="header">
                    <h3>
                        Creacion de estadio
                    </h3>
                </div>
                <div>
                    <div class="contenedor centerx default-input">
                        <vs-input class="inputx" label-placeholder="Nombre del Estadio" v-model="NombreEstadio"/>
                        <vs-input class="inputx" label-placeholder="Capacidad Maxima del Estadio" v-model="CapacidadMaxima"/>
                        <vs-select
                                autocomplete
                                class="selectExample"
                                label="Ciudades"
                                v-model="SelectCiudad"
                        >
                            <vs-select-item :value="item.id" :text="item.nombre" v-for="(item) in ciudades" />
                        </vs-select>
                    </div>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="checkFormEstadio" color="success" type="filled" icon="done">Guardar Estadio</vs-button>
                    </vs-row>
                </div>
            </vs-card>
            <ErroresValidacion v-if="DecisionError === 'Estadio'" :errors="errors"/>
        </vs-col>
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
                        <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
                    </vs-row>
                </div>

            </vs-card>
            <ErroresValidacion v-if="DecisionError === 'Ciudad'" :errors="errors"/>
        </vs-col>
    </vs-row>
</template>

<script>
    import Axios from "axios";
    import ErroresValidacion from "../../ErroresValidacion";
    export default {
        name: "FormularioEstadio",
        components:{
          ErroresValidacion
        },
        data(){
            return {
                NombreEstadio:'',
                CapacidadMaxima: '',
                SelectCiudad: '',
                ciudades: null,
                errors: [],
                NombreCiudad: null,
                DecisionError: null
            }
        },
        methods:{
            checkFormEstadio: function(){
                let expresion = new RegExp(/^[a-zA-z\s]+/);
                let expresionNumerica = new RegExp(/^[0-9]+$/);
                this.errors = [];
                this.DecisionError = "Estadio";
                if (!this.NombreEstadio || this.NombreEstadio.length < 3){
                    this.errors.push("El campo Nombre Estadio debe tener al menos 3 letras.")
                }
                if (this.NombreEstadio.length > 0 && !expresion.test(this.NombreEstadio)){
                    this.errors.push("El campo Nombre Estadio solo debe tener caracterer alfabetico.")
                }
                if (!this.CapacidadMaxima){
                    this.errors.push("El campo Capacidad Maxima es requerido.")
                }
                if (this.CapacidadMaxima.length > 0 && !expresionNumerica.test(this.CapacidadMaxima)){
                    this.errors.push("El campo Capacidad Maxima no debe contener letras.")
                }
                if (!this.SelectCiudad){
                    this.errors.push("Tiene que seleccionar una ciudad.")
                }

                if (this.errors.length === 0){
                    this.PostEstadio()
                }

            },
            PostEstadio: function(){
                Axios.post('http://134.209.172.114/estadios/', {
                    nombre: this.NombreEstadio,
                    capacidad: this.CapacidadMaxima,
                    ciudad: this.SelectCiudad
                }).then(
                    this.openConfirm("el estadio "+this.NombreEstadio)
                )
            },
            checkForm: function () {
                if (this.NombreCiudad && this.NombreCiudad.length > 2){
                    this.EnvioDatos()
                }
                this.errors = [];
                this.DecisionError = "Ciudad";
                if (!this.NombreCiudad){
                    this.errors.push("El campo Nombre de Ciudad es requerido")
                }
                if (this.NombreCiudad.length < 3){
                    this.errors.push("El campo nombre debe ser mayor a dos caracteres")
                }
            },
            EnvioDatos: function () {
                Axios.post('http://134.209.172.114/ciudades/',{
                    nombre: this.NombreCiudad
                }).then(
                    this.openConfirm("la Ciudad "+this.NombreCiudad)
                )
            },
            openConfirm(fragmento){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente '+fragmento+".",
                })
                this.CargarCiudades()
            },
            CargarCiudades(){
                Axios.get("http://134.209.172.114/ciudades/").then(
                    res => (
                        this.ciudades = res.data
                    )
                )
            }
        },
        mounted() {
            this.CargarCiudades()
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
