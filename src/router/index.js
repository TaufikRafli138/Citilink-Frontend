import { createRouter, createWebHashHistory } from "vue-router";

import Dashboard from '../pages/HalamanDashboard.vue';
import DataTableAccount from '../pages/component/DataTableAccount.vue';
import Createform from '../pages/component/CreateForm.vue';
import LoginForm from '../pages/component/LoginForm.vue'
import Navbar from '../pages/component/NavbarAtas.vue'
import Sidebar from '../pages/component/Sidebar.vue'
import registerform from '../pages/component/registerform.vue'
const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'profile',
        path: '/profile',
        component: DataTableAccount
    },
    {
        name: 'create',
        path: '/createform',
        component: Createform
    },
    {
        name: 'Login',
        path: '/app/login',
        component: LoginForm
    },
    {
        name: 'Navbar',
        path: '/app/navbar',
        component: Navbar
    },
    {
        name: 'Sidebar',
        path: '/app/Sidebar',
        component: Sidebar
    },
    {
        name: 'register',
        path: '/app/register',
        component: registerform
    }
    
];

const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHashHistory(),
        routes,
    });
    return router;
}