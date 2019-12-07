<template lang="html">
    <div>
        <vs-table
                @selected="handleSelected"
                :data="ciudades">
            <template slot="header">
                <h3>
                    Ciudades Existentes
                </h3>
            </template>
            <template slot="thead">
                <vs-th>
                    #
                </vs-th>
                <vs-th>
                    Nombre
                </vs-th>
                <vs-th>
                    Acciones
                </vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" v-for="(tr, item) in ciudades" >
                    <vs-td :data="data[item].id">
                        {{data[item].id}}
                    </vs-td>

                    <vs-td :data="data[item].nombre">
                        {{data[item].nombre}}
                    </vs-td>



                </vs-tr>
            </template>
        </vs-table>
    </div>
</template>

<script>
    import Axios from "axios";

    export default {
        name:'TablaCiudades',
        data:()=>{
            return{
                ciudades:null,
            }
        },
        methods:{
            handleSelected(tr) {
                this.$vs.notify({
                    title:`Haz seleccionado la ciudad ${tr.nombre}`,
                })
            },
        },
        mounted() {
            Axios.get("http://134.209.172.114/ciudades/").then(
                res => (
                    this.ciudades = res.data
                )
            )
        }
    }
</script>
