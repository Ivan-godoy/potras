<template lang="html">
  <div>
    <vs-table
      @selected="handleSelected"
      :data="ciudades"

      >
      <template slot="header">
        <h3>
          Equipos Existentes
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Nombre del Equipo
        </vs-th>
        <vs-th>
          Ciudad de Localidad
        </vs-th>
        <vs-th>
          Nombre del Estadio
        </vs-th>
        <vs-th>
          Logo
        </vs-th>
      </template>

      <template slot-scope="{data}" id="tbody">
        <vs-tr class="tr" :data="tr" :key="indextr" v-for="(tr, indextr) in ciudades" >
          <vs-td :data="tr.nombre">
            {{data[indextr].nombre}}
          </vs-td>
          <vs-td :data="data[indextr].estadio.ciudad.nombre">
            {{data[indextr].estadio.ciudad.nombre}}
          </vs-td>
          <vs-td :data="data[indextr].estadio.nombre">
            {{data[indextr].estadio.nombre}}
          </vs-td>
          <vs-td>
            <vs-avatar :src="data[indextr].logo_equipo"/>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <vs-popup fullscreen :title="'Creando jugadores del equipo '+titulo" :active.sync="popupActivo4">
      <popup :id="id_tr" :Logo="logo"/>
    </vs-popup>

  </div>
</template>

<script>
  import axios from 'axios'
  import Popup from "../../Popup";
    export default {
        name: "Jugador",
        components:{Popup},
        data(){
            return{
                descriptionItems: [3,5,15],
                ciudades: null,
                popupActivo4:false,
                titulo: null,
                id_tr: null,
                buscar: null,
                logo: '',
            }
        },
        methods:{
            handleSelected(tr) {
                this.titulo = tr.nombre
                this.popupActivo4 = true
                this.id_tr = tr.id
                this.logo = tr.logo_equipo
            },
        },
        mounted() {
            axios.get('http://134.209.172.114/api/equipos/').then(
                res =>(
                    this.ciudades = res.data
            )
            )
        }
    }
</script>
<style lang="stylus">
  .icons-example
    .vs-input
      margin 15px
</style>
