<template>
    <div id="app">
        <div v-if="$store.state.tokeen === false">
            <Login/>
        </div>
        <div v-if="$store.state.tokeen === true">
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
    </div>
</template>

<script>
    import Nav from "./components/Nav";
    import NavBar from "./components/NavBar";
    import Login from "./view/Login";
    export default {
        name: "App",
        components: {Nav, NavBar, Login},
        data(){
            return{
                token: false
            }
        }
    }
</script>

<style lang="stylus">
    #Sidenav
        background antiquewhite
    *::-webkit-scrollbar
        width 0

</style>
