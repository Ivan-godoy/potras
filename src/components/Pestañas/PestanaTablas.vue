<template>
    <div>
        <vs-tabs :color="colorx">
            <div>
                <div>
                    <vs-tab @click="colorx = 'warning'" label="Temporadas">
                        <div class="con-tab-ejemplo">
                            <Temporada/>
                        </div>
                    </vs-tab>
                </div>
                <vs-tab @click="colorx = 'success'" label="Tabla de Posiciones">
                    <div class="con-tab-ejemplo">

                    </div>
                </vs-tab>
            </div>
            <div>
                <vs-tab @click="colorx = 'danger'" label="Tabla de Goleadores">
                    <div class="con-tab-ejemplo">

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
    import Temporada from "../Formularios/Temporada/Temporada";
    export default {
        name: "PestanaTablas",
        data:()=>({
            colorx:'success'
        }),
        components:{Temporada}

    }
</script>

<style scoped>

</style>