# Diamond - Shop
![React](https://img.shields.io/badge/react-18.2.0-%2361DAFB?style=for-the-badge&logo=react)
>Realizado por Tomás Margiottiello.

## Introducción
Diamond - Shop es un ecommerce realizado con ReactJS como proyecto final para el curso de Desarrollo FrontEnd en ReactJS para CoderHouse. Tiempo estimado de dos meses entre cursado y desarrollo de la aplicacion.

La temática es sobre camisetas de fútbol de distintos países, clubes argentinos y europeos. La idea surge con el fin de un fácil acceso a imágenes ya que hay gran cantidad en internet y no solamente quedarnos con un ecommerce de ropa.

Para la visualización y conocer la app mas a fondo se cuenta con una breve descripcion de la instalación. Igualmente para un más fácil acceso se encuentra en el siguiente link de github pages.

<!-- Pagina a github pages -->

## Instalación
<!-- Como se creo la app -->
<!-- Como se corre la app (clone, npm start y demas) -->
<!-- Como se instalan las dependencias -->

## Funcionalidades
Como ya fue mencionado previamente la aplicación web es un ecommerce de camisetas de fútbol. Si bien de cierta forma es una simulación, nos permite realizar un recorrido completo para la compra de un producto o más, desde que lo seleccionamos hasta que se nos genera una orden de compra.

### Detalle:
- Navegación: por medio de componentes y hooks de React, además de la dependencia *react-router-dom* la app cuenta con una libre navegación entre diferentes pantallas cargando y descargando los componentes necesarios, sin necesidad de recargar la página. Por medio de botones guía y sentido común, la navegación del sitio es sencilla y sin complicaciones extra para su entendimiento.

- Filtrado categorias: se cuenta con filtros para los productos, separándolos por categorías. En este caso selecciones, clubes argentinos y clubes europeos. Solución escalable para el agregado de múltiples categorías extra.

- Detalle de producto: podemos ver cada producto en detalle, mostrando su imagen más grande, una descripción, el precio y la posibilidad de agregar al carrito y/o a favoritos.

- Favoritos: como fue mencionado cada producto puede ser agregado/quitado de favoritos y cuenta con su respectiva sección para el manejo en conjunto de los mismos.

- Carrito: podemos agregar múltiples items a la vez en el carrito, teniendo una pantalla distinta en caso de que no hayamos elegido nada todavía. En el detalle se muestran los productos seleccionados, las cantidades y el precio total para terminar la compra.

- Control de stock: cada item en particular cuenta con un stock disponible que no se puede superar al momento de elegir los productos. Tiene validaciones encargadas de que esto se cumpla.

- Generación de orden: una vez llenado el carrito se nos despliega un formulario para completar ciertos datos y generar la orden. Se envía esta información a firebase donde se genera un documento devolviendonos así un ID único que identifica a la compra y es mostrado al usuario.

## Gif recorrido
>El siguiente gif muestra el recorrido para realizar una compra.
<!-- Gif explicativo mostrando el recorrido de una compra -->
<!-- Link al drive en caso de que no pueda subirlo aca o tambien dejarlo aca -->

## Código
<!-- Explicacion de que se viene a continuacion -->

### Componentes
<!-- Que componentes hay y porque estan -->
<!-- Para que sirven -->

### Dependencias
<!-- Explicar para que estan las dependencias, mostrar todas -->
![Bootstrap](https://img.shields.io/badge/bootstrap-v5.2.0-%236610f2?style=flat-square)
![React-Bootstrap](https://img.shields.io/badge/react--bootstrap-v2.5.0-%236610f2?style=flat-square)
![React-Toastify](https://img.shields.io/badge/react--toastify-v9.0.8-cb3234?style=flat-square)
![Firebase](https://img.shields.io/badge/firebase-v9.9.2-orange?style=flat-square)
![React-router-dom](https://img.shields.io/badge/react--router--dom-v6.3.0-blue?style=flat-square)
![React-spinners](https://img.shields.io/badge/react--spinners-v0.13.4-brightgreen?style=flat-square)
![Sass](https://img.shields.io/badge/sass-1.53.0-ff69b4?style=flat-square)

### Base de datos
<!-- Hablar unicamente de la dependencia de Firebase -->

## Mejoras
<!-- Que se puede agregar al proyecto, funcionalidades extras, que tan facil/dificil podria llegar a ser -->
<!-- Que se puede mejorar de lo que ya tengo, codigo repetido, funcionalidades con bugs, abstracciones en componentes reutilizables -->