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
                            <vs-divider color="warning">Acciones del Partido</vs-divider>
                            <div class="form-group">
                                <label for="">Fecha de Juego</label>
                                <input type="datetime-local" id="Fecha" v-model="FechaEncuentro2" class="form-control form-control-sm">
                            </div>
                            <div class="form-group">
                                <button @click="Jugar" id="Jugar" class="btn btn-outline-success btn-sm btn-lg btn-block">Jugar Partido</button>
                                <hr>
                            </div>
                            <div class="form-group">
                                <label for="">Equipo</label>
                                <select
                                        disabled
                                        class="form-control form-control-sm"
                                        id="SelectEquipoG"
                                        v-model="SelectEquipoGoleador"
                                        @change="BuscarJugador">
                                    <option :value="0">Seleccione una opcion</option>
                                    <option :value="idEquipo_Local">{{equipo_local}}</option>
                                    <option :value="idEquipo_Visitante">{{equipo_visitante}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Jugador</label>
                                <select
                                        class="form-control form-control-sm"
                                        id="SelectGoleador"
                                        disabled
                                        v-model="JugadorGoleador"
                                >
                                    <option :value="item.id" v-for="item in opciones">{{item.nombre}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button id="BtnGol" @click="RegistrarGol" class="btn btn-sm btn-outline-primary" disabled>Registrar Gol</button>
                            </div>
                            <div class="form-group">
                                <label for="">Tarjetas de Falta</label>
                                <select
                                        class="form-control form-control-sm"
                                        id="SelectTarjetas"
                                        disabled
                                        v-model="Amonestacion"
                                >
                                    <option value="1">Tarjeta Amarilla</option>
                                    <option value="2">Tarjeta Roja</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button id="BtnAmonestacion"
                                        class="btn btn-outline-dark btn-sm" disabled @click="Falta">Registrar Amonestacion</button>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <vs-divider color="primary">Informacion del Partido</vs-divider>
                            <div class="row">
                                <div class="col d-flex justify-content-center">
                                    <div class="row"><vs-avatar v-if="urlLocal" size="140px"  :src="'http://134.209.172.114'+urlLocal"/></div>
                                </div>

                                <div class="col d-flex justify-content-center">
                                    <div class="row"> <vs-avatar v-if="urlVisitante" :src="'http://134.209.172.114'+urlVisitante" size="140px"/></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex justify-content-center">
                                    <h1 class="font-weight-bold size" v-if="resultados">{{resultados[0].resultado_local}}</h1>
                                </div>
                                <div class="col d-flex justify-content-center">
                                    <h1 class="font-weight-bold size" v-if="resultados">{{resultados[0].resultado_visita}}</h1>
                                </div>
                            </div>
                            <br>
                            <hr>
                        </div>
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
                SelectArbitro: '',
                Arbitro:'',
                Amonestacion:'',
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
                opciones: [],
                idEstadio:'',
                FechaEncuentro2: '',
                resultados: ''
            }
        },
        methods: {
            Falta: function(){
                var color = ''
                if (this.Amonestacion == 1){
                    color = 'warning'
                }else if(this.Amonestacion == 2){
                    color = 'danger'
                }
                axios.post('http://134.209.172.114/api/amonestaciones/crear/',{
                    partido_jugado: this.Id,
                    amonestacion: this.Amonestacion,
                    jugador:this.JugadorGoleador,
                    equipo:this.SelectEquipoGoleador
                }).then(
                    this.acceptAlert(color, 'Se ha registrado la amonestacion')
                )
            },
            Resultado: function(){
                axios.get('http://134.209.172.114/api/resultado/'+this.Id).then(
                    res =>(
                        this.resultados = res.data
                    )
                )
            },
            Jugar: function(){
                document.getElementById("Fecha").disabled = true
                document.getElementById("Jugar").disabled = true
                axios.put('http://134.209.172.114/api/encuentro/jugar/'+this.Id,{
                    temporada: this.id_temporada,
                    estadio: this.idEstadio,
                    fecha_partido_jugado: this.FechaEncuentro2,
                    arbitros:1
                }).then(
                    alert("hecho")
                )
                document.getElementById("SelectEquipoG").disabled = false
            },
            RegistrarGol: function(){
              axios.post('http://134.209.172.114/api/goles/crear/',{
                  partido_jugado:this.Id,
                  jugador:this.JugadorGoleador,
                  equipo:this.SelectEquipoGoleador
              }).then(
                  this.acceptAlert('success', 'Se ha registrado el gol'),
                  this.Resultado()
              )
            },
            acceptAlert(color, des){
                this.$vs.notify({
                    color:color,
                    title:'Registrado',
                    text:des
                })
            },
            BuscarJugador: function(){
                this.opciones = []
              if (this.SelectEquipoGoleador != 0){
                  console.log(this.SelectEquipoGoleador)
                  axios.get('http://134.209.172.114/api/equipos/'+this.SelectEquipoGoleador+'/').then(
                      res=>(
                         this.JugadoresPosibles = res.data,
                         this.introduccionJug(this.JugadoresPosibles),
                         document.getElementById("SelectGoleador").disabled = false,
                         document.getElementById("SelectTarjetas").disabled = false,
                         document.getElementById("BtnAmonestacion").disabled = false
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
                this.idEstadio = tr.equipo_local.estadio
                this.Resultado()
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

<style scoped lang="stylus">
.size
    font-size 90px
</style>
