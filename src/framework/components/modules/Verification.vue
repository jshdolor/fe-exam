<template>
    <PlainFormLayout>
        <v-container fill-height fluid>
            <v-row justify="center" align="center">
                <v-col xl="6" lg="8" md="10" sm="8">
                    <Logo />
                    <div class="text-h4 my-2">Hi {{ name }},</div>
                    <div class="text-h6 font-weight-regular mt-2 mb-6">
                        Please enter the verification code sent to your email
                    </div>
                    <VerificationForm> </VerificationForm>
                </v-col>
            </v-row>
        </v-container>
    </PlainFormLayout>
</template>
<script>
import PlainFormLayout from "~/framework/layouts/PlainForm";
import VerificationForm from "~/framework/components/forms/Verification";
import Logo from "~/framework/components/widgets/Logo";

export default {
    name: "Verification",
    components: {
        Logo,
        PlainFormLayout,
        VerificationForm,
    },
    computed: {
        name() {
            return this.$store.state.user.profile?.name;
        },
    },
};
</script>

