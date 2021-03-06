# Pep 1 Sistemas distribuidos

Por:

- Vicente Vega Toro

## Contexto

La pandemia restringe la movilidad de las personas, esto debido a que se debe cumplir una cuarentena para que la enfermedad no se propague. Es así que para transitar en cualquier lugar publico es de suma importancia requerir de un permiso de movilidad.

Estos permisos son entregados de manera online a través de la página [comisariavirtual.cl](https://comisariavirtual.cl/), los cuales tienen ciertos motivos. Todo con la finalidad de probar, en caso de fiscalización, la legalidad de transitar en sectores públicos.

## Evaluación

Como se menciona anteriormente, los permisos son entregados de manera online, por lo que se pide simular una arquitectura que permita realizar permisos de circulación. El sistema web debe estar realizado de la siguiente manera.

![Arquitectura](./Images/arquitectura.png)

Además, se debe analizar las características visto en clases de los sistemas distribuidos, indicando cuales cumple y cuáles no.

## Tecnologías

Para la realización de esta prueba se utilizaron las siguientes tecnologías:

- Frontend: Vue.js
- Backend: node.js
- DB: postgresql

Cabe destacar que también se utilizó **Docker-compose** para la implementación de la página web, por lo que cada parte de la arquitectura (Frontend, Backend y DB), están en un Docker.

Finalmente, la arquitectura resultante del sistema es el siguiente. 

![ArquitecturaProyecto](./Images/proyecto.png)

## Iniciar

Como se menciona anteriormente, al utilizar **Docker-compose** solo se necesita utilizar el comando *Docker-compose up* en la carpeta del proyecto para que este funcione.

## Características de los sistemas distribuidos

A continuación se listan las características de los sistemas distribuidos y se indica si lo aplicado cumple o no con la característica.

|Característica|Descripción|¿Lo poseé el sistema?|
|--------------|-----------|---------------------|
|Escalabilidad|Un sistema es escalable si el aumento de servicios se puede suplir dinámicamente, es decir, el sistema es capaz de aumentar o disminuir la cantidad de recursos según lo que se demande. Este puede ser horizontal, donde se agregan más recursos, o vertical, donde se aumentan las capacidades de los recursos.|El sistema actualmente no es escalable, debido a que no puede disminuir o aumentar sus recursos según la demanda. No se implementa caché, por lo que no se puede buscar rápidamente la respuesta a algunas consultas, tampoco particiones por lo que no se puede distribuir las consultas. Es así que se pueden generar cuellos de botella si es que se envían muchas consultas.|
|Transparencia|Corresponde al hacer creer al usuario y las aplicaciones que el sistema web esta corriendo en una sola máquina y no que los procesos y recursos están distribuidos en varias máquinas.|Actualmente el sistema solo corre en una máquina y no en diversas, por lo que el sistema no se puede considerar transparente. Además, al utilizar docker este solo corre en la máquina actual, por lo que no hay una distribución de trabajo.|
|Disponibilidad|Se refiere a facilitar a los usuarios y aplicaciones acceder a recursos remotos de manera eficiente.| No, ya que el sistema es implementado de manera local, por lo que de no funcionar el computador o uno de los componentes, el usuario no podrá ingresar al sistema ya que este estará caído|
|Apertura|Indica que el sistema puede ser extendido fácilmente a través de reglas estándar que facilitan la comunicación entre componentes. Esto puede ser de hardware y software. Se mide a través de lo fácil que se puede integrar un nuevo servicio sin perjudicar o duplicar los existentes.| Este sistema cumple con esta condición debido a que el estándar utilizado para comunicar los componentes (Back-end y Front-end) es hecho a través del estándar API REST|

## Pruebas y resultados

Para la realización de pruebas se utiliza usando el software [artillery.js](https://artillery.io/). En este se establecen dos campos importantes, **duration** y **arrivalRate**, donde el primero define el tiempo de la prueba y el segundo cuántos usuarios virtuales se crean para consultar la API. Cabe destacar que todos los usuarios realizan una consulta POST hacia el backend.

Cada usuario virtual creado saca su información del archivo **data.csv** que contiene datos aleatorios de permisos. Cabe destacar que al ser aleatorios muchos datos pueden no tener sentido.

Otra cosa a considerar es que las pruebas fueron realizadas en una máquina local.

Los resultados se hicieron con la cantidad de usuarios de 20, 100, 250, 1000, 3000 y 5000. 

| Cantidad de Usuarios | 20 | 100 |250|1000|3000|5000|
| -------------------- |:--:|:---:|:-:|:--:|:--:|:--:|
|Escenarios lanzados|1200|6000|15000|60000|180180|300000|
|Escenarios completados|1200|6000|15000|13469|22850|61445|
|Respuesta por segundo|19.85|99.16|247.61|683.14|679.77|841.07|
|Tiempo de respuesta min (seg)|0.0036|0.0030|0.0064|1.3808|0.2334|1.0133|
|Tiempo de respuesta max (seg)|0.2815|0.2279|0.3739|22.6474|54.2756|27.5566|
|Tiempo de respuesta promedio (seg)|0.0106|0.010|0.0168|20.8766|38.8858|17.8300|
Error ||||EBUSY: 46490 EMFILE: 41|EBUSY: 157116 EMFILE: 214|EBUSY: 238400 EMFILE: 155|

Como se puede ver en los resultados, los tiempos de respuesta comienzan a aumentar, además también comienza a aumentar la cantidad de casos fallidos. Todo esto se debe a que el sistema no está capacitado para recibir tantas peticiones al mismo tiempo, generando un cuello de botella y tiempo de espera mayores. Esto se puede ver además en los errores **EBUSY** y **EMFILE**, donde el primero indica que no se puede acceder a un archivo ya que otro lo está ocupando y el segundo indica que se tiene abierto muchos archivos, por lo que viendo la cantidad de estos errores van aumentando mientras más usuarios se creen.