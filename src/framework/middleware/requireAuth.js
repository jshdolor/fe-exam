import store from '~/framework/store';

const requireAuth = (next, redirect = 'login-page') => {
    if (!store.state.session?.token) {
        next({ name: redirect });
    }
    next();
};

export default requireAuth;
