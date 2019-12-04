import Vue from'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Home from "../view/Home";
import Creacion from "../view/Creacion";
import Gestiones from "../view/Gestiones";
import Temporada from "../view/Temporada";
import Login from "../view/Login";

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'index', component: Login},
    {path: '/inicio', name: 'index', component: App},
    {path: '/creacion', name: 'creacion', component: Creacion},
    {path: '/gestiones', name:'gestiones',component: Gestiones},
    {path: '/temporada', name:'temporada',component: Temporada}

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
