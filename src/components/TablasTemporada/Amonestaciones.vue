<template>
    <vs-row vs-justify="center" vs-w="12">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <div>
                <vs-table
                        pagination
                        max-item="3"
                        :data="amarillas">
                    <template slot="header">
                        <h3>
                            Amarillas
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre
                        </vs-th>
                        <vs-th>
                            Equipo
                        </vs-th>
                        <vs-th>
                            Faltas
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr  :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].jugador">
                                {{data[indextr].jugador}}
                            </vs-td>
                            <vs-td :data="data[indextr].equipo">
                                {{data[indextr].equipo}}
                            </vs-td>
                            <vs-td :data="data[indextr].amarillas">
                                {{data[indextr].amarillas}}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <div>
                <vs-table
                        pagination
                        max-item="3"
                        :data="rojas">
                    <template slot="header">
                        <h3>
                            Rojas
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre
                        </vs-th>
                        <vs-th>
                            Equipo
                        </vs-th>
                        <vs-th>
                            Faltas
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr  :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].jugador">
                                {{data[indextr].jugador}}
                            </vs-td>
                            <vs-td :data="data[indextr].equipo">
                                {{data[indextr].equipo}}
                            </vs-td>
                            <vs-td :data="data[indextr].rojas">
                                {{data[indextr].rojas}}
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
    </vs-row>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Amonestaciones",
        data() {
            return {
                jugador:'',
                equipo:'',
                amarillas:'',
                rojas:''
            }
        },
        methods: {
            handleSelected(tr){
                this.jugador = tr.jugador;
                this.equipo = tr.equipo;
            },

        },
        mounted() {
            axios.get('http://134.209.172.114/api/amonestaciones/amarillas/').then(
                res => {
                    this.amarillas = res.data;
                }
            );
            axios.get('http://134.209.172.114/api/amonestaciones/rojas/').then(
                res => {
                    this.rojas = res.data;
                }
            );
        }
    }

</script>

<style scoped>

</style>