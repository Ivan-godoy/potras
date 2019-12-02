import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from  'vuesax'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
Vue.config.productionTip = false;
Vue.use(Vuesax)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

