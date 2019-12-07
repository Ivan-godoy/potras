<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
            <div>
                <vs-table :data="users">
                    <template slot="header">
                        <h3>
                            Jugadores
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre
                        </vs-th>
                        <vs-th>
                            Fecha de Nacimiento
                        </vs-th>
                        <vs-th>
                            Nacionalidad
                        </vs-th>
                        <vs-th>
                            Lugar de Nacimiento
                        </vs-th>
                        <vs-th>
                            Peso
                        </vs-th>
                        <vs-th>
                            Estatura
                        </vs-th>
                        <vs-th>
                            Imagen
                        </vs-th>
                        <vs-th>
                            Posición
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

                            <vs-td :data="data[indextr].nacimiento">
                                {{data[indextr].fecha_nacimiento}}
                            </vs-td>
                            <vs-td :data="data[indextr].nacionalidad">
                                {{data[indextr].nacionalidad}}
                            </vs-td>

                            <vs-td :data="data[indextr].nacionalidad">
                                {{data[indextr].lugar_nacimiento}}
                            </vs-td>

                            <vs-td :data="data[indextr].peso">
                                {{data[indextr].peso}}
                            </vs-td>
                            <vs-td :data="data[indextr].estatura">
                                {{data[indextr].estatura}}
                            </vs-td>
                            <vs-avatar :badge="tr.id" size="50px"
                                       :src="`https://thumbs.dreamstime.com/z/silueta-de-un-jugador-f%C3%BAtbol-del-atleta-que-juega-con-una-bola-en-108740657.jpg`"/>
                            <vs-td :data="data[indextr].posicion">
                                {{data[indextr].posicion}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-popup class="gestion_Jugador"  title="Editar Jugador" :active.sync="popupActivo">
                                                <p>Hola Guapo</p>
                                            </vs-popup>
                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                            <vs-popup class="gestion_Jugador"  title="Eliminar Jugador" :active.sync="popupActivo1">
                                                <p>Hola Guapo, ¿vas a eliminarme?</p>
                                            </vs-popup>
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
        name: "Jugador",
        data(){
            return{
                users:[
                    {
                        "nombre": "Oliver",
                        "fecha_nacimiento": "2 de abril 1997",
                        "nacionalidad": "Hondureña",
                        "lugar_nacimiento": "La Ceiba",
                        "peso": "209 lbs",
                        "estatura": "1.86",
                        "posicion": "Delantero",
                    },
                    {
                        "nombre": "Marcelo",
                        "fecha_nacimiento": "3 de abril 1983",
                        "nacionalidad": "Brasileña",
                        "lugar_nacimiento": "Brasilia",
                        "peso": "180 lbs",
                        "estatura": "1.77",
                        "posicion": "Lateral",
                    },
                ],
                popupActivo:false,
                popupActivo1:false
            }
        }
    }
</script>

<style scoped>

</style>