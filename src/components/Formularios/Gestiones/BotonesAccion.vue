<template lang="html">
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
</template>

<script>
    export default {
        name: "BotonesAccion",
        data(){
            return {
                popupActivo:false,
            }
        }
    }
</script>

