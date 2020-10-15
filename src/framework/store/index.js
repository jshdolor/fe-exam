import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import user from './user';
import session from './session';

export default new Vuex.Store({
    modules: {
        session,
        user,
    },
});
