<template>
    <vs-row vs-justify="center" vs-w="12">
        <vs-col id="form" type="flex" vs-justify="center" vs-align="center" vs-w="4">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        Creacion Temporada
                    </h3>
                </div>
                <div class="row contenedor centerx default-input">
                    <div class="col">
                        <div class="row">
                            <vs-input label="Fecha de Inicio de Temporada" type="date" class="inputx" v-model="fechaInicio"/>
                        </div>
                    </div>

                    <div class="col">
                        <div class="row">
                            <vs-input label="Fecha de Fin de Temporada" type="date" class="inputx" v-model="fechaFinal"/>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button @click="FormTempo" color="success" type="filled" icon="done">Guardar Fecha de Temporada</vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card actionable class="cardx">
                <vs-table
                        pagination
                        max-items="4"
                        search
                        :data="temporadas">
                    <template slot="header">
                        <h3>
                            Temporadas
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            No.
                        </vs-th>
                        <vs-th>
                            Fecha Inicio
                        </vs-th>
                        <vs-th>
                            Fecha Final
                        </vs-th>
                        <vs-th>
                            Gestiones
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].id">
                                {{data[indextr].id}}
                            </vs-td>
                            <vs-td :data="data[indextr].fecha_inicio">
                                {{data[indextr].fecha_inicio}}
                            </vs-td>

                            <vs-td :data="data[indextr].fecha_final">
                                {{data[indextr].fecha_final}}
                            </vs-td>

                            <vs-td :data="data[indextr].id">
                                <vs-row>
                                        <vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button :to="'/tablas/'+data[indextr].id" title="Ver Encuentros"  id="btnVerTemporada"   vs-type="gradient" size="medium" color="success" icon="add" style="margin-right: 10px"></vs-button>
                                            <vs-button @click="GenerarEncuentros(data[indextr].id)" :data="data[indextr].id" title="Crear Encuentros" id="btnCrearEncuentro"  vs-type="flat" size="medium" color="warning" icon="touch_app"></vs-button>
                                        </vs-col>
                                </vs-row>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import Axios from "axios";
    export default {
        name: "Temporada",
        methods:{
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
            GenerarEncuentros: function (id) {
                Axios.get('http://134.209.172.114/api/encuentros/generar/'+id).then(
                    function (res) {
                        alert("hols")
                    }
                )
            },
        },
        data(){
            return{
                id_temporada: '',
                errors:[],
                temporadas: '',
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
    #form{
        margin-right: 50px;
    }
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
