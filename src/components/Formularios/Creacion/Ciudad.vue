<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="3">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        Creacion de ciudades
                    </h3>
                </div>
                <form
                    action="#"
                    >
                    <div>

                        <div class="centerx">
                            <vs-input label-placeholder="Nombre de la Ciudad" v-model="NombreCiudad"/>
                        </div>

                    </div>
                    <div slot="footer">
                        <vs-row vs-justify="flex-end">
                            <vs-button color="success" type="filled" icon="done">Guardar Ciudad</vs-button>
                        </vs-row>
                    </div>
                </form>
            </vs-card>
        </vs-col>
        <vs-col type="flex" class="tarjetas" vs-justify="center" vs-align="center" vs-w="5">
            <vs-card actionable class="cardx">
                <TablaCiudades/>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import TablaCiudades from "../../Tablas/TablaCiudades";
    export default {
        name: "Ciudad",
        components:{TablaCiudades},
        data(){
            return {
                NombreCiudad:'',
            }
        }
    }
</script>

<style scoped lang="stylus">
    .default-input
        .inputx
            margin 10px
    .tarjetas
        padding 30px
</style>
