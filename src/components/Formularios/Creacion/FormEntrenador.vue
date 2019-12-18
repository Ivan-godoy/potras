<template>
    <vs-card actionable class="cardx" >
        <div slot="header">
            <h3>
                {{titulo}}
            </h3>
        </div>
        <div>
            <div class="centerx default-input" v-model="Editando">
                <div class="contenedor">
                    <vs-input class="inputx" label-placeholder="Nombre del Entrenador" v-model="NombreEntrenador"/>
                    <vs-input class="inputx" label-placeholder="Nacionalidad del Entrenador" v-model="NacionalidadEntrenador"/>
                    <vs-input class="inputx" label-placeholder="Lugar de Nacimiento" v-model="LugarNacimiento"/>
                </div>
                <div class="contenedor">
                    <vs-input type="date" class="inputx" label-placeholder="Fecha de Nacimiento" v-model="FechaNacimiento"/>
                    <vs-select
                            autocomplete
                            class="selectExample"
                            label="Selección de Equipos"
                            v-model="SelectEquipos"
                    >
                        <vs-select-item :value="item.id" :text="item.nombre" v-for="(item) in equipos" />
                    </vs-select>
                </div>
                <div class="contenedor">
                    <div class="centerx">
                        <!--subir imagen-->
                        <div class="row">
                            <div class="col-auto">
                                <vs-upload
                                        id="file"
                                        :show-upload-button="false"
                                        :limit="1"
                                        :text="'Seleccionar Imagen del Entrenador'"
                                        @change="NombreFile"
                                />
                            </div>
                            <div v-if="Accion === 2" class="col-auto">
                                <div class="row">
                                    <vs-avatar size="160px" :src="urlFoto"/>
                                </div>
                                <div class="row">
                                    <small>Para cambiar foto actual, elija una</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div slot="footer">
            <vs-row vs-justify="flex-end">
                <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Entrenador</vs-button>
            </vs-row>
        </div>
        <ErroresValidacion :errors="errors"/>
    </vs-card>
</template>

<script>
    import Axios from "axios";
    import ErroresValidacion from "../../ErroresValidacion";
    export default {
        name: "FormEntrenador",
        components:{ErroresValidacion},
        methods:{
            CargarEquipos(){
                Axios.get("http://134.209.172.114/api/equipos/").then(
                    res => (
                        this.equipos = res.data
                    )
                )
            },
            NombreFile: function(){
                this.file = document.getElementById("file").files[0];
            },
            checkForm: function () {
                if (this.NombreEntrenador && this.NacionalidadEntrenador && this.LugarNacimiento
                    && this.FechaNacimiento && this.equipos){
                    if (this.Accion === 1){
                        this.GuardarEntrenador()
                    }else if (this.Accion === 2){
                        this.PutEntrenador()
                    }
                }
                this.errors = [];
                if (!this.NombreEntrenador){
                    this.errors.push("El campo nombre equipo es requerido.")
                }
                if (!this.NacionalidadEntrenador){
                    this.errors.push("El campo de la nacionalidad es requerido.")
                }
                if (!this.LugarNacimiento){
                    this.errors.push("El campo de lugar de nacimiento es requerido.")
                }
                if (!this.FechaNacimiento){
                    this.errors.push("El campo fecha fundacion es requerido.")
                }
                if(this.SelectEquipos.value > 0){
                    this.errors.push("El campo ciudad se requerido.")
                }
            },
            GuardarEntrenador: function () {
                let data = new FormData();
                data.append('imagen', this.file);
                data.append('nombre', this.NombreEntrenador);
                data.append('nacionalidad', this.NacionalidadEntrenador);
                data.append('lugar_nacimiento', this.LugarNacimiento);
                data.append('fecha_nacimiento', this.FechaNacimiento);
                data.append('equipo', this.SelectEquipos);
                Axios.post('http://134.209.172.114/api/entrenadores/',data,{
                        headers:{
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(this.openConfirm('Se ha guardado exitosamente el Entrenador '+this.NombreEntrenador+'.'))
            },
            PutEntrenador: function(){
                let data = new FormData()
                if (this.file){
                    data.append('imagen', this.file);
                }
                data.append('nombre', this.NombreEntrenador);
                data.append('nacionalidad', this.NacionalidadEntrenador);
                data.append('lugar_nacimiento', this.LugarNacimiento);
                data.append('fecha_nacimiento', this.FechaNacimiento);
                data.append('equipo', this.SelectEquipos);
                Axios.put('http://134.209.172.114/api/entrenadores/'+this.IdEntrenador+'/',data,{
                        headers:{
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(this.openConfirm('Se ha editado exitosamente el Entrenador '+this.NombreEntrenador+'.'),
                this.$emit('recargar'))
            },
            openConfirm(res){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: res
                })
            },
        },
        data(){
            return {
                errors: [],
                NombreEntrenador:'',
                NacionalidadEntrenador: '',
                LugarNacimiento: '',
                FechaNacimiento: '',
                SelectEquipos: "",
                equipos: null,
                errores: [],
                file:''
            }
        },
        props:{
            Accion: Number,
            titulo: String,
            PNombreEntrenador: String,
            PNacionalidad: String,
            PLugarNacimiento: String,
            PFecha:String,
            PSelectEquipo: Number,
            IdEntrenador: Number,
            urlFoto:String
        },
        computed:{
          Editando: function () {
            this.NombreEntrenador = this.PNombreEntrenador
            this.NacionalidadEntrenador = this.PNacionalidad
            this.LugarNacimiento = this.PLugarNacimiento
            this.FechaNacimiento = this.PFecha
            this.SelectEquipos = this.PSelectEquipo

          }
        },
        mounted(){
            this.CargarEquipos();
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
        padding 10px
</style>
