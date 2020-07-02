<template>
    <v-containter>
        <v-row>
            <v-col>
                <v-card>
                    <h1>{{ titulo }}</h1>
                </v-card>
            </v-col>
        </v-row>
    </v-containter>
</template>

<script>
export default {
    name: 'Message',
    props: ['titulo']
}
</script>