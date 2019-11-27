import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Aquí se debe de integrar el uso de vuex

new Vue({
    render: h => h(App)
}).$mount('#app')