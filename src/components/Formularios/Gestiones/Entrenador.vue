<template lang="html">
  <div>
    <vs-table max-items="3" pagination :data="entrenadores">
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
          Equipo
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

          <vs-td :data="indextr.lugar_nacimiento">
            {{indextr.lugar_nacimiento}}
          </vs-td>

          <vs-td :data="indextr.fecha_nacimiento">
            {{indextr.fecha_nacimiento}}
          </vs-td>

          <vs-td :data="indextr.equipo">
            {{indextr.equipo}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
  import Axios from "axios"
    export default {
        name: "Entrenador",
        data(){
            return{
                entrenadores: null,
                users:[
                    // {
                    //     "nombre": "Edgardo Argueta",
                    //     "nacionalidad": "Hondureña",
                    //     "lugar_nacimiento": "San Juan Pueblo",
                    //     "fecha_nacimiento": "15 de Septiembre 1999",
                    //     "foto_entrenador": "Argueta.jpg",
                    //     "equipo": "Barcelona",
                    // },
                    // {
                    //     "nombre": "Edgardo Argueta",
                    //     "nacionalidad": "Hondureña",
                    //     "lugar_nacimiento": "San Juan Pueblo",
                    //     "fecha_nacimiento": "15 de Septiembre 1999",
                    //     "foto_entrenador": "Argueta.jpg",
                    //     "equipo": "Barcelona",
                    // },
                    // {
                    //     "nombre": "Edgardo Argueta",
                    //     "nacionalidad": "Hondureña",
                    //     "lugar_nacimiento": "San Juan Pueblo",
                    //     "fecha_nacimiento": "15 de Septiembre 1999",
                    //     "foto_entrenador": "Argueta.jpg",
                    //     "equipo": "Barcelona",
                    // },
                ],
                popupActivo:false,
                popupActivo1:false
            }
        },
        methods: {
            CargarEntrenadores(){
                Axios.get("http://134.209.172.114/entrenadores/").then(
                    res => (
                        this.entrenadores = res.data
                    )
                )
            }
        },
        mounted() {
            this.CargarEntrenadores();
        }
    }
</script>

<style scoped>

</style>
