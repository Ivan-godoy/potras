<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="8">
        <div>
            <vs-table :data="equipos">
                <template slot="header">
                    <h3>
                        Equipos
                    </h3>
                </template>
                <template slot="thead">
                    <vs-th>
                        Nombre del Equipo
                    </vs-th>
                    <vs-th>
                        Fecha de Fundación
                    </vs-th>
                    <vs-th>
                        Esquema Habitual
                    </vs-th>
                    <vs-th>
                        Logo del Equipo
                    </vs-th>
                    <vs-th>
                        Estadio
                    </vs-th>
                    <vs-th>
                        Acciones
                    </vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(indextr) in equipos" >
                        <vs-td :data="indextr.nombre">
                            {{indextr.nombre}}
                        </vs-td>

                        <vs-td :data="indextr.fundacion">
                            {{indextr.fecha_fundacion}}
                        </vs-td>

                        <vs-td :data="indextr.esquema_habitual">
                            {{indextr.esquema_habitual}}
                        </vs-td>
                        <vs-avatar :badge="id" size="50px"
                                   :src="`https://www.photoframemaster.com/res/templates/thumb_small/blue-star-and-gray-soccer.png`"/>
                        <vs-td :data="indextr.estadio">
                            {{indextr.estadio.nombre}}
                        </vs-td>
                      <vs-td>
                        <vs-row vs-w="12">
                          <div>
                            <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                              <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                              <vs-popup class="gestion_Jugador"  title="Editar Jugador" :active.sync="popupActivo">
                                <div class="contenedor">
                                  <FormEquipo titulo="Formulario Equipo" :id_equipo="id"/>
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
  import FormEquipo from "../Creacion/FormEquipo";

  export default {
        name: "Equipo",
        components: {FormEquipo},
        data(){
            return{
                equipos: null,
                nombre: null,
                fecha_fundacion: null,
                esquema_habitual: null,
                logo_equipo: null,
                estadio: null,
                popupActivo:false,
                popupActivo1:false
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/equipos/').then(
                res =>(
                    this.equipos = res.data
                )
            )        }
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
