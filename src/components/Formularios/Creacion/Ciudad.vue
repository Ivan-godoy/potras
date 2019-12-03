<template>
    <div class="d-flex justify-content-center">
        <div class="row">
            <div class="col">
                <div class="card" >
                    <div class="card-header">
                        <h6 class="text-center font-weight-boldn">Formulario de creacion de ciudad</h6>
                    </div>
                    <div class="card-body">
                        <form action="">
                            <div class="form-group">
                                <label for="">Nombre de la ciudad</label>
                                <input type="text" class="form-control" placeholder="La Ceiba">
                            </div>
                            <div class="form-group">
                                <vs-button color="warning" type="border">Guardar Ciudad</vs-button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col">
                <TablaCiudades/>
            </div>
        </div>
    </div>
</template>

<script>
    import TablaCiudades from "../../Tablas/TablaCiudades";
    export default {
        name: "Ciudad",
        components:{TablaCiudades}
    }
</script>

<style scoped lang="stylus">
    .row
        width 900px
</style>
