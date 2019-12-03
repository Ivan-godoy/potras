<template>

    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card actionable class="cardx" >
                <div slot="header">
                    <h3>
                        Creacion de estadio
                    </h3>
                </div>
                <div>
                    <div class="contenedor centerx default-input">
                        <vs-input class="inputx" label-placeholder="Nombre del Estadio" v-model="NombreEstadio"/>
                        <vs-input class="inputx" label-placeholder="Capacidad Maxima del Estadio" v-model="CapacidadMaxima"/>
                        <vs-select
                                autocomplete
                                class="selectExample"
                                label="Ciudades"
                                v-model="SelectCiudad"
                        >
                            <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options1" />
                        </vs-select>
                    </div>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button color="success" type="filled" icon="done">Guardar Estadio</vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="5">
            <vs-card actionable class="cardx">
                <TablaEstadios/>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import TablaEstadios from "../../Tablas/TablaEstadios";
    export default {
        name: "FormularioEstadio",
        components:{TablaEstadios},
        data(){
            return {
                NombreEstadio:'',
                CapacidadMaxima: '',
                SelectCiudad: '',
                options1:[
                    {text:'La Ceiba',value:0},
                    {text:'Olanchito',value:2},
                    {text:'San Pedro Sula',value:3},
                ],
            }
        }
    }
</script>

<style scoped lang="stylus">
    .cardx
        margin 15px
    .default-input
        .inputx
            margin 15px
            margin-top 30px
    .contenedor
        display flex
        flex-direction row
    .tarjetas
        padding 30px
</style>
