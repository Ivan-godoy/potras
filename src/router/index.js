import Vue from'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Equipos from "../view/Equipos";
import Reciente from "../view/Reciente";
import Home from "../view/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/equipos',
        name: 'equipos',
        component: Equipos
    },
    {
        path: '/reciente', name:'reciente', component:Reciente
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
