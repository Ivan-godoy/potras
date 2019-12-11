<template>
    <div>
        <vs-card actionable class="cardx" >
            <div slot="header">
                <h3>
                    {{titulo}}
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
    </div>
</template>

<script>
    import Axios from "axios";
    export default {
        name: "FormEstadio",
        props:{
            titulo: null,
        },
        data(){
            return{
                NombreEstadio:'',
                CapacidadMaxima: '',
                SelectCiudad: '',
                ciudades: null,
                errors: [],
            }
        },
        methods:{
            checkFormEstadio: function(){
                let expresion = new RegExp(/^[a-zA-z\s]+/);
                let expresionNumerica = new RegExp(/^[0-9]+$/);
                this.errors = [];
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
            EnvioDatos: function () {
                Axios.post('http://134.209.172.114/estadios/',{
                    nombre: this.NombreEstadio,
                    capacidad: this.CapacidadMaxima,
                    ciudad: this.Ciudad
                }).then(
                    this.openConfirm()
                )
            },
            // CargarEstadios(){
            //     Axios.get("http://134.209.172.114/estadios/").then(
            //         res => (
            //             this.estadios = res.data
            //         )
            //     )
            // },
            // PostEstadio: function(){
            //     Axios.post('http://134.209.172.114/estadios/', {
            //         nombre: this.NombreEstadio,
            //         capacidad: this.CapacidadMaxima,
            //         ciudad: this.SelectCiudad
            //     }).then(
            //         this.openConfirm("el estadio "+this.NombreEstadio)
            //     )
            // },
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
