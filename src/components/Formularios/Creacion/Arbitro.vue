<template lang="html">
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <FormArbitro/>
        </vs-col>
    </vs-row>
</template>

<script>
    import FormArbitro from "./FormArbitro";
    export default {
        name: "Arbitro",
        components:{FormArbitro},
    }
</script>

<style scoped>

</style>