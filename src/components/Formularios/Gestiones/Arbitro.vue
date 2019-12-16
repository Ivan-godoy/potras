<template>
    <vs-row vs-justify="center" vs-w="12">
        <vs-col id="form" type="flex" vs-justify="center" vs-align="center" vs-w="3">
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
                            <span style="margin-left: 20px">Fecha de Nacimiento</span>
                            <vs-input  class="inputx col-10" type="date" v-model="FechaNacimiento" @change="validacionFe"/>
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
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="checkForm" color="success" type="filled" icon="create" style="margin-right: 20px" title="Modificar Arbitro"></vs-button>
                        <vs-button @click="EliminarDatos" color="danger" type="filled" icon="delete_sweep" title="Eliminar Arbitro"></vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
            <vs-card actionable class="cardx">
                <vs-table
                        v-model="selected"
                        @selected="handleSelected"
                        pagination
                        max-items="20"
                        search
                        :data="arbitros">
                    <template slot="header">
                        <h3>
                            Arbitros
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            No.
                        </vs-th>
                        <vs-th>
                            Nombre Completo
                        </vs-th>
                        <vs-th>
                            Nacionalidad
                        </vs-th>
                        <vs-th>
                            Lugar de Nacimiento
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].id">
                                {{data[indextr].id}}
                            </vs-td>
                            <vs-td :data="data[indextr].nombre">
                                {{data[indextr].nombre}}
                            </vs-td>

                            <vs-td :data="data[indextr].nacionalidad">
                                {{data[indextr].nacionalidad}}
                            </vs-td>

                            <vs-td :data="data[indextr].lugar_nacimiento">
                                {{data[indextr].lugar_nacimiento}}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-card>
        </vs-col>

    </vs-row>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Arbitro",
        data(){
            return{
                selected:[],
                arbitros: null,
                errorsNom: [],
                errorsLug: [],
                errorsNa: [],
                errorsFe: [],
                errorsPo: [],
                errorsFo: [],
                Id:'',
                NombreArbitro:'',
                LugarNacimiento: '',
                NacionalidadArbitro: '',
                FechaNacimiento: '',
                SelectPosicion: '',
                Posicion:[
                    {text:'Arbitro Principal',value:1},
                    {text:'Arbitro Asistente 1',value:2},
                    {text:'Arbitro Asistente 2',value:3},
                    {text:'Cuarto Arbitro',value:4},
                    {text:'Quinto Arbitro',value:5},
                    {text:'Sexto Arbitro',value:6}
                ],
            }
        },
        methods:{
            handleSelected(tr) {
                this.Id = tr.id;
                this.NombreArbitro = tr.nombre;
                this.SelectPosicion = tr.posicion;
                this.LugarNacimiento = tr.lugar_nacimiento;
                this.NacionalidadArbitro = tr.nacionalidad;
                this.FechaNacimiento = tr.fecha_nacimiento;

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
            checkForm: function () {
                if (this.errorsNom.length === 0 && this.errorsLug.length === 0 && this.errorsNa.length === 0 && this.errorsFe.length === 0 && this.errorsPo.length === 0 && this.errorsFo.length === 0 ) {
                    this.CambioDatos();
                }else{
                    this.validacionNom();
                    this.validacionPo();
                    this.validacionFe();
                    this.validacionLu();
                    this.validacionNa();
                }
            },
            CambioDatos: function () {
                let data = new FormData();
                data.append('nombre', this.NombreArbitro);
                data.append('posicion', this.SelectPosicion);
                data.append('fecha_nacimiento', this.FechaNacimiento);
                data.append('nacionalidad', this.NacionalidadArbitro);
                data.append('lugar_nacimiento', this.LugarNacimiento);
                axios.put('http://134.209.172.114/api/arbitros/'+this.Id+'\\', data,{
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
                )
            },
            EliminarDatos: function () {
                let data = new FormData();
                data.append('nombre', this.NombreArbitro);
                data.append('posicion', this.SelectPosicion);
                data.append('fecha_nacimiento', this.FechaNacimiento);
                data.append('nacionalidad', this.NacionalidadArbitro);
                data.append('lugar_nacimiento', this.LugarNacimiento);
                axios.delete('http://134.209.172.114/api/arbitros/'+this.Id+'\\', data,{
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    this.openDelete(),
                    this.NombreArbitro = '',
                    this.SelectPosicion = '',
                    this.FechaNacimiento = '',
                    this.NacionalidadArbitro = '',
                    this.LugarNacimiento = '',
                )
            },
            openDelete(){
                this.$vs.dialog({
                    color: 'danger',
                    title: `Eliminado`,
                    text: 'Se han Eliminado los datos de '+this.NombreArbitro+'.'

                })
            },
            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se han modificaco los datos de '+this.NombreArbitro+'.'

                })
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/arbitros/').then(
                res =>(
                    this.arbitros = res.data
                )
            )}
   }
</script>

<style scoped>
    #form{
        margin-right: 50px;
    }
</style>
