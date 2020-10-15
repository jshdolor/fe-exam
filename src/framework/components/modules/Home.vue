<template>
    <v-app>
        <v-app-bar
            elevation="1"
            :clipped-left="drawer.clipped"
            outlined
            color="primary"
            app
        >
            <v-app-bar-nav-icon
                class="white--text"
                @click="drawer = !drawer"
            ></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-sheet color="grey lighten-4" class="pa-4">
                <v-avatar
                    class="mb-4"
                    color="grey darken-1"
                    size="64"
                ></v-avatar>

                <div>{{ profile.name }}</div>
                <div>{{ profile.email }}</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list>
                <v-list-item @click="logout" link>
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <div class="text-h1">Welcome {{ profile.name }}!</div>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Home",
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer: true,
    }),
    computed: {
        profile() {
            return this.$store.state.user.profile;
        },
    },
    methods: {
        logout() {
            //no preserving of access token yet -- exam
            window.location.reload();
        },
    },
};
</script>