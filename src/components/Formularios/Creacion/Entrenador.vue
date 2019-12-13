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
                <vs-select-item :value="item.id" :text="item.nombre" v-for="(item) in equipos" />
              </vs-select>
            </div>
            <div class="contenedor">
              <div class="centerx">
                <h6 class="text-center">Subir Foto</h6>
                <!--subir imagen-->
                <vs-upload
                        id="file"
                        :show-upload-button="false"
                        :limit="1"
                        :text="'Seleccionar Imagen del Entrenador'"
                        @change="NombreFile"
                />
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
    </vs-col>
  </vs-row>
</template>

<script>
    import Axios from "axios";
    export default {
        methods:{
            successUpload(){
                this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
          CargarEquipos(){
            Axios.get("http://134.209.172.114/api/equipos/").then(
                    res => (
                            this.equipos = res.data
                    )
            )
          },
          NombreFile: function(){
            this.file = document.getElementById("file").files[0];
            console.log(this.file)
          },
          checkForm: function () {
            if (this.NombreEntrenador && this.NacionalidadEntrenador && this.LugarNacimiento
                    && this.FechaNacimiento && this.equipos){
              this.GuardarEntrenador()
            }
            this.errors = [];
            if (!this.NombreEntrenador){
              this.errors.push("El campo nombre equipo es requerido.")
            }
            if (!this.NacionalidadEntrenador){
              this.errors.push("El campo de la nacionalidad es requerido.")
            }
            if (!this.LugarNacimiento){
              this.errors.push("El campo de lugar de nacimiento es requerido.")
            }
            if (!this.FechaNacimiento){
              this.errors.push("El campo fecha fundacion es requerido.")
            }
            if(this.SelectEquipos.value > 0){
              this.errors.push("El campo ciudad se requerido.")
            }
          },
          GuardarEntrenador: function () {
            let data = new FormData();
            data.append('imagen', this.file);
            data.append('nombre', this.NombreEntrenador);
            data.append('nacionalidad', this.NacionalidadEntrenador);
            data.append('lugar_nacimiento', this.LugarNacimiento);
            data.append('fecha_nacimiento', this.FechaNacimiento);
            data.append('equipo', this.SelectEquipos);
            Axios.post('http://134.209.172.114/api/entrenadores/',data,{
                      headers:{
                        'Content-Type': 'multipart/form-data'
                      }
                    }
            ).then(this.openConfirm())
          },
          openConfirm(){
            this.$vs.dialog({
              color: 'success',
              title: `Guardado`,
              text: 'Se ha guardado exitosamente el Entrenador '+this.NombreEntrenador+'.'
            })
          },
        },
        name: "Entrenador",
        data(){
            return {
                NombreEntrenador:'',
                NacionalidadEntrenador: '',
                LugarNacimiento: '',
                FechaNacimiento: '',
                SelectEquipos: "",
                equipos: null,
                errores: [],
                file:''
            }
        },
      mounted(){
        this.CargarEquipos();
      },
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