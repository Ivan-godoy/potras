<template lang="html">
  <div>
    <vs-table
      @selected="handleSelected"
      :data="ciudades">
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

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in ciudades" >
          <vs-td :data="data[indextr].nombre">
            {{data[indextr].nombre}}
          </vs-td>
          <vs-td :data="data[indextr].nombre">
            {{data[indextr].nombre}}
          </vs-td>
          <vs-td :data="data[indextr].nombre">
            {{data[indextr].nombre}}
          </vs-td>
          <vs-td :data="data[indextr].nombre">
            {{data[indextr].id}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <vs-popup fullscreen :title="'Creando jugadores del equipo '+titulo" :active.sync="popupActivo4">
      <popup :id="id_tr"/>
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
                ciudades: null,
                popupActivo4:false,
                titulo: null,
                id_tr: null
            }
        },
        methods:{
            handleSelected(tr) {
                this.titulo = tr.nombre
                this.popupActivo4 = true
                this.id_tr = tr.id
            },
        },
        mounted() {
            axios.get('http://134.209.172.114/equipos/').then(
                res =>(
                    this.ciudades = res.data
            )
            )
        }
    }
</script>
