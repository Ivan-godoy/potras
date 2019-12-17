<template>
  <vs-row vs-justify="center">
    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
      <FormEntrenador :Accion="tipo"/>
    </vs-col>
  </vs-row>
</template>

<script>
    import Axios from "axios";
    import FormEntrenador from "./FormEntrenador";
    export default {
      components:{FormEntrenador},
      data(){
        return{
          tipo: 1
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
