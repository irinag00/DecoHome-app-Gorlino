# Deco Home App

<img src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1707852630/ipwqjrloyomxy8twuadq.jpg" alt="LogoDecoHome">

## Descripción

Proyecto final del curso de Desarrollo de Aplicaciones dictado por **CoderHouse**.
Esta aplicación consta de una tienda e-commerce de productos de decoración para el hogar y el jardín. Se pueden visualizar los productos, añadirlos al carrito, realizar la compra y ver las órdenes de compra. Se debe registrar el usuario para ingresar a la app y se debe añadir una imágen la sección "Mi Perfil".

## Tecnologías Utilizadas

- Lenguaje de Programación: **JavaScript**
- Framework: **React-Native**
- Gestión de Estados: **Redux**
- Base de datos en tiempo real para guardar productos y órdenes de compra: **Firebase Realtime Database**
- Base de datos para guardar la sesión iniciada: **SQLite**

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native" width="150" height="130">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Redux.png/600px-Redux.png" alt="Redux" width="230" height="180">
<img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png" alt="Firebase" width="300" height="100">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png" alt="SQLite" width="200" height="150">

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Tener instalado Android Studio en tu computadora o Expo Go en tu dispositivo móvil para la ejecución de la App.
2. Clone el repositorio en la consola de su computadora con el siguiente información:

```
git clone https://github.com/irinag00/DecoHome-app-Gorlino.git
```

3. Instale las dependencias con

```
npm install
```

4. Ejecuta el siguiente comando para abrir la app

```
npx expo start
```

5. Por último, tienes la opción de escanear el código QR para abrir la app desde tu dispositivo móvil (con la aplicación de Expo Go) o también puedes apretar la letra `a ` para que se abra desde Android Studio.

## Estructura de archivos

```
my-ecommerce/
  |- expo/
  |- node_modules/
  |- src/                     # Carpeta principal para el código fuente de la aplicación
  |   |- components/          # Componentes reutilizables de la aplicación
  |   |- data/                # Información en json para pruebas
  |   |- db/                  # Configuración de SQLite
  |   |- features/            # Configuración de Redux (reducers, store)
  |   |- firebase/            # Credenciales de la base de datos
  |   |- global/              # Información global (colores)
  |   |- navigation/          # Configuración de la navegación de la aplicación
  |   |- screens/             # Pantallas
  |   |- services/            # Servicios como la conexión a base de datos
  |   |- store/               # Configuración de Redux Toolkit
  |   |- validations/         # Configuración de validaciones para el registro
  |- assets/                  # Imágenes
  |- App.js                   # Configuración principal
  |- app.json
  |- babel.config.js
  |- package.json
  |- README.md
```

## Contribución

¡Contribuciones son bienvenidas! Si quieres contribuir a este proyecto abre una solicitud de Pull request.

## Contacto

Para consultas o comentarios, me pueden contactar a dirección de email: [irinagorlino@gmail.com](irinagorlino@gmail.com)
_¡Muchas gracias por ver mi proyecto!_
