<template>
    <div>
        <vs-tabs :color="colorx">
            <div>
                <vs-tab @click="colorx = 'success'" label="Encuentros">
                    <div class="con-tab-ejemplo">

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
    export default {
        name: "PestanaTablas",
        data:()=>({
            colorx:'success'
        }),

    }
</script>

<style scoped>

</style>