<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="8">
      <div>
        <vs-table max-items="4" @selected="handleSelected" pagination search :data="entrenadores">
          <template slot="header">
            <h3>
              Modificacion de Entrenadores
            </h3>
          </template>
          <template slot="thead">
            <vs-th>
              Nombre Completo
            </vs-th>
            <vs-th>
              Lugar de Nacimiento
            </vs-th>
            <vs-th>
              Nacionalidad
            </vs-th>
            <vs-th>
              Fecha de Nacimiento
            </vs-th>
            <vs-th>Equipo Asignado</vs-th>
            <vs-th>Foto</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr" :data="tr" v-for="(tr,indextr) in data" >
              <vs-td :data="data[indextr].nombre">
                {{data[indextr].nombre}}
              </vs-td>

              <vs-td :data="data[indextr].lugar_nacimiento">
                {{data[indextr].lugar_nacimiento}}
              </vs-td>

              <vs-td :data="data[indextr].nacionalidad">
                {{data[indextr].nacionalidad}}
              </vs-td>

              <vs-td :data="data[indextr].fecha_nacimiento">
                {{data[indextr].fecha_nacimiento}}
              </vs-td>
              <vs-td :data="data[indextr].equipo.nomnre">
                {{data[indextr].equipo.nombre}}
              </vs-td>
              <vs-td :data="data[indextr].logo_equipo">
                <vs-avatar  :src="data[indextr].imagen"/>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </vs-col>
    <vs-popup  fullscreen :active.sync="popupActivo4" :title="'Ficha de: '+NombreEntrenador">
      <div class="d-flex justify-content-center">
        <div class="row">
          <div class="col-auto">
            <FormEntrenador
                    :titulo="'Editando ficha de '+NombreEntrenador"
                    :Accion="accion"
                    :PNombreEntrenador = "NombreEntrenador"
                    :PLugarNacimiento ="LugarNacimiento"
                    :PNacionalidad = "NacionalidadEntrenador"
                    :PFecha = "FechaNacimiento"
                    :PSelectEquipo = "equipo"
                    :IdEntrenador = "id"
                    :urlFoto ="imagen"
                    @recargar="rec"
            />
          </div>
        </div>
      </div>
    </vs-popup>
  </vs-row>
</template>

<script>
  import axios from "axios"
  import FormEntrenador from "../Creacion/FormEntrenador";
    export default {
        name: "Entrenador",
        components:{FormEntrenador},
        data(){
          return{
            entrenadores: '',
            NombreEntrenador:'',
            NacionalidadEntrenador: '',
            LugarNacimiento: '',
            FechaNacimiento: null,
            imagen: null,
            equipo: null,
            popupActivo4 : false,
            accion:2,
            id: null
          }
        },
        methods: {
          rec: function(){
            this.popupActivo4 = false
            this.CargarEntrenadores()
          },
            CargarEntrenadores(){
                axios.get("http://134.209.172.114/api/entrenadores/").then(
                    res => (
                        this.entrenadores = res.data
                    )
                )
            },
          handleSelected(tr) {
            this.NombreEntrenador = tr.nombre;
            this.NacionalidadEntrenador = tr.nacionalidad;
            this.LugarNacimiento = tr.lugar_nacimiento;
            this.FechaNacimiento = tr.fecha_nacimiento;
            this.equipo = tr.equipo.id
            this.popupActivo4 = true
            this.imagen = tr.imagen
            this.id = tr.id
          },

        },
        mounted() {
            this.CargarEntrenadores();
        }
    }
</script>

<style scoped>

</style>
