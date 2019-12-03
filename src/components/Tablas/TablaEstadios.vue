<template lang="html">
    <div>
        <vs-table
                @selected="handleSelected"
                :data="users">
            <template slot="header">
                <h3>Estadios Existentes</h3>
            </template>
            <template slot="thead">
                <vs-th>#</vs-th>
                <vs-th>Nombre</vs-th>
                <vs-th>Capacidad Maxima</vs-th>
            </template>
            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                    <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>
                    <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>
                    <vs-td :data="data[indextr].website">{{data[indextr].username}}</vs-td>
                    <vs-td :data="data[indextr].website">{{data[indextr].ciudad}}</vs-td>
                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
    export default {
        name:'TablaEstadios',
        data:()=>({
            users:[
                {
                    "id": 1,
                    "name": "La Ceiba",
                    "username": "2000",
                    "ciudad": "Bret",
                },
                {
                    "id": 2,
                    "name": "Tegucigalpa",
                    "username": "15090",
                    "ciudad": "Teg",
                },
                {
                    "id": 3,
                    "name": "Juticalpa",
                    "username": "9090",
                    "ciudad": "Samantha",
                },
                {
                    "id": 4,
                    "name": "Olanchito",
                    "username": "33900",
                    "ciudad": "Karianne",
                },
                {
                    "id": 5,
                    "name": "San Pedro Sula",
                    "username": "15000",
                    "ciudad": "Kamren",
                },
            ]
        }),
        methods:{
            handleSelected(tr) {
                this.$vs.notify({
                    title:`Haz seleccionado la ciudad ${tr.name}`,
                })
            },
        }
    }
</script>
