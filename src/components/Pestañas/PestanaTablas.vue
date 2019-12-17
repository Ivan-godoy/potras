<template>
    <div>
        <vs-tabs :color="colorx">
            <div>
                <vs-tab @click="colorx = 'success'" label="Encuentros">
                    <div class="con-tab-ejemplo">
                        <Encuentros :id_temporada="temporada"/>
                    </div>
                </vs-tab>
            </div>
            <div>
                <vs-tab @click="colorx = 'success'" label="Tabla de Posiciones">
                    <div class="con-tab-ejemplo">

                    </div>
                </vs-tab>
            </div>
            <div>
                <vs-tab @click="colorx = 'danger'" label="Tabla de Goleadores">
                    <div class="con-tab-ejemplo">
                      <Goleadores :id_temporada="temporada"/>
                    </div>
                </vs-tab>
            </div>
            <div>
                <vs-tab @click="colorx = 'warning'" label="Tabla de Amonestaciones">
                    <div class="con-tab-ejemplo">

                    </div>
                </vs-tab>
            </div>
            <div>
                <vs-tab @click="colorx = 'warning'" label="Resultados">
                    <div class="con-tab-ejemplo">

                    </div>
                </vs-tab>
            </div>
        </vs-tabs>
    </div>
</template>

<script>
    import Encuentros from "../TablasTemporada/Encuentros";
    import Goleadores from "../TablasTemporada/Goleadores";
    export default {
        name: "PestanaTablas",
        components: {Goleadores, Encuentros},
        component:{Encuentros},
        data:()=>({
            colorx:'success',
            temporada: null
        }),
        mounted() {
            let url =  window.location.pathname
            let array = url.split('/')
            this.temporada = array[2]
        }
    }
</script>

<style scoped>

</style>
