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
                        <div class="col">
                            <vs-divider color="warning">Formulario Goles</vs-divider>
                            <div class="form-group">
                                <vs-select
                                        disabled
                                        id="SelectEquipoG"
                                        autocomplete
                                        label="Figuras"
                                        v-model="SelectEquipoGoleador"
                                        @change="BuscarJugador"
                                >
                                    <vs-select-item :value="0" text="Seleccione una opcion"/>
                                    <vs-select-item :value="idEquipo_Local" :text="equipo_local"/>
                                    <vs-select-item :value="idEquipo_Visitante" :text="equipo_visitante"/>
                                </vs-select>
                            </div>
                            <div class="form-group">
                                <vs-select
                                        id="SelectGoleador"
                                        disabled
                                        autocomplete
                                        label="Figuras"
                                        v-model="JugadorGoleador"
                                >
                                    <vs-select-item
                                            :value="item.id" :text="item.nombre" v-for="item in opciones"/>
                                </vs-select>
                            </div>
                            <div class="form-group">
                                <vs-button id="BtnGol" @click="RegistrarGol" disabled="" color="primary" type="border">Registrar Gol</vs-button>
                            </div>
                        </div>
                        <div class="col-sm-5">
                            <vs-divider color="primary">Informacion del Partido</vs-divider>
                            <div class="row">
                                <div class="col d-flex justify-content-center">
                                    <div class="row"><vs-avatar v-if="urlLocal" size="140px"  :src="'http://134.209.172.114'+urlLocal"/></div>
                                </div>

                                <div class="col d-flex justify-content-center">
                                    <div class="row"> <vs-avatar v-if="urlVisitante" :src="'http://134.209.172.114'+urlVisitante" size="140px"/></div>
                                </div>
                            </div>
                            <br>
                            <div class="row">
                                <button @click="Jugar" class="btn btn-outline-success btn-sm btn-lg btn-block">Jugar Partido</button>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                </div>
            </vs-popup>
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
                JugadorGoleador: '',
                SelectEquipoGoleador:'',
                JugadoresPosibles: '',
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
                opciones: []
            }
        },
        methods: {
            Jugar: function(){
                document.getElementById("SelectEquipoG").disabled = false
            },
            RegistrarGol: function(){
              axios.post('http://134.209.172.114/api/goles/crear/',{
                  partido_jugado:this.Id,
                  jugador:this.JugadorGoleador,
                  equipo:this.SelectEquipoGoleador
              }).then(
                  alert("Se guardo")
              )
            },
            BuscarJugador: function(){
                this.opciones = []
              if (this.SelectEquipoGoleador != 0){
                  console.log(this.SelectEquipoGoleador)
                  axios.get('http://134.209.172.114/api/equipos/'+this.SelectEquipoGoleador+'/').then(
                      res=>(
                         this.JugadoresPosibles = res.data,
                         this.introduccionJug(this.JugadoresPosibles),
                         document.getElementById("SelectGoleador").disabled = false
                  )
                  )

              }
            },
            introduccionJug: function(jugadores){
                for (let i = 0; i < jugadores.jugadores.length; i++){
                    this.opciones.push(jugadores.jugadores[i])
                }
                document.getElementById("BtnGol").disabled = false
            },
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
