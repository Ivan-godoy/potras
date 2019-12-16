<template lang="html">

    <div id="parentx">

        <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

            <div class="header-sidebar" slot="header">
                <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
                <h4>
                    My Name
                    <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
                </h4>

            </div>
            <vs-sidebar-item index="1" to="/inicio" >Inicio</vs-sidebar-item>
            <vs-sidebar-item to="/creacion" index="2">Creaciones</vs-sidebar-item>
            <vs-sidebar-item to="/gestiones" index="3">Gestiones</vs-sidebar-item>
            <vs-sidebar-item to="/temporadas" index="4">Temporadas</vs-sidebar-item>


            <div class="footer-sidebar" slot="footer">
                <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
                <vs-button icon="settings" color="primary" type="border"></vs-button>
            </div>

        </vs-sidebar>
    </div>

</template>

<script>
  export default {
    name: 'Nav',
      computed: {
        active: {
            get(){
                return this.$store.state.navActivo
            },
            set(NuevoValor){
                this.$store.commit('switchNav')
            }
        }
      }
  }
</script>

<style  lang="stylus">
    .header-sidebar
        display flex
        align-items center
        justify-content center
        flex-direction column
        width 100%
        h4
            display flex
            align-items center
            justify-content center
            width 100%
            > button
                margin-left 10px
    .footer-sidebar
        display flex
        align-items center
        justify-content space-between
        width 100%
        > button
            border 0px solid rgba(0,0,0,0) !important
            border-left 1px solid rgba(0,0,0,.07) !important
            border-radius 0px !important
</style>
