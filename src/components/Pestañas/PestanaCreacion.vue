<template>
    <div>
        <vs-tabs :color="colorx">
                <div>
                    <div>
                        <vs-tab @click="colorx = 'warning'" label="Estadio/Ciudad">
                            <div class="con-tab-ejemplo">
                                <FormularioEstadio/>
                            </div>
                        </vs-tab>
                    </div>
                    <vs-tab @click="colorx = 'success'" label="Equipo">
                        <div class="con-tab-ejemplo">
                            <Equipos/>
                        </div>
                    </vs-tab>
                </div>
                <div>
                    <vs-tab @click="colorx = 'danger'" label="Entrenador">
                        <div class="con-tab-ejemplo">
                            <Entrenador/>
                        </div>
                    </vs-tab>
                </div>
                <div>
                    <vs-tab @click="colorx = 'warning'" label="Jugador">
                        <div class="con-tab-ejemplo">
                          <Jugador/>
                        </div>
                    </vs-tab>
                </div>
                <div>
                    <vs-tab @click="colorx = 'warning'" label="Arbitro">
                        <div class="con-tab-ejemplo">
                            <Arbitro/>
                        </div>
                    </vs-tab>
                </div>
        </vs-tabs>
    </div>
</template>

<script>
    import Ciudad from "../Formularios/Creacion/Ciudad";
    import Entrenador from "../Formularios/Creacion/Entrenador";
    import FormularioEstadio from "../Formularios/Creacion/FormularioEstadio";
    import Equipos from "../Formularios/Creacion/Equipos";
    import Jugador from "../Formularios/Creacion/Jugador";
    import Arbitro from "../Formularios/Creacion/Arbitro";
    export default {
        name: "PestanaCreacion",
        data:()=>({
            colorx:'success'
        }),
        components:{Ciudad, Entrenador, FormularioEstadio, Equipos, Jugador, Arbitro}
    }
</script>

<style scoped lang="stylus">

</style>
