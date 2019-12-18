<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="8">
        <div>
            <vs-table max-items="4" @selected="handleSelected" pagination search :data="equipos">
                <template slot="header">
                    <h3>
                        Modificacion de Equipos
                    </h3>
                </template>
                <template slot="thead">
                    <vs-th>
                        nombre
                    </vs-th>
                    <vs-th>
                        Fecha fundacion
                    </vs-th>
                    <vs-th>
                        Esquema Habitual
                    </vs-th>
                    <vs-th>
                        Nombre Estadio
                    </vs-th>
                    <vs-th>Ciudad</vs-th>
                    <vs-th>Logo</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="indextr" :data="tr" v-for="(tr,indextr) in data" >
                        <vs-td :data="data[indextr].nombre">
                            {{data[indextr].nombre}}
                        </vs-td>

                        <vs-td :data="data[indextr].fecha_fundacion">
                            {{data[indextr].fecha_fundacion}}
                        </vs-td>

                        <vs-td :data="data[indextr].esquema_habitual">
                            {{data[indextr].esquema_habitual}}
                        </vs-td>

                        <vs-td :data="data[indextr].estadio.nombre">
                            {{data[indextr].estadio.nombre}}
                        </vs-td>
                        <vs-td :data="data[indextr].estadio.ciudad.nombre">
                            {{data[indextr].estadio.ciudad.nombre}}
                        </vs-td>
                        <vs-td :data="data[indextr].logo_equipo">
                            <vs-avatar  :src="data[indextr].logo_equipo"/>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
        </vs-col>
        <vs-popup  fullscreen :active.sync="popupActivo4" :title="nombreEquipo">
            <div class="d-flex justify-content-center">
                <div class="row">
                    <div class="col-auto">
                        <FormEquipo
                            :PNombreEquipo="this.nombreEquipo"
                            :titulo="'Editando el equipo:'+this.nombreEquipo"
                            :PEsquema="this.esquemaHabitual"
                            :PFechaFundacion="this.fechaFundacion"
                            :PSelectEstadio="this.Estadio"
                            :Accion="tipo"
                            :urlImagen="urlImagen"
                            :EquipoId = "IdEquipo"
                            @Recargar="Recargar"
                        />
                    </div>
                </div>
            </div>
        </vs-popup>
    </vs-row>
</template>

<script>
  import axios from "axios"
  import FormEquipo from "../Creacion/FormEquipo";
  export default {
        name: "Equipo",
      components:{FormEquipo},
        data(){
            return{
                equipos: '',
                nombreEquipo: '',
                esquemaHabitual: '',
                fechaFundacion: null,
                Estadio: 0,
                popupActivo4: false,
                urlImagen: '',
                tipo: 2,
                estado: false,
                IdEquipo: null
            }
        },
      methods:{
            Recargar: function(){
                this.popupActivo4 = false
                // this.CargarEquipos()
                this.estado = true
            },
          handleSelected(tr) {
              this.nombreEquipo = tr.nombre
              this.popupActivo4 = true
              this.esquemaHabitual = tr.esquema_habitual
              this.fechaFundacion = tr.fecha_fundacion
              this.Estadio = tr.estadio.id
              this.urlImagen = tr.logo_equipo
              this.IdEquipo = tr.id
          },
          CargarEquipos: function () {
              axios.get('http://134.209.172.114/api/equipos/').then(
                  res =>(
                      this.equipos = res.data
                  )
          )},
      },
        mounted() {
            this.CargarEquipos()
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
