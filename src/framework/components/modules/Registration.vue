<template>
    <PlainFormLayout>
        <v-container fill-height fluid>
            <v-row justify="center" align="center">
                <v-col xl="6" lg="8" md="10" sm="8">
                    <Logo />
                    <div class="text-h3 my-2">Welcome Back</div>
                    <div class="text-h6 font-weight-regular mt-2 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <RegistrationForm> </RegistrationForm>
                    <v-btn
                        block
                        color="accent"
                        large
                        :to="{ name: 'login-page' }"
                    >
                        Have an account? Login</v-btn
                    >
                </v-col>
            </v-row>
        </v-container>
    </PlainFormLayout>
</template>
<script>
import PlainFormLayout from "~/framework/layouts/PlainForm";
import RegistrationForm from "~/framework/components/forms/Registration";
import Logo from "~/framework/components/widgets/Logo";

export default {
    name: "Login",
    components: {
        Logo,
        PlainFormLayout,
        RegistrationForm,
    },
};
</script>

