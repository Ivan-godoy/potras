<template>
    <div>
        <vs-navbar class="nabarx">
            <div slot="title">
                <vs-navbar-title>
                    <vs-button @click="$store.commit('switchNav')" type="line" icon="reorder"></vs-button>
                </vs-navbar-title>
            </div>
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
