<template lang="html">
  <div>
    <vs-table max-items="5" pagination :data="ciudades">
      <template slot="header">
        <h3>
          Ciudades
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Nombre Ciudad
        </vs-th>
        <vs-th>
          Accciones
        </vs-th>
      </template>

      <template>
        <vs-tr :key="indextr" v-for="(indextr) in ciudades" >
          <vs-td :data="indextr.nombre">
            {{indextr.nombre}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
    import Axios from "axios"
    export default {
        name: "Ciudad",
        data(){
            return{
                ciudades: null,
                users:[
                    {
                        "nombre": "La Ceiba",
                    },
                    {
                        "nombre": "Tegucigalpa",
                    },
                    {
                        "nombre": "San Pedro Sula",
                    },
                ],
                popupActivo:false,
                popupActivo1:false,
            }
        },
        methods: {
            CargarCiudades(){
                Axios.get("http://134.209.172.114/ciudades/").then(
                    res => (
                        this.ciudades = res.data
                    )
                )
            }
        },
    mounted() {
        this.CargarCiudades();
    }
    }
</script>

<style scoped>

</style>
