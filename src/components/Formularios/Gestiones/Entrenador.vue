<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
            <div>
                <vs-table :data="users">
                    <template slot="header">
                        <h3>
                            Entrenadores
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre Completo
                        </vs-th>
                        <vs-th>
                            Nacionalidad del Entrenador
                        </vs-th>
                        <vs-th>
                            Lugar de Nacimiento del Entrenador
                        </vs-th>
                        <vs-th>
                            Fecha de Nacimiento
                        </vs-th>
                        <vs-th>
                            Foto del Entrenador
                        </vs-th>
                        <vs-th>
                            Equipo que Entrena
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

                            <vs-td :data="data[indextr].nacionalidad">
                                {{data[indextr].nacionalidad}}
                            </vs-td>

                            <vs-td :data="data[indextr].lugar_nacimiento">
                                {{data[indextr].lugar_nacimiento}}
                            </vs-td>

                            <vs-td :data="data[indextr].fecha_nacimiento">
                                {{data[indextr].fecha_nacimiento}}
                            </vs-td>
                            <vs-avatar :badge="tr.id" size="50px"
                                       :src="`https://img.pixers.pics/pho_wat(s3:700/FO/80/15/73/22/700_FO80157322_1fbc30669b67c1f9ef5c4a38cc2aceca.jpg,498,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,278,650,jpg)/vinilos-entrenador-de-futbol-con-la-bola.jpg.jpg`"/>
                            <vs-td :data="data[indextr].equipo">
                                {{data[indextr].equipo}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                    <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
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
        name: "Entrenador",
        data:()=>({
            users:[
                {
                    "nombre": "Edgardo Argueta",
                    "nacionalidad": "Hondureña",
                    "lugar_nacimiento": "San Juan Pueblo",
                    "fecha_nacimiento": "15 de Septiembre 1999",
                    "foto_entrenador": "Argueta.jpg",
                    "equipo": "Barcelona",
                },
                {
                    "nombre": "Edgardo Argueta",
                    "nacionalidad": "Hondureña",
                    "lugar_nacimiento": "San Juan Pueblo",
                    "fecha_nacimiento": "15 de Septiembre 1999",
                    "foto_entrenador": "Argueta.jpg",
                    "equipo": "Barcelona",
                },
                {
                    "nombre": "Edgardo Argueta",
                    "nacionalidad": "Hondureña",
                    "lugar_nacimiento": "San Juan Pueblo",
                    "fecha_nacimiento": "15 de Septiembre 1999",
                    "foto_entrenador": "Argueta.jpg",
                    "equipo": "Barcelona",
                },
            ]
        })
    }
</script>

<style scoped>

</style>