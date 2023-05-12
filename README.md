![Badge Completado](https://img.shields.io/badge/STATUS-Completado-brightgreen)
![Badge en Desarollo](https://img.shields.io/badge/VERSION-2.0.26-blue)
![Badge en Desarollo](https://img.shields.io/badge/WEB%20DEPLOY-Firebase-orange)
# Portfolio Web (Front-End) de Argentina Programa 4.0
![banner-ok-argentina-programa](https://github.com/FireDust97/portfolio-FrontEnd/assets/120528153/b5808fa8-a035-4113-a215-ee4412eb23ad)

Con el fin de presentar el trabajo final integrador para el curso de Argentina Programa, este es el portfolio web que reúne todo lo aprendido a lo largo de la cursada haciendo uso de diversas tecnologías para crear una web dinámica y limpia, tanto en funcionamiento como visualización.

## ¿Qué tecnologías utiliza este proyecto?
:large_orange_diamond: HTML5  

:large_blue_diamond: CSS3  

:ballot_box_with_check: TypeScript  

:a: Angular  

:iphone: Bootstrap  

:diamond_shape_with_a_dot_inside: Bootstrap Icons  

:fire: FireBase

## ¿Qué funcionalidades posee la página?
La página permite funcionalidades diferentes para un usuario ordinario y para el desarrollador.

<h3>Para usuarios:</h3>  

La página permite a sus visitantes visualizar la descripción, experiencia laboral, educación recibida, habilidades y proyectos de FireDust97 (Lautaro Ortiz) como programador Full-Stack Jr. En el footer, los usuarios pueden hacer click en su número de teléfono o gmail para contactarlo fácilmente.  

<h3>Como desarrollador:</h3>  

La página cuenta con un botón de Login, que pedirá un usuario y contraseña para ingresar a las nuevas funcionalidades para enviar nuevas entradas hacia la base de datos, entre las que se encuentran:  

- Editar el nombre, apellido, descripción e imagen del desarrollador.  
- Crear, editar y eliminar experiencias laborales.  
- Crear, editar y eliminar las educaciones cursadas.

## Preguntas Frecuentes / Resolución de problemas

- <h3>¿Por qué la consola de desarrollador de la página lanza un error sobre la propiedad 'GetBoundingByRect()'?</h3>  
La propiedad 'GetBoundingByRect()' pertenece a uno de los componentes TS, específicamente al del componente "Acerca de", actuando sobre el contenedor de la foto de perfil. Este método permite que la página detecte el scroll del usuario, permitiendo que la animación de transcisión de dicha foto de perfil inicie **cuando el usuario tenga visualización de ésta,** en vez de iniciar con la carga de la página.  

**Este error no interfiere en ningún momento con el funcionamiento de la página, ni en general ni con la foto de perfil a la que está ligada.** Por lo que se ha pasado por alto, pero intentará corregirse con el tiempo si es posible para dejar una consola limpia.   
  
- <h3>La página utiliza Bootstrap. ¿Significa esto que la página posee un diseño responsive?</h3>
Por supuesto. Se ha hecho uso de columnas y otros estilos de parte de Bootstrap, así como los estilos ordinarios de CSS para crear una página amigable con otros dispositivos, permitiendo visualizar sin problemas el contenido.  
  
- <h3>La página no muestra la información del desarrollador, las experiencias o la educación.</h3>  
Al hacer uso de un plan gratuito en Render y Clever Cloud para la base de datos, es muy probable que ésta se apague al detectar inactividad, para ahorrar recursos en los servidores de estos servicios y darles prioridad a usuarios pagos. Para solucionar este problema y visualizar el contenido de la página, siga los siguientes pasos:  
1. Ingrese a https://backend-portfolioargprog.onrender.com (*Más información en https://github.com/FireDust97/portfolio-BackEnd*) y espere a que la página cargue y muestre el mensaje **"whitelabel error page"**. Recuerde que levantar la base de datos de Render puede demorar desde unos cuantos segundos hasta varios minutos, por favor, sea paciente.  

2. Ingrese al link de la página o recarguela si la tiene abierta. La página procesará en los próximos segundos los datos correspondientes y podrá visualizar el contenido.  

Si la página de render no devuelve el mensaje de Whitelabel, generando un error 502, "the service cannot handle requests now" u otros errores o mensajes inesperados, por favor, contáctese a mi correo electrónico, <a href="mailto:lautarortiz472@gmail.com">lautarortiz472@gmail.com</a> e intentaré solucionar cualquier error lo más pronto posible para que pueda acceder.  
  
  
**Recuerde: Estos problemas son generados por Render y Clever Cloud por ser planes gratuitos, y no tienen relación con la programación del Front ni el Back-End.**

- <h3>¿Y cómo ingreso a la página del portfolio?</h3>  
La página se encuentra funcionando bajo la tecnología de Google Firebase. El link para acceder a la web es https://frontend-portfolioargprog.web.app/.  

- <h3>¿La página seguirá recibiendo actualizaciones de código o de experiencias y educaciones?</h3>  

En cuanto a lo que programación se refiere, no es probable que se realicen más cambios, a salvedad de solucionar el error del método de TS mencionado arriba. Por otro lado, las experiencias y capacitaciones académicas que se reciban con el paso del tiempo serán subidas a la página para que quede registro de ellas.  

## Argentina Programa 4.0, 2023.  
<h2>Readme.md modificado por última vez: 12 de mayo de 2023.</h2>
