<template>
    <div>
        <h6>Bienvenidos</h6>
        <Nav/>
        <router-view/>
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    export default {
        name: "App",
        components: {Nav}
    }
</script>

<style>

</style>
