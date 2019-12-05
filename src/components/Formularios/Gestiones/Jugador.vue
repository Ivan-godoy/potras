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
                            Equipo
                        </vs-th>
                        <vs-th>
                            Fecha de Fundación
                        </vs-th>
                        <vs-th>
                            Esquema Habitual
                        </vs-th>
                        <vs-th>
                            Logo del Equipo
                        </vs-th>
                        <vs-th>
                            Estadio
                        </vs-th>
                        <vs-th>
                            Jugadores
                        </vs-th>
                        <vs-th>
                            Modificar
                        </vs-th>
                        <vs-th>
                            Eliminar
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].nombre">
                                {{data[indextr].nombre}}
                            </vs-td>

                            <vs-td :data="data[indextr].fundacion">
                                {{data[indextr].fecha_fundacion}}
                            </vs-td>

                            <vs-td :data="data[indextr].esquema">
                                {{data[indextr].esquema_habitual}}
                            </vs-td>

                            <vs-td :data="data[indextr].logo">
                                {{data[indextr].logo_equipo}}
                            </vs-td>
                            <vs-td :data="data[indextr].estadio">
                                {{data[indextr].estadio}}
                            </vs-td>
                            <vs-td :data="data[indextr].jugadores">
                                {{data[indextr].jugadores}}
                            </vs-td>
                            <vs-td>
                                <div>
                                    <vs-button vs-type="gradient" size="medium" color="success" icon="create"></vs-button>
                                </div>
                            </vs-td>
                            <vs-td>
                                <div>
                                    <vs-button vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                </div>
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
        data:()=>({
            users:[
                {
                    "nombre": "Barcelona",
                    "fecha_fundacion": "2 de abril 1997",
                    "esquema_habitual": "Primera",
                    "logo_equipo": "Logo.jpg",
                    "estadio": "Ceibeño",
                    "jugadores": "24",
                },
                {
                    "nombre": "Barcelona",
                    "fecha_fundacion": "2 de abril 1997",
                    "esquema_habitual": "Primera",
                    "logo_equipo": "Logo.jpg",
                    "estadio": "Ceibeño",
                    "jugadores": "24",
                },
                {
                    "nombre": "Barcelona",
                    "fecha_fundacion": "2 de abril 1997",
                    "esquema_habitual": "Primera",
                    "logo_equipo": "Logo.jpg",
                    "estadio": "Ceibeño",
                    "jugadores": "24",
                },

            ]
        })
    }
</script>

<style scoped>

</style>