<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <div>
                <vs-table :data="users">
                    <template slot="header">
                        <h3>
                            Estadios
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre del Estadio
                        </vs-th>
                        <vs-th>
                            Capacidad
                        </vs-th>
                        <vs-th>
                            Ciudad
                        </vs-th>
                        <vs-th>
                            Acciones
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].nombre">
                                {{data[indextr].nombre}}
                            </vs-td>

                            <vs-td :data="data[indextr].capacidad">
                                {{data[indextr].capacidad}}
                            </vs-td>

                            <vs-td :data="data[indextr].ciudad">
                                {{data[indextr].ciudad}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-button vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                        </vs-col>
                                    </div>
                                </vs-row>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
        </vs-col>
    </vs-row>
</template>

<script>
    export default {
        name: "Estadio",
        data:()=>({
            users:[
                {
                    "nombre": "Estadio Ceibeño",
                    "capacidad": "35,000 personas",
                    "ciudad": "La Ceiba",
                },
            ]
        })
    }
</script>

<style scoped>

</style>