<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card actionable class="cardx" >
                <div slot="header">
                    <h3>
                        Creacion de Temporada
                    </h3>
                </div>
                <div>
                    <div class="centerx default-input">
                        <div class="contenedor">
                            <vs-col>
                                <h6>Fecha de Inicio de Temporada</h6>
                                <vs-input type="date" class="inputx" v-model="fechaInicio"/>
                            </vs-col>
                            <vs-col>
                                <h6>Fecha de Fin de Temporada</h6>
                                <vs-input type="date" class="inputx" v-model="fechaFinal"/>
                            </vs-col>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="FormTempo" color="success" type="filled" icon="done">Guardar Fecha de Temporada</vs-button>
                    </vs-row>
                </div>
            </vs-card>
            <vs-list v-if="errors.length">
                <vs-list-header title="¡Ups!" color="danger"/>
                <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
                </vs-list-item>
            </vs-list>
        </vs-col>
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <div>
                <vs-table stripe :data="temporadas" >
                    <template slot="header">
                        <h3>
                            Temporadas
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Fecha Inicio de Temporada
                        </vs-th>
                        <vs-th>
                            Fecha Fin de Temporada
                        </vs-th>
                        <vs-th>
                            Acciones
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(indextr) in temporadas" >
                            <vs-td :data="indextr.fecha_inicio">
                                {{indextr.fecha_inicio}}
                            </vs-td>
                            <vs-td :data="indextr.fecha_final">
                                {{indextr.fecha_final}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button  disabled id="btnVerTemporada"   vs-type="gradient" size="medium" color="success" icon="add" style="margin-right: 10px"></vs-button>
                                            <vs-button id="btnCrearEncuentro" @click="crearTemporada" vs-type="flat" size="medium" color="warning" icon="touch_app"></vs-button>
                                        </vs-col>
                                    </div>
                                </vs-row>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
    </vs-row>
</template>

<script>
    import Axios from "axios";
    export default {
        name: "Temporada",
        methods:{
            crearTemporada: function(){
              document.getElementById("btnVerTemporada").disabled = false
              document.getElementById("btnCrearEncuentro").disabled = true
            },
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
            GuardarTemporada: function() {
                Axios.post('http://134.209.172.114/api/temporadas/', {
                    fecha_inicio: this.fechaInicio,
                    fecha_final: this.fechaFinal
                    }
                ).then(this.openConfirm())
            },
            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Se ha guardado exitosamente las Fechas de Temporada:'+this.fechaInicio+' al ' + this.fechaFinal
                })
            },
            FormTempo: function () {
                if (this.fechaInicio && this.fechaFinal){
                    this.GuardarTemporada()
                }
                this.errors = [];
                if (!this.fechaInicio){
                    this.errors.push("Es necesario llenar el campo de Fecha de Inicio de Temporada.")
                }
                if (!this.fechaFinal){
                    this.errors.push("Es necesario llenar el campo de Fecha de Fin de Temporada.")
                }
            },
        },
        data(){
            return{
                errors:[],
                temporadas: null,
                fecha_inicial: null,
                fecha_final: null,
                popupActivo1:false,
                popupActivo:false,
                fechaInicio:'',
                fechaFinal:''
            }
        },
        mounted() {
            Axios.get('http://134.209.172.114/api/temporadas/').then(
                res=>(
                    this.temporadas = res.data
                )
            )
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
