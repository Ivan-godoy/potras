<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
            <div>
                <vs-table stripe :data="jugadores">
                    <template slot="header">
                        <h3>
                            Jugadores
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre
                        </vs-th>
                        <vs-th>
                            Fecha de Nacimiento
                        </vs-th>
                        <vs-th>
                            Nacionalidad
                        </vs-th>
                        <vs-th>
                            Lugar de Nacimiento
                        </vs-th>
                        <vs-th>
                            Peso
                        </vs-th>
                        <vs-th>
                            Estatura
                        </vs-th>
                        <vs-th>
                            Imagen
                        </vs-th>
                        <vs-th>
                            Posición
                        </vs-th>
                      <vs-th>
                            Dorsal
                        </vs-th>
                        <vs-th>
                            Acciones
                        </vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(indextr) in jugadores" >
                            <vs-td :data="indextr.nombre">
                                {{indextr.jugador.nombre}}
                            </vs-td>

                            <vs-td :data="indextr.nacimiento">
                                {{indextr.jugador.fecha_nacimiento}}
                            </vs-td>
                            <vs-td :data="indextr.nacionalidad">
                                {{indextr.jugador.nacionalidad}}
                            </vs-td>

                            <vs-td :data="indextr.nacionalidad">
                                {{indextr.jugador.lugar_nacimiento}}
                            </vs-td>

                            <vs-td :data="indextr.peso">
                                {{indextr.jugador.peso}}
                            </vs-td>
                            <vs-td :data="indextr.estatura">
                                {{indextr.jugador.estatura}}
                            </vs-td>
                            <vs-avatar :badge="id" size="50px"
                                       :src="`https://thumbs.dreamstime.com/z/silueta-de-un-jugador-f%C3%BAtbol-del-atleta-que-juega-con-una-bola-en-108740657.jpg`"/>
                            <vs-td :data="indextr.posicion">
                                {{indextr.jugador.posicion}}
                            </vs-td>
                          <vs-td :data="indextr.dorsal">
                                {{indextr.dorsal}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-popup class="gestion_Jugador"  title="Editar Jugador" :active.sync="popupActivo">
                                              <div class="contenedor">
                                                <FormJugador titulo="Formulario Jugador" :id_equipo="id"/>
                                              </div>
                                            </vs-popup>
                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                            <vs-popup class="gestion_Jugador"  title="Eliminar Jugador" :active.sync="popupActivo1">
                                                <p>Hola Guapo, ¿vas a eliminarme?</p>
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
  import axios from "axios"
  import FormJugador from "../Creacion/FormJugador";
    export default {
        name: "Jugador",
        components:{FormJugador},
        data(){
            return{
                jugadores: null,
                nombre: null,
                fecha_nacimeinto: null,
                lugar_nacimeinto: null,
                peso: null,
                estatura: null,
                imagen: null,
                posicion: null,
                dorsal: null,
                popupActivo:false,
                popupActivo1:false
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/jugadores/').then(
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


