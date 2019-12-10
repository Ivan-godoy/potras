import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from  'vuesax'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import Vuex from 'vuex';



Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        navActivo: false,
        tokeen: true,
    },
    mutations: {
        increment (state) {
            state.count++
        },
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


