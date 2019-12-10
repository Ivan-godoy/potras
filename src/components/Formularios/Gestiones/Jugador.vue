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
                                        <vs-col :key="index" vs-type="flex" vs-justify="center" vs-align="center" vs-w="15">
                                            <vs-button @click="popupActivo=true"  vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
                                            <vs-popup class="gestion_Jugador"  title="Editar Jugador" :active.sync="popupActivo">
                                                <vs-row class="container-fluid" vs-justify="center">
                                                    <vs-col  type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="20">
                                                        <vs-card actionable class="cardx" >
                                                            <div slot="header">
                                                                <h3>
                                                                    Edición de Jugador
                                                                </h3>
                                                            </div>
                                                            <div class="row">

                                                                <div class="col-6">
                                                                    <h5>Jugador</h5>
                                                                    <vs-select autocomplete class="selectExample1" v-model="SelectNombre">
                                                                        <vs-select-item :key="index1" :value="item1.value1" :text="item1.text1" v-for="(item1,index1) in options11" />
                                                                    </vs-select>
                                                                    <h6 class="text-center">Subir Foto</h6>
                                                                    <vs-upload class="col-12" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="row">
                                                                        <small class="text-center col-10">Fecha de Nacimiento</small>
                                                                        <vs-input type="date" class="inputx col-10" label-placeholder="" v-model="FechaNacimiento"/>
                                                                    </div>
                                                                    <div class="row">
                                                                        <vs-input class="inputx col-10" label-placeholder="Nombre Completo del Jugador" v-model="NombreJugador"/>
                                                                    </div>
                                                                    <div class="row">
                                                                        <vs-input type="inputx" class="inputx col-10" label-placeholder="Numero de Jugador" v-model="NumeroJugador"/>
                                                                    </div>
                                                                    <div class="row">
                                                                        <vs-input class="inputx col-10" label-placeholder="Lugar de Nacimiento" v-model="LugarNacimiento"/>
                                                                    </div>
                                                                    <div class="row">
                                                                        <vs-input class="inputx col-10" label-placeholder="Lugar de Nacionalidad del Jugador" v-model="NacionalidadJugador"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="centerx default-input">
                                                                    <div class="contenedor">
                                                                        <vs-input type="inputx" class="inputx" label-placeholder="Peso del Jugador el Lb" v-model="PesoJugador"/>
                                                                        <vs-input type="inputx" class="inputx" label-placeholder="Estatura del Jugador en Metros" v-model="EstaturaJugador"/>
                                                                    </div>
                                                                    <div class="contenedor">
                                                                        <vs-select
                                                                                autocomplete
                                                                                class="selectExample"
                                                                                label="Selección de Posición"
                                                                                v-model="SelectPosicion"
                                                                        >
                                                                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                                                                        </vs-select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div slot="footer">
                                                                <vs-row vs-justify="flex-end">
                                                                    <vs-button @click="checkForm" color="success" type="filled" icon="done">Guardar Jugador</vs-button>
                                                                </vs-row>
                                                            </div>
                                                        </vs-card>
                                                    </vs-col>
                                                </vs-row>
                                            </vs-popup>
                                            <vs-button @click="popupActivo1=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                            <vs-popup class="gesion_Jugador"  title="Eliminar Jugador" :active.sync="popupActivo1">
                                                <p>Hola Guapo, ¿vas a eliminarme?</p>
                                                <h5>Jugador</h5>
                                                <vs-row>
                                                <vs-select autocomplete class="selectExample1" v-model="SelectNombre">
                                                    <vs-select-item :key="index1" :value="item1.value1" :text="item1.text1" v-for="(item1,index1) in options11" />
                                                </vs-select>
                                                <vs-button  vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
                                                </vs-row>
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
