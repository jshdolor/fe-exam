<template>
    <PlainFormLayout>
        <v-container fill-height fluid>
            <v-row justify="center" align="center">
                <v-col xl="6" lg="8" md="10" sm="8">
                    <Logo />
                    <div class="text-h3 my-2">Welcome Back</div>
                    <div class="text-h6 font-weight-regular mt-2 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <LoginForm> </LoginForm>
                    <v-btn
                        block
                        color="accent"
                        large
                        :to="{ name: 'registration-page' }"
                    >
                        Don't have an account? Register</v-btn
                    >
                </v-col>
            </v-row>
        </v-container>
    </PlainFormLayout>
</template>
<script>
import PlainFormLayout from "~/framework/layouts/PlainForm";
import LoginForm from "~/framework/components/forms/Login";
import Logo from "~/framework/components/widgets/Logo";

export default {
    name: "Login",
    components: {
        Logo,
        PlainFormLayout,
        LoginForm,
    },
};
</script>

