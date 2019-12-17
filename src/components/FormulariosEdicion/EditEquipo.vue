<template>
    <div>
        <vs-card actionable class="cardx" >
            <div slot="header">
                <h3>{{titulo}}</h3>
            </div>
            <div class="centerx default-input">
                <div class="contenedor" v-model="OtorgandoNombres">
                    <vs-input class="inputx" label-placeholder="Nombre del Equipo" v-model="NombreEquipo"/>
                    <vs-input class="inputx"  label-placeholder="Esquema Habitual" v-model="Esquema"/>
                    <vs-select autocomplete class="selectExample" label="Estadios" v-model="SelectEstadio">
                        <vs-select-item  :value="item.id" :text="item.nombre" v-for="(item) in estadios" />
                    </vs-select>
                    <vs-input type="date" class="inputx" label-placeholder="Fecha de Fundacion" v-model="FechaFundacion"/>
                </div>
                <div class="contenedor">
                    <div class="centerx">
                        <div class="flex-d justify-content-center">
                            <div class="row">
                                <div class="col-auto">
                                    <vs-upload
                                            id="file"
                                            :show-upload-button="false"
                                            :limit="1"
                                            :text="'Seleccionar Logo del Equipo'"
                                            @change="NombreFile"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Equipo</vs-button>
                </vs-row>
            </div>
        </vs-card>
<!--        <ErroresValidacion :errors="errors"/>-->
    </div>
</template>

<script>

    import Axios from "axios";

    export default {
        name: 'EditEquipo',
        methods:{
            met: function(){
              alert("metodos")
            },
            NombreFile: function(){
                this.file = document.getElementById("file").files[0];
            },
            checkForm: function () {
                if (this.NombreEquipo && this.Esquema && this.SelectEstadio && this.FechaFundacion
                    && this.file.size > 0){
                    this.GuardarDatos()
                }
                this.errors = [];
                if (!this.NombreEquipo){
                    this.errors.push("El campo nombre equipo es requerido.")
                    this.VNombreEquipo =  true;
                }
                if (!this.Esquema){
                    this.errors.push("El campo esquema habitual es requerido.")
                }
                if(!this.SelectEstadio){
                    this.errors.push("El campo estadio se requerido.")
                }
                if (!this.FechaFundacion){
                    this.errors.push("El campo fecha fundacion es requerido.")
                }
                if (!this.file){
                    this.errors.push("El logo es obligatorio.")
                }
            },
            GuardarDatos: function () {
                let data = new FormData();
                data.append('logo_equipo', this.file);
                data.append('nombre', this.NombreEquipo);
                data.append('fecha_fundacion', this.FechaFundacion);
                data.append('esquema_habitual', this.Esquema);
                data.append('estadio', this.SelectEstadio);
                Axios.post('http://134.209.172.114/api/equipos/',data,{
                        headers:{
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(this.openConfirm())
            },
            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente el equipo '+this.NombreEquipo+'.'
                })
            },
        },
        computed:{
          OtorgandoNombres: function () {
            this.NombreEquipo = this.ENombreEquipo
          }
        },
        data(){
            return {
                VNombreEquipo: null,
                errors: [],
                estadios:null,
                file: '',
                Esquema: '',
                SelectEstadio: '',
                FechaFundacion: '',
                NombreEquipo:''
            }
        },
        props:{
            titulo: String,
            ENombreEquipo: String
        },

    }
</script>

<style scoped>

</style>
