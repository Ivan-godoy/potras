<template>
<vs-row vs-justify="center" vs-w="10">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
        <div>
            <vs-table
                    v-model="selected"
                    pagination
                    max-item="3"
                    @selected="handleSelected"
                    :data="encuentros">
                <template slot="header">
                    <h3>
                        Encuentros de la Temporada {{id_temporada}}
                    </h3>
                </template>
                <template slot="thead">
                    <vs-th>
                        Equipo Local
                    </vs-th>
                    <vs-th>
                        vs
                    </vs-th>
                    <vs-th>
                        Equipo Visitante
                    </vs-th>
                    <vs-th>
                        Fecha del Encuentro
                    </vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr  :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                        <vs-td :data="data[indextr].equipo_local">
                            {{data[indextr].equipo_local.nombre}}
                        </vs-td>
                        <vs-td>
                            vs
                        </vs-td>
                        <vs-td :data="data[indextr].equipo_visitante">
                            {{data[indextr].equipo_visitante.nombre}}
                        </vs-td>
                        <vs-td :data="data[indextr].fecha_encuentro">
                            {{data[indextr].fecha_encuentro}}
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
            <vs-popup :active.sync="popupActivo4" fullscreen :title="'Partido '+equipo_local+' vs '+equipo_visitante">
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-sm-5">
                            <vs-divider color="primary">Informacion del Partido</vs-divider>
                            <div class="row">
                                <div class="col">
                                    <div class="row text-center">Equipo Local</div>
                                    <div class="row"><vs-avatar size="200px"  :src="'http://134.209.172.114'+urlLocal"/></div>

                                </div>
                                <div class="col">

                                </div>
                                <div class="col">
                                    <div class="row text-center">Equipo Visitante</div>
                                    <div class="row"> <img :src="'http://134.209.172.114'+urlVisitante" class="card-img-top"
                                                           size="200px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vs-popup>
            <pre>{{ selected }}</pre>
        </div>
    </vs-col>
</vs-row>
</template>

<script>
import axios from 'axios';
    export default {
        name: "Encuentros",
        props: {
            id_temporada: String
        },
        data() {
            return {
                encuentros: '',
                equipo_local: '',
                equipo_visitante: '',
                fecha_encuentro: '',
                popupActivo4: false,
                selected:'',
                Id:'',
                idEquipo_Local:'',
                idEquipo_Visitante:'',
                FechaEncuentro:'',
                urlLocal:'',
                urlVisitante: '',
                jugadoreslocal:'',
                jugadoresvisitante:'',
                jugador_equipo:'',
                idjugadorequipo:'',
                equipo_jugador: '',
            }
        },
        methods: {
            handleSelected(tr){
                this.Id = tr.id;
                this.equipo_local = tr.equipo_local.nombre;
                this.equipo_visitante = tr.equipo_visitante.nombre;
                this.idEquipo_Local = tr.equipo_local.id;
                this.idEquipo_Visitante = tr.equipo_visitante.id;
                this.FechaEncuentro = tr.fecha_encuentro;
                this.popupActivo4 = true;
                this.urlLocal = tr.equipo_local.logo_equipo;
                this.urlVisitante = tr.equipo_visitante.logo_equipo;
                this.jugador_equipo = tr.equipo_jugador;
                axios.get('http://134.209.172.114/api/jugadores/').then(
                    res =>{
                        this.jugadoreslocal = res.data;
                        if (this.jugadoreslocal === this.idEquipo_Local){
                            console.log("hola");
                        }
                    }
                );
                    axios.get('http://134.209.172.114/api/jugadores/').then(
                        res =>{
                            this.jugadoresvisitante = res.data;
                        }
                    );
            },

        },
            mounted() {
                axios.get('http://134.209.172.114/api/encuentros/listar/' + this.id_temporada).then(
                    res => {
                        this.encuentros = res.data;
                    }
                );
            }
        }

</script>

<style scoped>

</style>