import VueRouter from 'vue-router';
import routes from './routes';
import { router as routerConfig } from '~/framework/Config';
import Vue from 'vue';

export default class Router {
    constructor(rootRoute = '/') {
        Vue.use(VueRouter);
        this.routes = routes;
        this.routerInstance = null;
        this.rootRoute = rootRoute;
    }

    boot() {
        const routerOptions = {
            base: this.rootRoute,
            mode: routerConfig.ROUTER_MODE,
            routes: this.routes,
        };

        this.routerInstance = new VueRouter(routerOptions);

        return this.routerInstance;
    }
}
