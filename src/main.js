import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from  'vuesax'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import Vuex from 'vuex';
const $ = require('jquery')
window.$ = $


Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        navActivo: false,
        tokeen: true,
    },
    mutations: {
        switchNav(state){
            state.navActivo =! state.navActivo
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),

}).$mount('#app');


