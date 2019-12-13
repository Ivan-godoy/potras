<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
      <div>
        <vs-table stripe :data="ciudades">
          <template slot="header">
            <h3>
              Ciudad
            </h3>
          </template>
          <template slot="thead">
            <vs-th>
              Nombre
            </vs-th>

            <vs-th>
              Acciones
            </vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(indextr) in ciudades" >
              <vs-td :data="indextr.nombre">
                {{indextr.nombre}}
              </vs-td>

              <vs-td>
                <vs-row vs-w="12">
                  <div>
                    <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                      <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                      <vs-popup class="gestion_Ciudades"  title="Editar Ciudad" :active.sync="popupActivo">
                        <div class="contenedor">
                          <FormCiudad titulo="Formulario Ciudades" :id_equipo="id"/>
                        </div>
                      </vs-popup>
                      <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                      <vs-popup class="gestion_Ciudad"  title="Eliminar Ciudad" :active.sync="popupActivo1">
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
    import FormCiudad from "../Creacion/FormCiudad";
    export default {
        name: "Jugador",
        components:{FormCiudad},
        data(){
            return{
                ciudades: null,
                nombre: null,
                popupActivo:false,
                popupActivo1:false
            }
        },
        mounted() {
            axios.get('http://134.209.172.114/api/ciudades/').then(
                res =>(
                    this.ciudades = res.data
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
