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
#### Librería para usar el API de Google
```javascript
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firestorage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
```

#### Bulletin Board
Al momento de iniciar la aplicación se inicializa un listener que cuando detecta el evento de un cambio en el estado del token(login, logout), ejecuta una determinada acción.
```javascript
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
```

#### Kick Forward
Igualmente, este estilo de programación es usado en general en todo el proyecto, mediante funciones anónimas y callbacks.
```javascript
export const getCommunitiesFromUser = async (userId) => {
    const userRef = firestore.doc('users/'+userId);
    const userSubscriptions = (await userRef.get()).data().subscriptions;

    const communities = await getCommunities();

    var communitiesFromUser = [];

    communities.forEach(community => {
        if(userSubscriptions.includes(community.id)) {
            communitiesFromUser.push(community);
        }
    })

    return communitiesFromUser;

}
```


### Pipeline
Funciones las cuales reciben datos sin compartir y devolver en otras
 ```javascript
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
```

### Módulo de publicaciones
#### Code Golf
También se hace uso de este estilo al usar templates para componentes, en esta parte las 3 partes content, comment, postcard
```javascript
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Hidden, CardMedia } from "@material-ui/core";
import Content from "../../../components/user-post/Content";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
```
#### Things
Separamos las partes de las publicaciones en capsulas content,comment,postcard
```javascript
Grid item key={PostObj.id} xs={12}>
  <PostCard {...PostObj} />
  <br />
</Grid>
```
#### Letter Box
Al pasar las cápsulas como props a los componentes hijos
```javascript
<Grid item key={PostObj.id} xs={12}>
  <PostCard {...PostObj} />
  <br />
</Grid>
```
### Módulo de comentarios
#### Code Golf
Este estilo se hace con pocas lineas de codigo, en esta parte las 3 partes content,comment postcard
#### Things 
Mediante este estilo de programacion podemos comunicar mensajes de componentes de mayor jerarquia pero los datos que necesita los subcomponentes tienen que ser proveeido por el componente que lo contiene
#### Letter Box
Al pasar las cápsulas como props a los componentes hijos
```javascript
{comments.map((cmt) => (
<Box key={cmt.id}>
 <Grid container wrap="nowrap" spacing={2}>
   <Grid item key={cmt.userId}>
     <Avatar>{cmt.username[0]}</Avatar>
   </Grid>
   <Grid item key={cmt.id} xs>
     <Typography color="textSecondary">
       {cmt.username}{" "}
       {Math.round((new Date() - cmt.date) / 1000).toString() +
         " seconds ago."}
     </Typography>
     <Typography>{cmt.msg}</Typography>
   </Grid>
 </Grid>
</Box>
))}
```
## Principios S.O.L.I.D aplicados
### S — Single Responsibility
Cada componente que utilizamos maneja una serie de responsabilidades que no implica a otro
```javascript
const CustomButton = ({ children, buttonPurpose, ...otherProps }) => (
  <button className={`${buttonPurpose} custom-button`} {...otherProps}>
    {children}
  </button>
);
```
### O - Open Closed
Cada componente está libre a recibir más funcionalidades, como agregar más botones al header
```javascript
<div className={classes.grow}>
      <React.Fragment>
        <AppBar position="fixed" style={{ background: "#333333" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            ></IconButton>
            <MenuIcon />
            <RLink to="/" style={{ textDecoration: "none" }}>
              <Box color="text.primary">
                <Typography variant="h5">
                  <span role="img" aria-label="dog">
                    
                  </span>
                  Petbook
                </Typography>
              </Box>
            </RLink>
               .
               .
               .
         // Podemos seguir agregando más funcionalidades(botones que redirijan, etc)
```
### I — Interface Segregation
Cuando una clase tiene que cumplir muchos propósitos, esta se divide para poder cumplir las distintas tareas
```javascript
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);



const FormSelect = ({ handleChange, label, options, ...otherProps }) => (
  <div className='group'>
    <div className='tittle'>{label}</div>
    <select className='form-select' onChange={handleChange} {...otherProps} >
      {
        options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))
      }
    </select>
  </div>
);
```
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
