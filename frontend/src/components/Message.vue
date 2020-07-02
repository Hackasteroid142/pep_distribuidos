<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card id="tarjeta">
                    <h1 class="d-flex justify-center" id="tituloMensaje">{{ titulo }}</h1>
                    <p v-show="titulo === 'Listo'" id="texto">La solicitud que ha realizado fue enviada con exito.</p>
                    <p v-show="titulo === 'ERROR'" id="texto">Hubo un error en su solicitud. Puede que le falte rellenar uno o más datos.</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Message',
    props: ['titulo']
}
</script>

<style>

#tituloMensaje{
    color: #223a49;
}

#texto{
    text-align: center;
    color: #223a49;
}

#tarjeta{
    width: 42%;
    margin: auto;
}

</style>