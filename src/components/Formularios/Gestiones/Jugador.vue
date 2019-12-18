<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="8">
            <div>
                <vs-table max-items="8" pagination search :data="jugadores">
                    <template slot="header">
                        <h3>
                            Vista de Jugadores
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre Completo
                        </vs-th>
                        <vs-th>
                            Fecha de Nacimiento
                        </vs-th>
                        <vs-th>
                            Lugar de Nacimiento
                        </vs-th>
                        <vs-th>
                            Nacionalidad
                        </vs-th>
                        <vs-th>Dorsal</vs-th>
                        <vs-th>Equipo Actual</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" :data="tr" v-for="(tr,indextr) in data" >
                            <vs-td :data="data[indextr].jugadores[indextr].nombre">
                                {{data[indextr].jugadores[indextr].nombre}}
                            </vs-td>

                            <vs-td :data="data[indextr].nombre">
                                {{data[indextr].nombre}}
                            </vs-td>

<!--                            <vs-td :data="data[indextr].lugar_nacimiento">-->
<!--                                {{data[indextr].lugar_nacimiento}}-->
<!--                            </vs-td>-->

<!--                            <vs-td :data="data[indextr].nacionalidad">-->
<!--                                {{data[indextr].nacionalidad}}-->
<!--                            </vs-td>-->
<!--                            <vs-td :data="data[indextr].equipo_jugador.dorsal">-->
<!--                                {{data[indextr].equipo_jugador.dorsal}}-->
<!--                            </vs-td>-->
<!--                            <vs-td :data="data[indextr].logo_equipo">-->
<!--                                <vs-avatar  :src="data[indextr].imagen"/>-->
<!--                            </vs-td>-->
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
<!--        <vs-popup  fullscreen :active.sync="popupActivo4" :title="'Ficha de: '+NombreEntrenador">-->
<!--            <div class="d-flex justify-content-center">-->
<!--                <div class="row">-->
<!--                    <div class="col-auto">-->
<!--                        <FormEntrenador-->
<!--                                :titulo="'Editando ficha de '+NombreEntrenador"-->
<!--                                :Accion="accion"-->
<!--                                :PNombreEntrenador = "NombreEntrenador"-->
<!--                                :PLugarNacimiento ="LugarNacimiento"-->
<!--                                :PNacionalidad = "NacionalidadEntrenador"-->
<!--                                :PFecha = "FechaNacimiento"-->
<!--                                :PSelectEquipo = "equipo"-->
<!--                                :IdEntrenador = "id"-->
<!--                                :urlFoto ="imagen"-->
<!--                                @recargar="rec"-->
<!--                        />-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </vs-popup>-->
    </vs-row>
</template>

<script>
  import axios from "axios"
  import FormJugador from "../Creacion/FormJugador";
    export default {
        name: "Jugador",
        components:{FormJugador},
        data(){
            return{
                jugadores: '',
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/equipos/').then(
                res =>(
                    this.jugadores = res.data
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
      margin 5px
      margin-top 15px
  .contenedor
    display flex
    flex-direction row
  .tarjetas
    padding 30px
</style>


