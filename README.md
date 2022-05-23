# Prueba Mercado libre con React JS

## Tabla de contenido (Arquitectura)

- [Backend](#backend)
- [Frontend](#frontend)
- [Creador](#creador)

## Backend

Esta construido en Node JS con el uso del framework Express para la elaboración y consumo de endpoints. Cuenta con la siguiente estructura:

```
backend
    ├── controllers
        ...
    ├── routes
        ...
    ├── app.js
    ├── package-lock.json
    ├── package.json
```

Si desea ejecutar el backend deberá escribir los siguientes comandos:

```
cd backend
npm install
node app
```

O si se tiene nodemon instalado de manera global puede ejecutar el comando:

```
nodemon app
```

## Frontend

Esta construido en React JS, librería para el desarrollo de interfaces de usuarios. Cuenta con la siguiente estructura:

```
frontend
    ├── public
    ├── src
      ├── assets
        ├── img
            ...
        ├── styles
            ...
      ├── components
          ...
      ├── pages
          ...
      ├── services
          ...
      App.js
      ...
    ├── package-lock.json
    ├── package.json
```

Si desea ejecutar el frontent deberá escribir los siguientes comandos:

```
cd frontend
npm install
npm start
```

- Se utiliza SASS como tecnología  para el manejo de estilos.
- Se utiliza la metodología BEM para la declaración de clases entre bloques, elementos y modificadores.
- Se implementa sistema de diseño adaptable (responsive design)
- Se utiliza fuente Poppins directamente de google fonts
- Se implementaron imagenes provenientes de https://undraw.co/
- Cambio favicon

## Creador

**Ernesto Colina Jiménez**

- <https://github.com/ecolina05>
- <https://www.linkedin.com/in/ecolina05/>
