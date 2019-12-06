<template lang="html">
    <div class="centerx">
        <vs-button @click="popupActivo=true" vs-type="gradient" size="medium" color="success" icon="create" style="margin-right: 10px"></vs-button>
        <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
<p>HOla</p>
        </vs-popup>
        <vs-button @click="popupActivo=true" vs-type="flat" size="medium" color="danger" icon="delete_sweep"></vs-button>
        <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
            <p>HOla</p>
        </vs-popup>
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

