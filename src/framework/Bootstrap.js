import Vue from 'vue';
import vuetify from '~/framework/plugins/vuetify';
import App from '~/framework/components/App';
import Router from '~/framework/Router';
import store from '~/framework/store';

Vue.config.productionTip = false;

class Bootstrap {
    init() {
        const app = new Vue({
            vuetify,
            store,
            router: new Router().boot(),
            render: (h) => h(App),
        });

        app.$mount('#app');
    }
}

export default Bootstrap;
