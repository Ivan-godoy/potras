<template>
  <div>
    <div  class="contenedor">
      <div id="formJugador">
        <FormJugador titulo="Creando Jugador" :id_equipo="id"/>
      </div>

      <div>
        <FormJugador id="tablaJugador" titulo="Formulario Jugador"/>
      </div>
    </div>
  </div>
</template>

<script>
  import FormJugador from "./Formularios/Creacion/FormJugador";
    export default {
        name: "Popup",
        components:{FormJugador},
        props:{
            id: Number,
            Logo: String
        }
    }
</script>

<style scoped lang="stylus">
.contenedor
  display: flex
  flex-direction: row
  justify-content: center

#formJugador
  width: 40%
  margin-right: 100px

</style>
