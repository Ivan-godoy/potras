<template>
    <div>
        <vs-tabs :color="colorx">
                <div>
                    <vs-tab @click="colorx = 'success'" label="Equipo">
                        <div class="con-tab-ejemplo">
                            Equipo
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
                    <vs-tab @click="colorx = 'warning'" label="Ciudad">
                        <div class="con-tab-ejemplo">
                            <Ciudad/>
                        </div>
                    </vs-tab >
                </div>
                <div>
                    <vs-tab @click="colorx = 'dark'" label="Estadio">
                        <div class="con-tab-ejemplo">
                            <FormularioEstadio/>
                        </div>
                    </vs-tab>
                </div>
                <div>
                    <vs-tab @click="colorx = 'warning'" label="Jugador">
                        <div class="con-tab-ejemplo">
                            Jugador
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
    export default {
        name: "PestanaCreacion",
        data:()=>({
            colorx:'success'
        }),
        components:{Ciudad, Entrenador, FormularioEstadio}
    }
</script>

<style scoped lang="stylus">

</style>
