import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from '~/application/Config';
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.primary,
                accent: colors.accent,
            },
        },
    },
});
