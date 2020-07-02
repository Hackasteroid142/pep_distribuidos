<template>
  <v-container fluid id="principal" style="height:100%">
    <v-row style="height:100%" >
      <v-col cols="8" class="d-flex justify-center align-center display-2"  >
        <h1 id="titulo1">Comisaria Virtual</h1> 
      </v-col>
      <v-col cols="4"  class="d-flex justify-center align-center">
        <v-btn x-large  id="boton" to="/permiso" >Solicitar Permiso</v-btn> 
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style>

#principal{
  background-image: url("../assets/santiago.jpg");
  background-size: cover;
}

#titulo1{
  font-family: 'Courier New', Courier, monospace;
  color: white;
  
}

#boton{
  background-color: #3f8977;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  width: 55%;
  height: 7%;
  font-size: 137%;
}

</style>
