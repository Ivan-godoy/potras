<template>
    <div id="app">
        <div id="Nav">
            <NavBar/>
        </div>
        <div id="Sidenav">
            <Nav/>
        </div>
        <div id="vistas">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    import NavBar from "./components/NavBar";
    export default {
        name: "App",
        components: {Nav, NavBar}
    }
</script>

<style lang="stylus">
#Sidenav
    background antiquewhite
</style>
