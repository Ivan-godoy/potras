<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
      <div>
        <vs-table stripe :data="entrenadores">
          <template slot="header">
            <h3>
              Entrenadores
            </h3>
          </template>
          <template slot="thead">
            <vs-th>
              Nombre
            </vs-th>
            <vs-th>
              Nacionalidad
            </vs-th>
            <vs-th>
              Lugar de Nacimiento
            </vs-th>
            <vs-th>
              Fecha de Nacimiento
            </vs-th>
            <vs-th>
              Imagen
            </vs-th>
            <vs-th>
              Equipo
            </vs-th>
            <vs-th>
              Acciones
            </vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(indextr) in entrenadores" >
              <vs-td :data="indextr.nombre">
                {{indextr.nombre}}
              </vs-td>

              <vs-td :data="indextr.nacionalidad">
                {{indextr.nacionalidad}}
              </vs-td>

              <vs-td :data="indextr.lugar_nacimeinto">
                {{indextr.lugar_nacimiento}}
              </vs-td>

              <vs-td :data="indextr.fecha_nacimiento">
                {{indextr.fecha_nacimiento}}
              </vs-td>

              <vs-avatar :badge="id" size="50px"
                         :src="`https://thumbs.dreamstime.com/z/silueta-de-un-jugador-f%C3%BAtbol-del-atleta-que-juega-con-una-bola-en-108740657.jpg`"/>
              <vs-td :data="indextr.equipo">
                {{indextr.equipo.nombre}}
              </vs-td>
              <vs-td>
                <vs-row vs-w="12">
                  <div>
                    <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                      <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                      <vs-popup class="gestion_Entrenador"  title="Editar Entrenador" :active.sync="popupActivo">
                        <div class="contenedor">
                          <Entrenador titulo="Formulario Entrenador" :id_equipo="id"/>
                        </div>
                      </vs-popup>
                      <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                      <vs-popup class="gestion_Entrenador"  title="Eliminar Entrenador" :active.sync="popupActivo1">
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
    import Entrenador from "../Creacion/Entrenador";
    export default {
        name: "Jugador",
        components:{Entrenador},
        data(){
            return{
                entrenadores: null,
                nombre: null,
                nacionalidad: null,
                fecha_nacimeinto: null,
                lugar_nacimeinto: null,
                imagen: null,
                equipo: null,
                popupActivo:false,
                popupActivo1:false
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/entrenadores/').then(
                res =>(
                    this.entrenadores = res.data
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
