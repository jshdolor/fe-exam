<template>
    <v-container fill-height fluid class="pa-0">
        <v-row class="fill-height">
            <v-col md="6" class="primary hidden-sm-and-down"> </v-col>
            <v-col sm="12" md="6">
                <slot></slot>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "PlainFormLayout",
};
</script>