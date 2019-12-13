<template>
    <vs-row vs-justify="center">
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
                                    <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="add" style="margin-right: 10px"></vs-button>
                                    <vs-popup class="gestion_temporada"  title="Crear Temporada" :active.sync="popupActivo">
                                        <p>Hola Guapo, creemos una temporada</p>
                                    </vs-popup>
                                    <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="warning" icon="touch_app"></vs-button>
                                    <vs-popup class="gesion_temporada"  title="Ver Temporada" :active.sync="popupActivo1">
                                        <p>Hola Guapo, miremos como va la temporada</p>
                                    </vs-popup>
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
    import axios from "axios";
    export default {
        name: "VerTemporadas",
        data(){
            return{
                    temporadas: null,
                    fecha_inicial: null,
                    fecha_final: null,
                    popupActivo1:false,
                    popupActivo:false
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/temporadas/').then(
                res=>(
                    this.temporadas = res.data
                )
            )
        }
    }
</script>

<style scoped>

</style>