<template lang="html">
  <vs-row vs-justify="center" vs-w="10">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="5">
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
        <div>
        <vs-row vs-justify="flex-end">
          <vs-button @click="checkForm" color="success" type="filled" icon="create" style="margin-right: 20px"
                     title="Modificar Entrenador"/>
          <vs-button @click="EliminarDatos" color="danger" type="filled" icon="delete_sweep" title="Eliminar Entrenador"/>
        </vs-row>
        </div>
      </vs-card>
      <vs-list v-if="errors.length">
        <vs-list-header title="Errores" color="danger"></vs-list-header>
        <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
        </vs-list-item>
      </vs-list>
    </vs-col>

    <!---Tablas-->
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="7">
    <vs-card actionable class="cardx">
      <vs-table
              v-model="selected"
              @selected="handleSelected"
              pagination
              max-items="10"
              search
              :data="entrenadores">
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
            Equipo de Nacimiento
          </vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
            <vs-td :data="data[indextr].nombre">
              {{data[indextr].nombre}}
            </vs-td>
            <vs-td :data="data[indextr].nacionalidad">
              {{data[indextr].nacionalidad}}
            </vs-td>

            <vs-td :data="data[indextr].lugar_nacimiento">
              {{data[indextr].lugar_nacimiento}}
            </vs-td>

            <vs-td :data="data[indextr].fecha_nacimiento">
              {{data[indextr].fecha_nacimiento}}
            </vs-td>

            <vs-td :data="data[indextr].equipo">
              {{data[indextr].equipo.nombre}}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>
  </vs-col>
  </vs-row>
</template>

<script>
  import axios from "axios"
    export default {
        name: "Entrenador",
        data(){
          return{
            selected:[],
            errorsNom: [],
            errorsLug: [],
            errorsNa: [],
            errorsFe: [],
            errorsPo: [],
            errorsFo: [],
            entrenadores: null,
            NombreEntrenador:'',
            NacionalidadEntrenador: '',
            LugarNacimiento: '',
            FechaNacimiento: null,
            imagen: null,
            equipo: null,
            equipos: null,
            errors:[],
            NombreFile: '',
            SelectEquipos:'',
          }
        },
        methods: {
            CargarEntrenadores(){
                axios.get("http://134.209.172.114/api/entrenadores/").then(
                    res => (
                        this.entrenadores = res.data
                    )
                )
            },
            successUpload(){
              this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
            },
            CargarEquipos(){
              axios.get("http://134.209.172.114/api/equipos/").then(
                      res => (
                              this.equipos = res.data
                      )
              )
            },
          handleSelected(tr) {
            this.NombreEntrenador = tr.nombre;
            this.NacionalidadEntrenador = tr.nacionalidad;
            this.LugarNacimiento = tr.lugar_nacimiento;
            this.FechaNacimiento = tr.fecha_nacimiento;
            this.SelectEquipos = tr.equipo.nombre;
          },
          validacionNom: function(){
            this.errorsNom = [];
            let LetrasExpresion = new RegExp(/^[A-Za-z\s]+$/);
            if (this.NombreEntrenador.length < 3 || !this.NombreEntrenador) {
              this.errorsNom.push("El campo Nombre del arbitro debe tener al menos 3 caracteres")
            }
            if (!LetrasExpresion.test(this.NombreEntrenador)) {
              this.errorsNom.push("El campo Nombre del arbitro solo acepta caracteres alfabeticos")
            }
          },
          validacionNa: function(){
            this.errorsNa = [];
            let LetrasExpresion = new RegExp(/^[A-Za-z\s]+$/);
            if (this.NacionalidadEntrenador.length < 3 || !this.NacionalidadEntrenador) {
              this.errorsNa.push("El campo de Nacionalidad del arbitro no debe tener al menos 3 caracteres")
            }
            if (!LetrasExpresion.test(this.NacionalidadEntrenador)) {
              this.errorsNa.push("El campo de Nacionalidad del arbitro solo acepta caracteres alfabeticos")
            }
          },
          validacionFe: function(){
            this.errorsFe = [];
            if (!this.FechaNacimiento) {
              this.errorsFe.push("El campo Fecha de Nacimiento del arbitro no debe estar vacio")
            }
          },
          validacionLu: function(){
            this.errorsLug = [];
            if (this.LugarNacimiento.length < 3 || !this.LugarNacimiento) {
              this.errorsLug.push("El campo Lugar de Nacimiento debe tener al menos 3 caracteres")
            }
          },
          validacionEq: function(){
            this.errorsPo = [];
            if (!this.SelectEquipos){
              this.errorsPo.push("El campo Equipo no debe estar vacio")
            }
          },
          checkForm: function () {
            if (this.errorsNom.length === 0 && this.errorsLug.length === 0 && this.errorsNa.length === 0 && this.errorsFe.length === 0 && this.errorsPo.length === 0 && this.errorsFo.length === 0 ) {
              this.CambioDatos();
            }else{
              this.validacionNom();
              this.validacionEq();
              this.validacionFe();
              this.validacionLu();
              this.validacionNa();
            }
          },
          CambioDatos: function () {
            let data = new FormData();
            data.append('nombre', this.NombreEntrenador);
            data.append('equipo', this.SelectEquipos);
            data.append('fecha_nacimiento', this.FechaNacimiento);
            data.append('nacionalidad', this.NacionalidadEntrenador);
            data.append('lugar_nacimiento', this.LugarNacimiento);
            axios.put('http://134.209.172.114/api/entrenadores/'+'\\', data,{
              headers:{
                'Content-Type': 'multipart/form-data'
              }
            }).then(
                    this.openConfirm(),
                    this.NombreEntrenador = '',
                    this.SelectEquipos = '',
                    this.FechaNacimiento = '',
                    this.NacionalidadEntrenador = '',
                    this.LugarNacimiento = '',
            )
          },
          EliminarDatos: function () {
            let data = new FormData();
            data.append('nombre', this.NombreEntrenador);
            data.append('posicion', this.SelectEquipos);
            data.append('fecha_nacimiento', this.FechaNacimiento);
            data.append('nacionalidad', this.NacionalidadEntrenador);
            data.append('lugar_nacimiento', this.LugarNacimiento);
            axios.delete('http://134.209.172.114/api/entrenadores/'+'\\', data,{
              headers:{
                'Content-Type': 'multipart/form-data'
              }
            }).then(
                    this.openDelete(),
                    this.NombreEntrenador = '',
                    this.SelectEquipos = '',
                    this.FechaNacimiento = '',
                    this.NacionalidadEntrenador = '',
                    this.LugarNacimiento = '',
            )
          },
          openDelete(){
            this.$vs.dialog({
              color: 'danger',
              title: `Eliminado`,
              text: 'Se han Eliminado los datos de '+this.NombreEntrenador+'.'

            })
          },
          openConfirm(){
            this.$vs.dialog({
              color: 'success',
              title: `Guardado`,
              text: 'Se han modificaco los datos de '+this.NombreEntrenador+'.'

            })
          }
        },
        mounted() {
            this.CargarEntrenadores();
          this.CargarEquipos();
        }
    }
</script>

<style scoped>

</style>
