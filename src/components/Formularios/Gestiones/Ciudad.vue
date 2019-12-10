<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="7">
            <div>
                <vs-table :data="users">
                    <template slot="header">
                        <h3>
                            Ciudades
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th>
                            Nombre de la Ciudad
                        </vs-th>
                        <vs-th>
                            Acciones
                        </vs-th>
<!--                      <vs-tr v-for="item in ciudades">-->
<!--                        <vs-td v-text="item.NombreCiudad"></vs-td>-->
<!--                        </vs-tr>-->
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].res">
                                {{data[indextr].res}}
                            </vs-td>
                            <vs-td>
                                <vs-row vs-w="12">
                                    <div>
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="10">
                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-popup class="gestion_Ciudad"  title="Editar Ciudad" :active.sync="popupActivo">
                                                <div>
                                                    <vs-row vs-justify="center">
                                                        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="10">
                                                            <vs-card actionable class="cardx">
                                                                <div slot="header">
                                                                    <h3>
                                                                        Edición de ciudades
                                                                    </h3>
                                                                </div>
                                                                <div>
                                                                    <div class="centerx">
                                                                        <h5>Ciudad</h5>
                                                                        <vs-select autocomplete class="selectExample1" v-model="SelectCiudad">
                                                                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options" />
                                                                        </vs-select>
                                                                    </div>
                                                                    <div class="centerx">
                                                                        <vs-input  label-placeholder="Nombre de la Ciudad editado" v-model="NombreCiudad" type="text" id="NombreCiudad"/>
                                                                    </div>

                                                                </div>
                                                                <div slot="footer">
                                                                    <vs-row vs-justify="flex-end">
                                                                        <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
                                                                    </vs-row>
                                                                </div>
                                                            </vs-card>
                                                        </vs-col>
                                                    </vs-row>
                                                </div>
                                            </vs-popup>
                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                            <vs-popup class="gesion_Equipos"  title="Eliminar Ciudad" :active.sync="popupActivo1">
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
      {{ciudades}}
    </vs-row>
</template>

<script>
    import Axios from "axios"
    export default {
        name: "Ciudad",
        data(){
            return{
                ciudades: null,
                users:[
                    // {
                    //     "nombre": "La Ceiba",
                    // },
                    // {
                    //     "nombre": "Tegucigalpa",
                    // },
                    // {
                    //     "nombre": "San Pedro Sula",
                    // },
                ],
                popupActivo:false,
                popupActivo1:false,
            }
        },
        methods: {
            CargarCiudades(){
                Axios.get("http://134.209.172.114/ciudades/").then(
                    res => (
                        this.ciudades = res.data
                    )
                )
            }
        },
    mounted() {
        this.CargarCiudades();
    }
    }
</script>

<style scoped>

</style>
