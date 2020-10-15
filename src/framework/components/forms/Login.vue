<template>
    <v-form ref="form" v-model="valid" :disabled="loading">
        <v-text-field
            required
            v-model="form.email"
            autofocus
            label="Username"
            @input="errors.username = []"
            :error-messages="errors.username"
            :rules="rules.username"
        ></v-text-field>
        <v-text-field
            label="Password"
            required
            v-model="form.password"
            :type="!showAsPassword ? 'text' : 'password'"
            :append-icon="!showAsPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :error-messages="errors.password"
            :rules="rules.password"
            @input="errors.password = []"
            @click:append="showAsPassword = !showAsPassword"
        ></v-text-field>
        <v-btn
            @click="submit"
            :loading="loading"
            large
            class="my-4"
            color="primary"
            block
            >Login</v-btn
        >
    </v-form>
</template>
<script>
import LoginService from "~/application/services/authentication/Login";
import LoginRequest from "~/application/services/authentication/requests/Login";
import { login as rules } from "~/framework/components/forms/rules";

export default {
    name: "LoginForm",
    data: () => ({
        showAsPassword: true,
        form: {
            password: "",
            email: "",
        },
        errors: {},
        loading: false,
        valid: true,
        rules,
    }),
    methods: {
        async submit() {
            this.$refs.form.validate();

            if (!this.valid) {
                return;
            }

            this.loading = true;
            const request = new LoginRequest(this.form);

            const { token, user, errorMessages } = await LoginService.handle(
                request.toJSON()
            );

            this.loading = false;

            if (errorMessages) {
                this.errors = errorMessages;
                return;
            }

            this.$store.dispatch("session/setToken", token);
            this.$store.dispatch("user/setProfile", user);
            this.$refs.form.reset();
            this.$router.replace({ name: "home-page" });
        },
    },
};
</script>