<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="8">
        <div>
            <vs-table :data="users">
                <template slot="header">
                    <h3>
                        Equipos
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
                        Acciones
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
                        <vs-avatar :badge="tr.id" size="50px"
                                   :src="`https://www.photoframemaster.com/res/templates/thumb_small/blue-star-and-gray-soccer.png`"/>
                        <vs-td :data="data[indextr].estadio">
                            {{data[indextr].estadio}}
                        </vs-td>
                        <vs-td :data="data[indextr].jugadores">
                            {{data[indextr].jugadores}}
                        </vs-td>
                        <vs-td>
                            <vs-row vs-w="12">
                               <div>
                                    <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                        <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                        <vs-popup class="gestion_Equipo"  title="Editar Equipo" :active.sync="popupActivo">
                                            <div class="centerx">
                                                <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                                    <vs-row vs-justify="center">
                                                        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="50">
                                                            <vs-card actionable class="cardx" >
                                                                <div slot="header">
                                                                    <h3>Edición de Equipos</h3>
                                                                </div>
                                                                <div class="centerx default-input">
                                                                    <div class="contenedor">
                                                                        <h6>Nombre del Equipo</h6>
                                                                        <!--<vs-input class="inputx" label-placeholder="Nombre del Equipo" v-model="NombreEquipo"/>-->
                                                                        <vs-select autocomplete class="selectExample1" v-model="SelectNombre">
                                                                            <vs-select-item :key="index1" :value="item1.value1" :text="item1.text1" v-for="(item1,index1) in options11" />
                                                                        </vs-select>
                                                                        <h6>Esquema Habitual</h6>
                                                                        <vs-input class="inputx"  label-placeholder="Esquema Habitual" v-model="Esquema"/>
                                                                        <h6>Ciudad</h6>
                                                                        <vs-select autocomplete class="selectExample" v-model="SelectCiudad">
                                                                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                                                                        </vs-select>
                                                                        <h6>Fecha de Fundación</h6>
                                                                        <vs-input type="date" class="inputx"  v-model="FechaFundacion"/>
                                                                    </div>
                                                                    <div class="contenedor">
                                                                        <div class="centerx">
                                                                            <h6 class="text-center">Subir logo</h6>
                                                                            <vs-upload action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div slot="footer">
                                                                    <vs-row vs-justify="flex-end">
                                                                        <vs-button @click="checkForm" color="success" type="filled" icon="done">Editar Equipo</vs-button>
                                                                    </vs-row>
                                                                </div>
                                                            </vs-card>
                                                        </vs-col>
                                                    </vs-row>
                                                </vs-col>
                                            </div>
                                        </vs-popup>
                                        <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                        <vs-popup class="gesion_Equipos"  title="Eliminar Equipo" :active.sync="popupActivo1">
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
      {{equipos}}
    </vs-row>
</template>

<script>
  import Axios from "axios"
    export default {
        name: "Equipo",
        data(){
            return{
                equipos: null,
                users:[
                //     {
                //         "nombre": "Barcelona",
                //         "fecha_fundacion": "2 de abril 1997",
                //         "esquema_habitual": "Primera",
                //         "logo_equipo": "Logo.jpg",
                //         "estadio": "Ceibeño",
                //         "jugadores": "24",
                //     },
                //     {
                //         "nombre": "Barcelona",
                //         "fecha_fundacion": "2 de abril 1997",
                //         "esquema_habitual": "Primera",
                //         "logo_equipo": "Logo.jpg",
                //         "estadio": "Ceibeño",
                //         "jugadores": "24",
                //     },
                //     {
                //         "nombre": "Barcelona",
                //         "fecha_fundacion": "2 de abril 1997",
                //         "esquema_habitual": "Primera",
                //         "logo_equipo": "Logo.jpg",
                //         "estadio": "Ceibeño",
                //         "jugadores": "24",
                //     },
                ],
                popupActivo:false,
                popupActivo1:false
            }
        },
        methods: {
            CargarEquipos(){
                Axios.get("http://134.209.172.114/equipos/").then(
                    res => (
                        this.ciudades = res.data
                    )
                )
            }
        },
        mounted() {
            this.CargarEquipos();
        }
    }
</script>

<style scoped >

</style>
