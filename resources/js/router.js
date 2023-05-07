import Dashboard from './components/Dashboard.vue';
import Manu1 from './pages/Manu1/Manu1.vue';
import Manu2 from './pages/Manu2/Manu2.vue';
import Manu3 from './pages/Manu3/Manu3.vue';
import Manu4 from './pages/Manu4/Manu4.vue';
import Manu5 from './pages/Manu5/Manu5.vue';

export default [
    {
        name: 'admin.dashboard',
        path: '/admin/dashboard',
        component: Dashboard,
    },
    {
        name: 'admin.manu1',
        path: '/admin/manu1',
        component: Manu1,
    },
    {
        name: 'admin.manu2',
        path: '/admin/manu2',
        component: Manu2,
    },
    {
        name: 'admin.manu3',
        path: '/admin/manu3',
        component: Manu3,
    },
    {
        name: 'admin.manu4',
        path: '/admin/manu4',
        component: Manu4,
    },
    {
        name: 'admin.manu5',
        path: '/admin/manu5',
        component: Manu5,
    },
]