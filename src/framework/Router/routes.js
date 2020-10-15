import Home from '~/framework/components/modules/Home';
import Registration from '~/framework/components/modules/Registration';
import Login from '~/framework/components/modules/Login';
import Verification from '~/framework/components/modules/Verification';

import requireAuthMiddleware from '~/framework/middleware/requireAuth';
export default [
    {
        path: '/',
        beforeEnter: (to, from, next) => {
            requireAuthMiddleware(next);
        },
        name: 'home-page',
        component: Home,
    },
    {
        name: 'registration-page',
        path: '/register',
        component: Registration,
    },
    {
        path: '/login',
        name: 'login-page',
        component: Login,
    },
    {
        path: '/verify',
        beforeEnter: (to, from, next) => {
            requireAuthMiddleware(next, 'registration-page');
        },
        name: 'verification-page',
        component: Verification,
    },
];
