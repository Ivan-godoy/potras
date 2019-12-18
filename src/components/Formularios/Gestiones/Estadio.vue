<template lang="html">
  <div>
    <vs-table max-items="5" pagination :data="estadios">
      <template slot="header">
        <h3>
          Estadios
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Nombre Estadio
        </vs-th>
        <vs-th>
          Capacidad
        </vs-th>
        <vs-th>
          Ciudad
        </vs-th>
      </template>

      <template>
        <vs-tr :key="indextr" v-for="(indextr) in estadios" >
          <vs-td :data="indextr.nombre">
            {{indextr.nombre}}
          </vs-td>

          <vs-td :data="indextr.capacidad">
            {{indextr.capacidad}}
          </vs-td>

          <vs-td :data="indextr.ciudad">
            {{indextr.ciudad}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
    export default {
        name: "Estadio",
        data(){
            return{
                estadios: null,
                users:[
                    {
                        "nombre": "Estadio Ceibeño",
                        "capacidad": "35,000 personas",
                        "ciudad": "La Ceiba",
                    },
                    {
                        "nombre": "Estadio Ceibeño",
                        "capacidad": "35,000 personas",
                        "ciudad": "La Ceiba",
                    },
                ],
                popupActivo:false,
                popupActivo1:false
            }
        },
        methods:{
            CargarEstadios(){
                Axios.get("http://134.209.172.114/estadios/").then(
                    res => (
                        this.estadios = res.data
                    )
                )
            }
        },
        mounted() {
            this.CargarEstadios();
        }
    }
</script>

<style scoped>

</style>
