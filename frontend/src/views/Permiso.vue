<template>
  <v-container id="fondo" fluid style="height:100%"> 
    <v-row>
      <v-col>
        <v-card >
          <v-form
          ref="form"
          v-model="valid"
          validate
          >
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="formulario.nombre"
                    :rules="nameRules"
                    label="Nombre Completo"
                    required>
                    </v-text-field>
                </v-col>
                <v-col >
                  <v-text-field
                  v-model="formulario.rut"
                  label="Rut (No usar puntos ni guiones)"
                  required>
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                  v-model="formulario.edad"
                  label="Edad"
                  required>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    v-model="formulario.region"
                    :items="regiones"
                    :rules="[v => !!v || 'Item is required']"
                    label="Región"
                    required>
                  </v-select>
                </v-col>
                <v-col>
                  <v-select
                    v-model="formulario.comuna"
                    :items="comunas[formulario.region]"
                    item-text='comuna'
                    :rules="[v => !!v || 'Item is required']"
                    label="Comuna"
                    required>
                  </v-select>
                </v-col>
              </v-row>
              <v-text-field
              v-model="formulario.direccion"
              label="Direccion"
              required>
              </v-text-field>

              <v-text-field
              v-model="formulario.origen"
              :rules="nameRules"
              label="Origen"
              required>
              </v-text-field>
              <v-text-field
                v-model="formulario.destino"
                :rules="nameRules"
                label="Destino"
                required>
              </v-text-field>
              <v-select
                v-model="formulario.motivo"
                :items="motivos"
                item-text='motivo'
                item-value='id'
                label="Motivo"
                required>
              </v-select>
              <h3 id=descripcion>Descripción del Motivo</h3>
              <p id="descripcion">{{ obtenerDescripcion(formulario.motivo) }}</p>
              <v-row>
                <v-col>
                  <v-btn medium @click="enviarDatos()" id="button">Enviar</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <Message :titulo="titulo"/>
  </v-container>
</template>

<script>
import Message from '@/components/Message.vue'
import axios from 'axios';
  export default {
    name: 'Permiso',
    components: {
    Message
    },
    data: () => ({
      valid: true,
      formulario: {
        rut: null,
        nombre: null,
        edad: null,
        region: null,
        comuna: null,
        direccion: null,
        origen: null,
        destino: null,
        motivo: 0,
      },
      nameRules: [
        v => !!v || 'El nombre es requerido',
      ],
      motivos: [],
      regiones: ['Arica y parinacota','Tarapacá','Antofagasta','Atacama','Coquimbo','Valparaíso','Metropolitana','Del Libertador Bernardo O\'higgins',
                'Del Maule', 'Del Biobío', 'De la Araucanía','De los Ríos', 'De los Lagos', 'Aysén del Gral. Carlos Ibañez del Campo', 'Magallanes y de la Antártica Chilena', 'Ñuble'],
      comunas: {
        'Arica y parinacota': ['Arica', 'Camarones', 'General Lagos', 'Putre'],
        'Tarapacá': ['Alto Hospicio', 'Camiña', 'Colchane', 'Huara', 'Iquique', 'Pica', 'Pozo Almonte'],
        'Antofagasta': ['Antofagasta','Calama','Maria Elena', 'Mejillones', 'Ollagüe', 'San Pedro de Atacama', 'Sierra Gorda', 'Taltal', 'Tocopilla'],
        'Atacama': ['Alto del Carmen', 'Caldera', 'Chañaral', 'Copiapó', 'Diego de Almagro', 'Freirina', 'Huasco', 'Tierra Amarilla', 'Vallenar'],
        'Coquimbo': ['Andacollo', 'Canela', 'Combarbalá','Coquimbo','Illapel','La Higuera','La Serena','Los vilos', 'Monte Patria', 'Ovalle'],
        'Valparaíso': ['Algarrobo','Valparaiso','El tabo','Viña del mar','Quilpué'],
        'Metropolitana': ['Santiago','Las condes','El bosque','San bernardo','Estación Central','Vitacura','La florida'],
        'Del Libertador Bernardo O\'higgins': ['Placilla','Rancagua','Machalí','Graneros'],
        'Del Maule':['Navidad','Cauquenes','Maule','Pencahue','Talca'],
        'Del Biobío': ['Cabrero','Laja','Lota','Talcahuano','Nacimiento'],
        'De la Araucanía':['Angol','Lautaro','Pucón','Toltén','Temuco'],
        'De los Ríos': ['Corral','Los Lagos','Valdivia','Lago Ranco','Mariquina'],
        'De los Lagos': ['Ancud','Frutillar','Puerto Montt','Río Negro','Puqueldón'],
        'Aysén del Gral. Carlos Ibañez del Campo': ['Chile chico','Cisnes','Tortel','Guaitecas','Lago Verde'],
        'Magallanes y de la Antártica Chilena':['Antártica','Laguna Blanca','Punta Arenas','San Gregorio','Torres del Paine'], 
        'Ñuble': ['Coelemu','Yungay','Bulnes','Chillán Viejo','Pemuco'],
      },
      titulo:""
    }),

    created () {
      axios.get('http://localhost:3000/info').
      then(res => {
        this.motivos = res.data;
      })
      .catch(e => {
        console.log(e.response);
      });
    },

    methods: {
      enviarDatos: function () {
        axios.post('http://localhost:3000/permiso/',
        {
          rut: this.formulario.rut,
          nombre: this.formulario.nombre,
          edad: this.formulario.edad,
          region: this.formulario.region,
          comuna: this.formulario.comuna,
          direccion: this.formulario.direccion,
          origen: this.formulario.origen,
          destino: this.formulario.destino,
          motivo: this.formulario.motivo
        }).then(res => {
          this.titulo = res.data;
          this.formulario.nombre = null;
        }).catch(e => {
          this.titulo = "ERROR";
          console.log(e);
        });
      },
      obtenerDescripcion: function(id){
        return this.motivos[id].descripcion;
      }
    },
  }
</script>

<style>

#button{
  background-color: #3f8977;
  color: white;
  font-family: 'Courier New', Courier, monospace;
}

#fondo{
  background-color: #3f8977;
}

#descripcion{
  font-family: 'Courier New', Courier, monospace;
  color: #223a49;
}
</style>