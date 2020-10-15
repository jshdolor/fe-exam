<template>
    <v-form ref="form" v-model="valid" :disabled="loading">
        <v-text-field
            v-model="form.full_name"
            label="Name"
            autofocus
            :rules="rules.full_name"
            :error-messages="errors.full_name"
            @input="errors.full_name = []"
        ></v-text-field>
        <v-text-field
            v-model="form.email"
            label="Email"
            :rules="rules.email"
            :error-messages="errors.email"
            @input="errors.email = []"
        ></v-text-field>
        <v-text-field
            label="Password"
            required
            v-model="form.password"
            :type="!showAsPassword ? 'text' : 'password'"
            :append-icon="!showAsPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="rules.password"
            :error-messages="errors.password"
            @click:append="showAsPassword = !showAsPassword"
            @input="errors.password = []"
        ></v-text-field>
        <v-text-field
            label="Confirm Password"
            v-model="form.password_confirmation"
            required
            :type="!showAsPassword ? 'text' : 'password'"
            :append-icon="!showAsPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordConfirmationRule"
            :error-messages="errors.password_confirmation"
            @click:append="showAsPassword = !showAsPassword"
            @input="errors.password_confirmation = []"
        ></v-text-field>
        <v-btn
            :loading="loading"
            large
            class="my-4"
            color="primary"
            block
            @click="submit"
            >Register</v-btn
        >
    </v-form>
</template>
<script>
import RegistrationService from "~/application/services/authentication/Registration";
import { registration as rules } from "~/framework/components/forms/rules";
import EventEmitter from "~/infrastructure/EventEmitter";

export default {
    name: "RegistrationForm",
    data: () => ({
        valid: true,
        showAsPassword: true,
        form: {
            password: "",
            password_confirmation: "",
            email: "",
            full_name: "",
        },
        rules,
        loading: false,
        errors: {},
    }),
    methods: {
        async submit() {
            this.$refs.form.validate();
            if (this.valid) {
                this.loading = true;

                const {
                    token,
                    user,
                    errorMessages,
                } = await RegistrationService.handle(this.form);
                this.loading = false;

                if (errorMessages) {
                    this.errors = errorMessages;
                    return;
                }

                this.$store.dispatch("session/setToken", token);
                this.$store.dispatch("user/setProfile", user);
                this.$refs.form.reset();
                EventEmitter.$emit(
                    "showMessage",
                    "Registration Complete!",
                    true
                );
                this.$router.replace({ name: "verification-page" });
            }
        },
    },
    computed: {
        passwordConfirmationRule() {
            return [
                (v) => !!v || "The Password Confirmation is required",
                (v) =>
                    this.form.password === v ||
                    "The Password Confirmation does not match",
            ];
        },
    },
};
</script>