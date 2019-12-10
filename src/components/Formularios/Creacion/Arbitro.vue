<template>
    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="5">
            <vs-card actionable class="cardx">
                <div slot="header">
                    <h3>
                        Hello world !
                    </h3>
                </div>
                <div slot="media">

                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-6">

                        </div>
                        <div class="col-6">

                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button color="success" type="filled" icon="done">Guardar Arbitro</vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    export default {
        name: "Arbitro"
    }
</script>

<style scoped lang="stylus">

</style>