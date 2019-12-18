<template>
  <vs-row vs-justify="center" vs-w="10">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
      <div>
        <vs-table
          pagination
          max-item="10"
          :data="goleadores">
          <template slot="header">
            <h3>
              Goleadores de la Temporada
            </h3>
          </template>
          <template slot="thead">
            <vs-th>
              Nombre del Equipo
            </vs-th>
            <vs-th>
              Nombre del Jugador
            </vs-th>
            <vs-th>
              Goles
            </vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr  :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
              <vs-td :data="data[indextr].jugador">
                {{data[indextr].jugador}}
              </vs-td>
              <vs-td :data="data[indextr].equipo">
                {{data[indextr].equipo}}
              </vs-td>
              <vs-td :data="data[indextr].goles">
                {{data[indextr].goles}}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Goleadores",
        data() {
            return {
                equipo:null,
                jugador: null,
                goles: Number,
                goleadores:   '',
            }
        },
        methods: {
            handleSelected(tr){
                this.equipo = tr.equipo;
                this.jugador = tr.jugador;
                this.goles = tr.goles;
            },

        },
        mounted() {
            axios.get('http://134.209.172.114/api/goles/ver/').then(
                res => {
                    this.goleadores = res.data;
                }
            );
        }
    }

</script>

<style scoped>

</style>
