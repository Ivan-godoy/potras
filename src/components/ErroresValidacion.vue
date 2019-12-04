<template>
    <vs-list v-if="errors.length">
        <vs-list-header title="Errores" color="danger"></vs-list-header>
        <vs-list-item icon="clear" color="danger" v-for="error in errors" :title="error">
        </vs-list-item>
    </vs-list>
</template>

<script>
    export default {
        name: "ErroresValidacion"
    }
</script>

<style scoped>

</style>
