import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            component: () => import('../components/Base.vue'),
            children: [
                {
                    path:'/',
                    component: () => import('../components/Frontview.vue'),
                },
                {
                    path:'/dash',
                    component: () => import('../components/DashBoard.vue'),
                },
                {
                    path:'/wholesaler',
                    component: () => import('../page/vendor/wholesaleList/Main.vue'),
                },
                {
                    path:'/orderHistory',
                    component: () => import('../page/vendor/orderHistory/Main.vue'),
                },

            ]
        },
        {
            path:'/sign-in',
             component: () => import('../page/sign-in/Main.vue'),
        },
        {
            path:'/sign-up',
             component: () => import('../page/sign-up/Main.vue'),
        },
    ],
})