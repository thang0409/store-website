import Home from '~/component/Home/Home.js';

const publicRoutes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/xxx',
        component: '',
        layout: null
    }
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
