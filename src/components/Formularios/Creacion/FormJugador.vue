<template>
  <div>
    <vs-card actionable class="cardx">
      <div slot="header">
        <h3>
          {{titulo}}
        </h3>
      </div>
      <div>
        <div class="contenedor centerx default-input">
          <div class="row">
            <div class="col-6">
              <h6 class="text-center">Subir Foto</h6>
              <input type="file" name="Imagen" id="Imagen" accept="image/*">
              <div class="row">
                <vs-input class="inputx col-10" label-placeholder="Nombre Completo del Jugador" v-model="NombreJugador"/>
              </div>
              <div class="row">
                <vs-input class="inputx col-10" label-placeholder="Lugar de Nacimiento" v-model="LugarNacimiento"/>
              </div>
              <vs-input type="inputx" class="inputx" label-placeholder="Peso del Jugador el Lb" v-model="PesoJugador"/>

            </div>
            <div class="col-6">
              <div class="row">
                <small class="text-center col-10">Fecha de Nacimiento</small>
                <vs-input type="date" class="inputx col-10" label-placeholder="" v-model="FechaNacimiento"/>
              </div>
              <div class="row">
                <vs-input type="inputx" class="inputx col-10" label-placeholder="Numero de Jugador" v-model="NumeroJugador"/>
              </div>
              <div class="row">
                <vs-input class="inputx col-10" label-placeholder="Lugar de Nacionalidad del Jugador" v-model="NacionalidadJugador"/>
              </div>
              <vs-input type="inputx" class="inputx" label-placeholder="Estatura del Jugador en Metros" v-model="EstaturaJugador"/>
              <div class="centerx default-input">
                <div class="contenedor">
                  <vs-select
                    autocomplete
                    class="selectExample"
                    label="Selección de Posición"
                    v-model="SelectPosicion"
                  >
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                  </vs-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <vs-row vs-justify="flex-end">
          <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Jugador</vs-button>
        </vs-row>
      </div>
    </vs-card>
  </div>
</template>

<script>
    export default {
        name: "FormJugador",
        props:{
            titulo: null,
        },
        data(){
            return {
                errors: [],
                NombreJugador:'',
                NumeroJugador:'',
                LugarNacimiento: '',
                NacionalidadJugador: '',
                FechaNacimiento: '',
                PesoJugador: '',
                EstaturaJugador: '',
                SelectPosicion: '',
                options1:[
                    {text:'Portero',value:1},
                    {text:'Defensa',value:2},
                    {text:'Lateral Derecho',value:3},
                    {text:'Lateral Izquierdo',value:4},
                    {text:'Delantero',value:5},
                ],
            }
        },
        methods:{
            checkForm: function () {
                let LetrasExpresion = new RegExp(/^[A-Za-z\s]+$/);
                let NumerosExpresion = new RegExp(/^[0-9]+$/);
                this.errors = [];
                if (this.NombreJugador.length < 3 || !this.NombreJugador){
                    this.errors.push("El campo Nombre del Jugador debe tener al menos 3 caracteres")
                }
                if (!LetrasExpresion.test(this.NombreJugador)){
                    this.errors.push("El campo Nombre del Jugador solo acepta caracteres alfabeticos")
                }
                if (!this.NumeroJugador){
                    this.errors.push("El campo Numero del Jugador no debe estar vacio")
                }
                if (!NumerosExpresion.test(this.NumeroJugador)){
                    this.errors.push("El Campo Numero del Jugador soló acepta Numeros")
                }
                if (this.LugarNacimiento.length < 3 || !this.LugarNacimiento){
                    this.errors.push("El campo Lugar de Nacimiento debe tener al menos 3 caracteres")
                }
                if (this.NacionalidadJugador.length < 3 || !this.NacionalidadJugador){
                    this.errors.push("El campo de Nacionalidad del Jugador no debe tener al menos 3 caracteres")
                }
                if (!LetrasExpresion.test(this.NacionalidadJugador)){
                    this.errors.push("El campo de Nacionalidad del Jugador solo acepta caracteres alfabeticos")
                }
                if (!this.FechaNacimiento){
                    this.errors.push("El campo Fecha de Nacimiento del jugador no debe estar vacio")
                }
                if (!this.PesoJugador){
                    this.errors.push("El campo Peso del Jugador no debe estar vacio")
                }
                if (!this.EstaturaJugador){
                    this.errors.push("El campo estatura del jugador no debe estar vacio")
                }
                if (!this.SelectPosicion){
                    this.errors.push("El campo Seleccionar Jugador no debe estar vacio")
                }
                if (this.errors.length === 0 ){
                    this.PostJugador();
                }
            },
            EnvioDatos: function () {
                Axios.post('http://134.209.172.114/jugadores/',{
                    nombre: this.NombreJugador,
                    fecha_nacimeinto: this.FechaNacimiento,
                    nacionalidad: this.NacionalidadJugador,
                    lugar_nacimeinto: this.LugarNacimiento,
                    peso: this.PesoJugador,
                    estatura: this.EstaturaJugador,
                    imagen: this.Imagen,
                    posicion: this.SelectPosicion
                }).then(
                    this.openConfirm()
                )
            },
            CargarJugador(){
                Axios.get("http://134.209.172.114/jugadores/").then(
                    res => (
                        this.estadios = res.data
                    )
                )
            },
            PostJugador: function(){
                Axios.post('http://134.209.172.114/jugadores/', {
                    nombre: this.NombreJugador,
                    fecha_nacimeinto: this.FechaNacimiento,
                    nacionalidad: this.NacionalidadJugador,
                    lugar_nacimeinto: this.LugarNacimiento,
                    peso: this.PesoJugador,
                    estatura: this.EstaturaJugador,
                    imagen: this.Imagen,
                    posicion: this.SelectPosicion
                }).then(
                    this.openConfirm("el judador "+this.NombreJugador)
                )
            },
    }
</script>

<style scoped>

</style>
