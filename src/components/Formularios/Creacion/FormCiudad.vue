<template>
    <vs-card actionable class="cardx">
        <div slot="header">
            <h3>
                Creacion de ciudades
            </h3>
        </div>
        <div>
            <div class="centerx">
                <vs-input   label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
            </div>

        </div>
        <div slot="footer">
            <vs-row vs-justify="flex-end">
                <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
            </vs-row>
        </div>

    </vs-card>
</template>

<script>
    export default {
        name: "FormCiudad"
    }
</script>

<style scoped>

</style>
