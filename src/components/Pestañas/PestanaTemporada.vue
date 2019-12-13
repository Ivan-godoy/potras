<template>
<div>
    <vs-tabs :color="colorx">
        <div>
            <vs-tab @click="colorx = 'success'" label="Fecha de Temporada">
                <div class="con-tab-ejemplo">
                <Temporada/>
                </div>
            </vs-tab>
            <vs-tab @click="colorx = 'success'" label="Ver Temporadas">
                <div class="con-tab-ejemplo">
                    <VerTemporadas/>
                </div>
            </vs-tab>
        </div>
    </vs-tabs>
</div>
</template>

<script>
    import Temporada from "../Formularios/Temporada/Temporada";
    import VerTemporadas from "../Formularios/Temporada/VerTemporadas";
    export default {
        name: "PestanaTemporada",
        data:()=>({
            colorx: 'success'
        }),
        components:{Temporada, VerTemporadas}
    }
</script>

<style scoped lang="stylus">

</style>
