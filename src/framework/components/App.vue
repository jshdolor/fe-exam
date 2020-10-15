<template>
    <v-app>
        <v-main>
            <router-view></router-view>
            <v-snackbar
                v-model="message.show"
                :color="message.success ? 'success' : 'error'"
                :timeout="6000"
            >
                {{ message.text }}
            </v-snackbar>
        </v-main>
    </v-app>
</template>

<script>
import EventEmitter from "~/infrastructure/EventEmitter";
export default {
    name: "App",

    components: {},

    data: () => ({
        message: {
            show: false,
            text: "",
            success: false,
        },
    }),

    mounted() {
        EventEmitter.$on("showMessage", (msg, success = false) => {
            this.message = {
                show: true,
                text: msg,
                success,
            };
        });
    },
};
</script>
