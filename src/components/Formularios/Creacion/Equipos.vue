<template>

    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <vs-card actionable class="cardx" >
                <div slot="header">
                    <h3>Creacion de equipos</h3>
                </div>
                <div class="centerx default-input">
                    <div class="contenedor">
                        <vs-input class="inputx" label-placeholder="Nombre del Equipo" v-model="NombreEquipo"/>
                        <vs-input class="inputx"  label-placeholder="Esquema Habitual" v-model="Esquema"/>
                        <vs-select autocomplete class="selectExample" label="Ciudades" v-model="SelectCiudad">
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                        </vs-select>
                        <vs-input type="date" class="inputx" label-placeholder="Fecha de Fundacion" v-model="FechaFundacion"/>
                    </div>
                    <div class="contenedor">
                        <div class="centerx">
                            <h6 class="text-center">Subir logo</h6>
                            <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
                        </div>
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
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <TablaEquipos/>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import TablaEquipos from "../../Tablas/TablaEquipos";
    export default {
        name: "FormularioEstadio",
        components:{TablaEquipos},
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
            checkForm: function () {
                if (this.NombreEquipo && this.Esquema && this.SelectCiudad.value != 0 && this.FechaFundacion){
                    alert("Se valido el form")
                }
                this.errors = [];
                if (!this.NombreEquipo){
                    this.errors.push("El campo nombre equipo es requerido.")
                    this.VNombreEquipo =  true;
                }
                if (!this.Esquema){
                    this.errors.push("El campo esquema habitual es requerido.")
                }
                if(this.SelectCiudad.value != 0){
                    this.errors.push("El campo ciudad se requerido.")
                }
                if (!this.FechaFundacion){
                    this.errors.push("El campo fecha fundacion es requerido.")

                }
            }
        },
        data(){
            return {
                NombreEquipo:'',
                VNombreEquipo: null,
                Esquema: '',
                SelectCiudad: '',
                FechaFundacion: '',
                options1:[
                    {text:'La Ceiba',value:0},
                    {text:'Olanchito',value:2},
                    {text:'San Pedro Sula',value:3},
                ],
                errors: []
            }
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
        padding 10px
</style>
