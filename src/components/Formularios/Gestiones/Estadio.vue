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
                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-popup class="gestion_Estadio"  title="Editar Estadio" :active.sync="popupActivo">
                                                <vs-row vs-justify="center">
                                                    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">

                                                        <FormEquipo titulo="Creacion de Equipo"/>


                                                    </vs-col>
                                                    <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="3">
                                                        <vs-card actionable class="cardx">
                                                            <div slot="header">
                                                                <h3>
                                                                    Edición de ciudades
                                                                </h3>
                                                            </div>
                                                            <div>
                                                                <div class="centerx">
                                                                    <vs-input   label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
                                                                </div>

                                                            </div>
                                                            <div slot="footer">
                                                                <vs-row vs-justify="flex-end">
                                                                    <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
                                                                </vs-row>
                                                            </div>

                                                        </vs-card>
                                                        <ErroresValidacion v-if="DecisionError === 'Ciudad'" :errors="errors"/>
                                                    </vs-col>
                                                </vs-row>
                                            </vs-popup>
                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                            <vs-popup class="gesion_Estadio"  title="Eliminar Estadio" :active.sync="popupActivo1">
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
        name: "Estadio",
        data(){
            return{
                users:[
                    {
                        "nombre": "Estadio Ceibeño",
                        "capacidad": "35,000 personas",
                        "ciudad": "La Ceiba",
                    },
                    {
                        "nombre": "Estadio Ceibeño",
                        "capacidad": "35,000 personas",
                        "ciudad": "La Ceiba",
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