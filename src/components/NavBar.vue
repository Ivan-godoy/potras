<template>
    <div>
        <vs-navbar class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                    <vs-button @click="$store.commit('switchNav')" type="line" icon="reorder"></vs-button>
                </vs-navbar-title>
            </div>

            <vs-navbar-item index="0">
                <a href="#">Home</a>
            </vs-navbar-item>
            <vs-navbar-item index="1">
                <a href="#">News</a>
            </vs-navbar-item>
            <vs-navbar-item index="2">
                <a href="#">Update</a>
            </vs-navbar-item>
        </vs-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar",

    }
</script>

<style scoped>

</style>
