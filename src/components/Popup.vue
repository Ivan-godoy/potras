<template>
  <div>
    <div class="row">

      <div class="col">
        <FormJugador titulo="Formulario Jugador" :id_equipo="id"/>
      </div>

      <div class="col-sm-5">
        <FormJugador titulo="Formulario Jugador"/>
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
        }
    }
</script>

<style scoped>

</style>
