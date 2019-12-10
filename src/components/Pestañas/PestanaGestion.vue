<template>
<div>
    <vs-tabs :color="colorx">
        <div>
            <vs-tab @click="colorx = 'success'" label="Equipo">
                <div class="con-tab-ejemplo">
                    <Equipo/>
                </div>
            </vs-tab>
        </div>
        <div>
            <vs-tab @click="colorx = 'success'" label="Entrenador">
                <div class="con-tab-ejemplo">
                    <Entrenador/>
                </div>
            </vs-tab>
        </div>
        <div>
            <vs-tab @click="colorx = 'success'" label="Ciudad">
                <div class="con-tab-ejemplo">
                    <Ciudad/>
                </div>
            </vs-tab >
        </div>
        <div>
            <vs-tab @click="colorx = 'success'" label="Estadio">
                <div class="con-tab-ejemplo">
                    <Estadio/>
                </div>
            </vs-tab>
        </div>
        <div>
            <vs-tab @click="colorx = 'success'" label="Jugador">
                <div class="con-tab-ejemplo">
                    <Jugador/>
                </div>
            </vs-tab>
        </div>
    </vs-tabs>
</div>
</template>

<script>
    import Equipo from "../Formularios/Gestiones/Equipo"
    import Entrenador from "../Formularios/Gestiones/Entrenador"
    import Jugador from "../Formularios/Gestiones/Jugador"
    import Estadio from "../Formularios/Gestiones/Estadio"
    import BotonesAccion from "../Formularios/Gestiones/BotonesAccion"
    import Ciudad from "../Formularios/Gestiones/Ciudad"
        export default {
        name: "PestanaGestion",
        data:()=>({
            colorx: 'success'
        }),
        components: {Equipo, Entrenador, Jugador, Estadio, Ciudad, BotonesAccion}
    }
</script>

<style scoped lang="stylus">

</style>
