<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <div>
                <vs-table :data="users">
                    <template slot="header">
                        <h3>
                            Ciudadesdd
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre del Estadio
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
                            <vs-td>
                                <vs-row vs-w="12">
<!--                                    <div>-->
<!--                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">-->
<!--                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>-->
<!--                                            <vs-popup class="gestion_Ciudad"  title="Editar Ciudad" :active.sync="popupActivo">-->
<!--                                                <p>Hola Guapo</p>-->
<!--                                            </vs-popup>-->
<!--                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>-->
<!--                                            <vs-popup class="gestion_Ciudad"  title="Eliminar Ciudad" :active.sync="popupActivo1">-->
<!--                                                <p>Hola Guapo, ¿vas a eliminarme?</p>-->
<!--                                            </vs-popup>-->
<!--                                        </vs-col>-->
<!--                                    </div>-->
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
    import Axios from "axios"
    export default {
        name: "Ciudad",
        data(){
            return{
                users:[
                    {
                        "nombre": "La Ceiba",
                    },
                    {
                        "nombre": "Tegucigalpa",
                    },
                    {
                        "nombre": "San Pedro Sula",
                    },
                ],
                popupActivo:false,
                popupActivo1:false,
            }
        },
    }
</script>

<style scoped>

</style>
