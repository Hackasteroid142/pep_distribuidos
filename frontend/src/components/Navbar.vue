<template>
  <div>
    <v-app-bar
      color="green"
      flat
      dark
    >

      <v-toolbar-title>Comisaria virtual</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat text to="/permiso">
          Permisos
      </v-btn>

      <v-btn flat text to="/">
        Confirmación
      </v-btn>

      
    </v-app-bar>
  </div>
</template>


<script>
export default {
    
}
</script>

<style >

#titulo{
    color: #4CAF50;
}

</style>