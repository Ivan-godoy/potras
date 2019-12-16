import Vue from'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Creacion from "../view/Creacion";
import Gestiones from "../view/Gestiones";
import Temporadas from "../components/Formularios/Temporada/Temporada";
import Tablas from "../components/Pestañas/PestanaTablas"
import Login from "../view/Login";

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'index', component: Login},
    {path: '/inicio', name: 'inicio', component: App},
    {path: '/creacion', name: 'creacion', component: Creacion},
    {path: '/gestiones', name:'gestiones',component: Gestiones},
    {path: '/tablas', name:'tablas',component: Tablas},
    {path: '/temporadas', name:'temporadas',component: Temporadas}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
