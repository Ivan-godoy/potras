<template>
    <div>
        <vs-card actionable class="cardx">
            <div slot="header">
                <h3>
                    Formulario Arbitro
                </h3>
            </div>

            <div class="row contenedor centerx default-input">
                <div class="col">
                    <div class="row">
                        <vs-input class="inputx col-10" label-placeholder="Nombre Completo del Arbitro" v-model="NombreArbitro" @keyup="validacionNom"/>
                        <vs-alert v-for="error in errorsNom" color="danger" icon="new_releases" >
                            <span>{{ error }}</span>
                        </vs-alert>
                    </div>
                    <div class="row">
                        <vs-input class="inputx col-10" label-placeholder="Nacionalidad del Arbitro" v-model="NacionalidadArbitro" @keyup="validacionNa"/>
                        <vs-alert v-for="error in errorsNa" color="danger" icon="new_releases" >
                            <span>{{ error }}</span>
                        </vs-alert>
                    </div>
                    <div class="row">
                        <vs-input  class="inputx col-10" type="date" v-model="FechaNacimiento" @change="validacionFe"/>
                        <span style="margin-left: 20px">Fecha de Nacimiento</span>
                        <vs-alert v-for="error in errorsFe" color="danger" icon="new_releases" >
                            <span>{{ error }}</span>
                        </vs-alert>
                    </div>

                </div>

                <div class="col">
                    <div class="row">
                        <vs-input class="inputx col-10" label-placeholder="Lugar de Nacimiento" v-model="LugarNacimiento" @keyup="validacionLu"/>
                        <vs-alert v-for="error in errorsLug" color="danger" icon="new_releases" >
                            <span>{{ error }}</span>
                        </vs-alert>
                    </div>
                    <div class="row">
                        <vs-select
                                style="margin-top: 13px"
                                autocomplete
                                class="selectExample col-10"
                                label="Selección de Posición"
                                v-model="SelectPosicion"
                                @change="validacionPo"
                        >
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in Posicion" />
                        </vs-select>
                        <vs-alert v-for="error in errorsPo" color="danger" icon="new_releases" >
                            <span>{{ error }}</span>
                        </vs-alert>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <vs-upload
                            id="file"
                            :show-upload-button="false"
                            :limit="1"
                            :text="'Foto del Arbitro'"
                            @change="nomFile"
                            v-model="Foto"
                    />
                   <vs-alert v-for="error in errorsFo" color="danger" icon="new_releases" >
                        <span>{{ error }}</span>
                    </vs-alert>
                </div>
            </div>
            <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Arbitro</vs-button>
                </vs-row>
            </div>
        </vs-card>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "FormArbitro",
        data(){
            return {
                errorsNom: [],
                errorsLug: [],
                errorsNa: [],
                errorsFe: [],
                errorsPo: [],
                errorsFo: [],
                NombreArbitro:'',
                LugarNacimiento: '',
                NacionalidadArbitro: '',
                FechaNacimiento: '',
                SelectPosicion: '',
                Foto:'',
                Posicion:[
                    {text:'Arbitro Principal',value:1},
                    {text:'Arbitro Asistente 1',value:2},
                    {text:'Arbitro Asistente 2',value:3},
                    {text:'Cuarto Arbitro',value:4},
                    {text:'Quinto Arbitro',value:5},
                    {text:'Sexto Arbitro',value:6}
                ],
                file:''
            }
        },
        methods: {
            nomFile: function(){
                this.file = document.getElementById("file").files[0];
            },
            validacionNom: function(){
                this.errorsNom = [];
                let LetrasExpresion = new RegExp(/^[A-Za-z\s]+$/);
                if (this.NombreArbitro.length < 3 || !this.NombreArbitro) {
                    this.errorsNom.push("El campo Nombre del arbitro debe tener al menos 3 caracteres")
                }
                if (!LetrasExpresion.test(this.NombreArbitro)) {
                    this.errorsNom.push("El campo Nombre del arbitro solo acepta caracteres alfabeticos")
                }
            },
            validacionNa: function(){
                this.errorsNa = [];
                let LetrasExpresion = new RegExp(/^[A-Za-z\s]+$/);
                if (this.NacionalidadArbitro.length < 3 || !this.NacionalidadArbitro) {
                    this.errorsNa.push("El campo de Nacionalidad del arbitro no debe tener al menos 3 caracteres")
                }
                if (!LetrasExpresion.test(this.NacionalidadArbitro)) {
                    this.errorsNa.push("El campo de Nacionalidad del arbitro solo acepta caracteres alfabeticos")
                }
            },
            validacionFe: function(){
                this.errorsFe = [];
                if (!this.FechaNacimiento) {
                    this.errorsFe.push("El campo Fecha de Nacimiento del arbitro no debe estar vacio")
                }
            },
            validacionLu: function(){
                this.errorsLug = [];
                if (this.LugarNacimiento.length < 3 || !this.LugarNacimiento) {
                    this.errorsLug.push("El campo Lugar de Nacimiento debe tener al menos 3 caracteres")
                }
            },
            validacionPo: function(){
                this.errorsPo = [];
                if (!this.SelectPosicion){
                    this.errorsPo.push("El campo Posicion arbitro no debe estar vacio")
                }
            },
            validacionFo: function(){
                this.errorsFo = [];
                if (!this.file){
                    this.errorsFo.push("La foto es obligatoria.")
                }
            },
            checkForm: function () {
                if (this.errorsNom.length === 0 || this.errorsLug === 0 || this.val) {
                    this.EnvioDatos();
                }else{
                    this.validacionNom();
                    this.validacionPo();
                    this.validacionFe();
                    this.validacionLu();
                    this.validacionNa();
                    this.validacionFo();
                }
            },
            EnvioDatos: function () {
                let datos = new FormData();
                datos.append('nombre', this.NombreArbitro);
                datos.append('posicion', this.SelectPosicion);
                datos.append('fecha_nacimiento', this.FechaNacimiento);
                datos.append('nacionalidad', this.NacionalidadArbitro);
                datos.append('lugar_nacimiento', this.LugarNacimiento);
                datos.append('imagen', this.file);
                axios.post('http://134.209.172.114/api/arbitros/', datos,{
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    this.openConfirm(),
                    this.NombreArbitro = '',
                    this.SelectPosicion = '',
                    this.FechaNacimiento = '',
                    this.NacionalidadArbitro = '',
                    this.LugarNacimiento = '',
                    this.file = '',
                )
            },

            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente el Arbitro '+this.NombreArbitro+'.'

                })
            }
        }
    }
</script>

<style scoped lang="stylus">
    .cardx
        margin 15px
    .default-input
     .inputx
       margin 5px
       margin-top 15px
     .contenedor
       display flex
       flex-direction row
     .tarjetas
       padding 30px

</style>