<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
      <vs-card actionable class="cardx" >
        <div slot="header">
          <h3>
            Creacion de Entrenador
          </h3>
        </div>
        <div>
          <div class="centerx default-input">
            <div class="contenedor">
              <vs-input class="inputx" label-placeholder="Nombre del Entrenador" v-model="NombreEntrenador"/>
              <vs-input class="inputx" label-placeholder="Nacionalidad del Entrenador" v-model="NacionalidadEntrenador"/>
              <vs-input class="inputx" label-placeholder="Lugar de Nacimiento" v-model="LugarNacimiento"/>
            </div>
            <div class="contenedor">
              <vs-input type="date" class="inputx" label-placeholder="Fecha de Nacimiento" v-model="FechaNacimiento"/>
              <vs-select
                autocomplete
                class="selectExample"
                label="Selección de Equipos"
                v-model="SelectEquipos"
              >
                <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
              </vs-select>
            </div>
            <div class="contenedor">
              <div class="centerx">
                <h6 class="text-center">Subir Foto</h6>
                <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
              </div>
            </div>
          </div>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="success" type="filled" icon="done">Guardar Entrenador</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="4">
      <vs-card actionable class="cardx">
        <TablaEntrenador/>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
    import TablaEntrenador from "../../Tablas/TablaEntrenador";
    export default {
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            }
        },
        name: "Entrenador",
        components:{TablaEntrenador},
        data(){
            return {
                NombreEquipo:'',
                Esquema: '',
                SelectCiudad: '',
                FechaFundacion: '',
                options1:[
                    {text:'La Ceiba',value:0},
                    {text:'Olanchito',value:2},
                    {text:'San Pedro Sula',value:3},
                ],
            }
        }
    }
</script>
<style scoped lang="stylus">
  .cardx
    margin 15px
  .default-input
    .inputx
      margin 15px
      margin-top 30px
  .contenedor
    display flex
    flex-direction row
  .tarjetas
    padding 10px
</style>
