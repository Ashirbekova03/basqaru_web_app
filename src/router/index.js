import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import Register from "@/views/register/index.vue";
import Profile from "@/views/profile/index.vue";
import Lesson from "@/views/lesson/index.vue";
import Wallet from "@/views/wallet/index.vue";
import AddTransaction from "@/views/addTransaction/index.vue";
import Analytics from "@/views/analytics/index.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/lesson',
        name: 'lesson',
        component: Lesson
    },
    {
        path: '/wallet',
        name: 'wallet',
        component: Wallet
    },
    {
        path: '/add-transaction',
        name: 'add-transaction',
        component: AddTransaction
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: Analytics
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
