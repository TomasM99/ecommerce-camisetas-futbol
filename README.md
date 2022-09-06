# Diamond - Shop :gem:
![React](https://img.shields.io/badge/react-18.2.0-61dafb?style=for-the-badge&logo=react)
>Realizado por Tomás Margiottiello.

## Introducción
Diamond - Shop es un ecommerce realizado con ReactJS como proyecto final para el curso de Desarrollo FrontEnd en ReactJS para CoderHouse. Tiempo estimado de dos meses entre cursado y desarrollo de la aplicacion.

La temática es sobre camisetas de fútbol de distintos países, clubes argentinos y clubes europeos. La idea surge con el fin de un fácil acceso a imágenes ya que hay gran cantidad en internet y no solamente quedarnos con un ecommerce de ropa.

Para la visualización y conocer la app mas a fondo se cuenta con una breve descripcion de la instalación. Igualmente para un más fácil acceso se encuentra en el siguiente link de github pages.

<!-- Pagina a github pages -->

## Instalación
Debemos seguir los siguientes pasos para correr la app en nuestro localhost.

Clonamos el repositorio en nuestra computadora:

`git clone https://github.com/TomasM99/ecommerce-camisetas-futbol.git`

Corremos el siguiente comando desde la consola, parados en la carpeta clonada:

`npm start`

Luego de unos instantes la app se abrirá en nuestro navegador.

## Funcionalidades
Como ya fue mencionado previamente la aplicación web es un ecommerce de camisetas de fútbol. Si bien de cierta forma es una simulación, nos permite realizar un recorrido completo para la compra de un producto o más, desde que lo seleccionamos hasta que se nos genera una orden de compra.

- Navegación por medio de componentes, hooks y dependencias permitiendo mostrar diferentes pantallas sin necesidad de recargar la página.

- Filtrado por categorias de los productos.

- Detalle del producto donde podemos interactuar con el mismo.

- Manejo de favoritos.

- Carrito de compras.

- Control de stock.

- Generación de orden de compra mediante firebase.

## Gif recorrido
>El siguiente gif muestra el recorrido para realizar una compra.
<!-- Gif explicativo mostrando el recorrido de una compra -->
<!-- Link al drive en caso de que no pueda subirlo aca o tambien dejarlo aca -->

## Código
A continuación se comentan un poco los componentes creados y las dependencias utilizadas para enriquecer y facilitar el trabajo.

### Componentes
<!-- Que componentes hay y porque estan -->
<!-- Para que sirven -->

### Dependencias
Todas las dependencias se instalan mediante npm y nos sirven para resolver una pequeña problemática o darnos contenido extra de estilos, etc.

Ejemplo de instalacion:

`npm install sass`

**Dependencias usadas:**

![Bootstrap](https://img.shields.io/badge/bootstrap-v5.2.0-7952b3?style=flat-square&logo=bootstrap)
![React-Bootstrap](https://img.shields.io/badge/react--bootstrap-v2.5.0-7952b3?style=flat-square&logo=bootstrap)

Nos proporciona estilos predefinidos que podemos sobreescribir.

![Sass](https://img.shields.io/badge/sass-1.53.0-cc6699?style=flat-square&logo=sass)

Nos permite escribir las sentencias CSS de una manera mas amigable y sencilla.

![React-Toastify](https://img.shields.io/badge/react--toastify-v9.0.8-blue?style=flat-square&logo=react)

Generacion de alertas y notificaciones ante eventos.

![React-spinners](https://img.shields.io/badge/react--spinners-v0.13.4-brightgreen?style=flat-square&logo=react)

Nos proporciona distintos spinner para pantallas de carga.

![React-router-dom](https://img.shields.io/badge/react--router--dom-v6.3.0-ca4245?style=flat-square&logo=reactrouter)

Libreria utilizada para el manejo de enlaces dentro de React, llevandonos de una pantalla a otra sin recargar el contenido.

**Base de datos:**

![Firebase](https://img.shields.io/badge/firebase-v9.9.2-ffca28?style=flat-square&logo=firebase)

Servicio proporcionado por google que nos brinda distintas funcionalidades, en específico usamos firestore que es una base de datos NoSQL para almacener productos y guardar las órdenes de compras generadas.

## Mejoras
<!-- Que se puede agregar al proyecto, funcionalidades extras, que tan facil/dificil podria llegar a ser -->
<!-- Que se puede mejorar de lo que ya tengo, codigo repetido, funcionalidades con bugs, abstracciones en componentes reutilizables -->