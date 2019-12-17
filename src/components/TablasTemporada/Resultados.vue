<template>
    <vs-row vs-justify="center" vs-w="12">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <div>
                <vs-table
                        pagination
                        max-item="3"
                        :data="resultados">
                    <template slot="header">
                        <vs-divider color="success"><h1>Resultados de Encuentros</h1></vs-divider>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Equipo Local
                        </vs-th>
                        <vs-th>
                            Resultados Local
                        </vs-th>
                        <vs-th>
                            vs
                        </vs-th>
                        <vs-th>
                            Resultados Visitante
                        </vs-th>
                        <vs-th>
                            Equipo Visitante
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr  :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].Nombre_Local">
                                <h5>{{data[indextr].Nombre_Local}}</h5>
                            </vs-td>
                            <vs-td :data="data[indextr].resultados_local">
                                <h2>{{data[indextr].resultado_local}}</h2>
                            </vs-td>
                            <vs-td>
                                vs
                            </vs-td>
                            <vs-td :data="data[indextr].resultado_visita">
                                <h2>{{data[indextr].resultado_visita}}</h2>
                            </vs-td>
                            <vs-td :data="data[indextr].Nombre_Visitante">
                                <h5>{{data[indextr].Nombre_Visitante}}</h5>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
    </vs-row>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Resultados",
        data() {
            return {
                Nombre_Local: '',
                Nombre_Visitante: '',
                resultado_local: '',
                resultado_visita: '',
                resultados: ''
            }
        },
        methods: {
            handleSelected(tr){
                this.Nombre_Local = tr.Nombre_Local;
                this.Nombre_Visitante = tr.Nombre_Visitante;
                this.resultado_local = tr.resultado_local;
                this.resultado_visita = tr.resultado_visita;
            },

        },
        mounted() {
            axios.get('http://134.209.172.114/api/resultados/').then(
                res => {
                    this.resultados = res.data;
                }
            );
        }
    }

</script>

<style scoped lang="stylus">

</style>