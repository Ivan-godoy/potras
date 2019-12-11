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
            <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Entrenador</vs-button>
          </vs-row>
        </div>
      </vs-card>
      <vs-list v-if="errors.length">
        <vs-list-header title="Errores" color="danger"></vs-list-header>
        <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
        </vs-list-item>
      </vs-list>
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
        name: "Entrenador",
        components:{TablaEntrenador},
        data(){
            return {
                errors: [],
                NombreEntrenador:'',
                NacionalidadEntrenador: '',
                LugarNacimiento: '',
                FechaNacimiento: '',
                SelectEquipos: '',
                options1:[
                    {text:'La Ceiba',value:1},
                    {text:'Olanchito',value:2},
                    {text:'San Pedro Sula',value:3},
                ],
            }
        },
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
            checkForm: function () {
                if (this.NacionalidadEntrenador && this.NombreEntrenador
                    && this.FechaNacimiento && this.LugarNacimiento && this.SelectEquipos){
                    this.EnvioDatos()
                }
                this.errors = [];
                if (!this.NacionalidadEntrenador){
                    this.errors.push("El campo nacionalidad entrenador no debe estar vacio")
                }
                if (!this.NombreEntrenador){
                    this.errors.push("El campo nombre entrenador no debe estar vacio")
                }
                if (!this.FechaNacimiento){
                    this.errors.push("El campo Fecha de Nacimiento no debe estar vacio")
                }
                if (!this.LugarNacimiento){
                    this.errors.push("El campo Lugar de Nacimiento no debe estar vacio")
                }
                if (!this.SelectEquipos){
                    this.errors.push("El campo Seleccionar Equipos no debe estar vacio")
                }
            },
            EnvioDatos: function () {
                Axios.post('http://134.209.172.114/entrenadores/',{
                    nombre: this.NombreEntrenador,
                    nacionalidad: this.NacionalidadEntrenador,
                    lugarNacimiento: this.LugarNacimiento,
                    fechaNacimiento: this.FechaNacimiento,
                    SelectEquipos: this.SelectEquipos
                }).then(
                    this.openConfirm()
                )            },
            openConfirm(){
                this.$vs.dialog({
                    color: 'success',
                    title: `Guardado`,
                    text: 'Los Datos se han guardado exitosamente',
                    accept:this.acceptAlert
                })
            },
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
