<template>
    <v-form ref="form" v-model="valid" :disabled="loading">
        <v-text-field
            v-model="token"
            :rules="rules.token"
            label="Verification Code"
            :error-messages="errors.token"
            @input="errors.token = []"
        ></v-text-field>

        <v-btn
            :loading="loading"
            large
            class="my-4"
            color="primary"
            @click="submit"
            block
            >Submit</v-btn
        >
    </v-form>
</template>
<script>
import VerificationService from "~/application/services/authentication/Verification";
import VerificationRequest from "~/application/services/authentication/requests/Verification";
import { verification as rules } from "~/framework/components/forms/rules";

export default {
    name: "VerificationForm",
    data: () => ({
        token: "",
        rules,
        valid: true,
        errors: {},
        loading: false,
    }),
    methods: {
        async submit() {
            this.$refs.form.validate();
            if (this.valid) {
                const request = new VerificationRequest({ token: this.token });
                this.loading = true;

                const {
                    errorMessages = null,
                } = await VerificationService.handle(request.toJSON());

                this.loading = false;

                if (errorMessages) {
                    this.errors = errorMessages;
                    return;
                }

                this.$router.replace({ name: "login-page" });
            }
        },
    },
};
</script>