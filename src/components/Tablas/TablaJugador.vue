<template lang="html">
  <div>
    <vs-card actionable class="cardx">
      <div id="scroll">
        <vs-table stripe :data="jugadores">
          <template slot="header">
            <h3>
              Jugadores Existentes
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
              Dorsal
            </vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(indextr) in jugadores" >
              <vs-td :data="indextr.nombre">
                {{indextr.jugadores.nombre}}
              </vs-td>

              <vs-td :data="indextr.nacionalidad">
                {{indextr.jugadores.nacionalidad}}
              </vs-td>

              <vs-td :data="indextr.dorsal">
                {{indextr.dorsal}}
              </vs-td>

            </vs-tr>
          </template>
        </vs-table>
      </div>
    </vs-card>
  </div>
  {{equipo_id}}
</template>

<script>
  import axios from 'axios'
    export default {
      name: "TablaJugador",
        data(){
            return {
                jugadores: null,
                nombre: null,
                nacionalidad: null,
                dorsal: null
            }
        },
      props:{equipo_id:Number},
      methods:{
        CargarJugadores: function () {
          alert("se ejecuta")
          axios.get('http://134.209.172.114/api/equipos/'+this.equipo_id+'/').then(
                  res =>(
                          this.jugadores = res.data
                  )
          )
        }
      }
    }
</script>
<style scoped lang="stylus">
  #scroll
    overflow-y scroll
    height 400px
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
