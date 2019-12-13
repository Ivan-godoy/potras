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
                <vs-list-header title="Errores" color="danger"></vs-list-header>
                <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
                </vs-list-item>
            </vs-list>
        </vs-col>
    </vs-row>
</template>

<script>
    import Axios from "axios";
    export default {
        name: "Temporada",
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
            GuardarTemporada: function() {
                let data = new FormData();
                data.append('fecha_inicio', this.fechaInicio);
                data.append('fecha_final', this.fechaFinal);
                Axios.post('http://134.209.172.114/api/temporadas/', data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
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
                fechaInicio:'',
                fechaFinal:''
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