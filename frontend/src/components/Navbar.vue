<template>
  <div>
    <v-app-bar
      id="titulo"
      flat
      dark
    >

      <v-toolbar-title to="/permiso">Comisaria virtual</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn dark text to="/permiso">
          Permisos
      </v-btn>

      <v-btn dark text to="/">
        Inicio
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
    background-color: #223a49;
    font-family: 'Courier New', Courier, monospace;
}

</style>