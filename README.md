# Petbook

## Lenguajes y herramientas:

[<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />][html5]
[<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />][css3]
[<img align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />][sass]
[<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />][react]
[<img align="left" alt="Mui" width="26px" src="https://redux.js.org/img/redux.svg" />][redux]
[<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />][nodejs]
[<img align="left" alt="Firebase" width="26px" src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" />][firebase]
[<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />][git]
[<img align="left" alt="Mui" width="26px" src="https://material-ui.com/static/logo_raw.svg" />][mui]
<br />
<br />

## Próposito del proyecto
Desarrollar una red social que permita a los usuarios crear comunidades, y compartir
experiencias generando diversas interacción entre personas, quienes son amante
mascotas , y que además estos podrán aportar diversos tema como consejos sobre el
cuidado general cualquier especie de mascota.
## Funcionalidades
● Permitir el acceso a la página web por medio de la creación de un perfil de usuario.<br />
● El sistema debe permitir que el usuario pueda realizar una búsqueda de comunidades.<br />
● El sistema permitirá al usuario el poder visualizar las diferente publicaciones de sus respectivas
comunidades, que además se podrán filtrar(publicaciones recientes primero, etc)<br />
● El sistema debe proveer a todo usuario registrado( en una comunidad o no) la capacidad de agregar
una mascota a su perfil, de modo que se requerirá un formulario completo para ello.<br />
● Permitir el inicio de sesión para usuarios registrados, donde se validará que efectivamente los datos
ingresados sean correctos.<br />
● Búsqueda y visualización de un perfil de diferentes usuarios dentro de la página web.<br />
● Dar la facilidad de que un usuario pueda crear su propia comunidad.<br />
● Permitir el registro o suscripción de un usuario a una comunidad, así como abandonar dicha comunidad<br />
● El sistema permite que cada usuario registrado tenga el libre acceso a la comunicación por medio de
los comentarios<br />
● El sistema da a conocer las diferentes publicaciones en tendencias por un periodo de tiempo, basados
en la cantidad de “Me Gusta” y cantidad de comentarios.<br />
● Permitir ver la cantidad de usuarios conectados en cualquier momento, con la opción de poder ver la
lista de dichos usuarios.<br />
● El sistema da a conocer las comunidades más activas, estas son organizadas de acuerdo a la cantidad
de integrantes, para más facilidad se provee el buscador de comunidades.<br />
● El sistema debe permitir a los usuarios realizar publicaciones en una comunidad.<br />
## Práctica de código legible aplicadas
Para las prácticas de código legible se hizo uso de una extensión de Visual Studio Code llamada Prettier, la cual de manera automática le da formato al código que escribimos.
## Estilos de programacion aplicados
### Módulo de inicio de sesión y registro
#### Codegolf
Este estilo de programación es usado en general en todo el proyecto, gracias al SDK de Firebase.

#### Bulletin Board
Este estilo de programación es usado en la función encargada de la autenticación.

#### Kick Forward
Igualmente, este estilo de programación es usado en general en todo el proyecto, mediante funciones anónimas y callbacks.

### Módulo de comunidad
#### Pipeline
Funciones las cuales reciben datos sin compartir y devolver en otras

### Módulo de publicaciones
#### Code Golf
Este estilo se hace con pocas lineas de codigo, en esta parte las 3 partes content,comment postcard
#### Things
Separamos las partes de las publicaciones en capsulas content,comment,postcard
#### Letter Box
Al pasar las cápsulas como props a los componentes hijos

### Módulo de comentarios
#### Code Golf
Este estilo se hace con pocas lineas de codigo, en esta parte las 3 partes content,comment postcard
Está dividido físicamente 
#### Things 
Mediante este estilo de programacion podemos comunicar mensajes de componentes de mayor jerarquia pero los datos que necesita los subcomponentes tienen que ser proveeido por el componente que lo contiene
#### Letter Box
Al pasar las cápsulas como props a los componentes hijos

## Principios S.O.L.I.D aplicados
### S — Single Responsibility
Cada componente que utilizamos maneja una serie de responsabilidades que no implica a otro

### O - Open Closed
Cada componente está libre a recibir más funcionalidades, como agregar más botones al header

### I — Interface Segregation
Cuando una clase tiene que cumplir muchos propósitos, esta se divide para poder cumplir las distintas tareas

## Conceptos DDD aplicados
### Lenguaje Ubicuo: Ubiquitous Language
```javascript
export const getCommunities = async () => {
  const communitiesRef = firestore.collection("communities");
  ...
  
export const subscribeUserToCommunity = async (userId, communityId) => {
  const userRef = firestore.doc("users/" + userId);
  ...

export const createUserProfileDocument = async (userAuth, additionalData) => {
  ...
```
### Entidades (Entities).
En esta aplicacion los usuarios son las entidades, junto con las publicaciones y los comentarios que esta puede tener ya que todas estas mantienen un estado y comportamiento mas allá. 

### Objetos de valor (Value Objects).
Los tokens que utilizamos para iniciar o cerrar sesion

### Módulos (Modules).
Agrupando un numero de clases o componentes de react formamos modulos que luego podemos utilizarlos en conjunto para alguna funcionalidad.

### Agregados (Aggregates).
Los datos de la comunidad, post y multiples usuarios. Toda esa informacion se encuentra en los Posts ya que estas entidades son dependientes entre ella.

---
[redux]: https://redux.js.org/
[git]: https://git-scm.com/
[firebase]: https://firebase.google.com/
[nodejs]: https://nodejs.org/en/
[react]: https://reactjs.org/
[javascript]: https://www.javascript.com/
[sass]: https://sass-lang.com/
[css3]: https://developer.mozilla.org/en-US/docs/Archive/CSS3
[html5]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
[mui]: https://material-ui.com/
