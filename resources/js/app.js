import './bootstrap';

import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
// import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import Router from './router.js';
import 'admin-lte/plugins/chart.js/Chart.min.js'

// window.Vue = require('vue');
// Vue.comments('products',require('./pages/Manu1/Manu1.vue').default);

const app = createApp({});

const router = createRouter({
    routes: Router,
    history: createWebHistory(),
});

app.use(router);
app.mount('#app');


