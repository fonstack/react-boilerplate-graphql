# React with GraphQL - Fullstack Boilerplate

![React](https://i.ibb.co/NsdnYFv/Recurso-2.png)

<h2 align='center'>Fullstack React Boilerplate with GraphQL, Apollo & Prisma</h2>

## **_Características_**

Boilerplate para una aplicación de React. Está basada en las siguientes tecnologías:

> - React.js
> - Apollo Client
> - GraphQL Yoga
> - Prisma

![Flujo](https://i.ibb.co/F4YFWX3/Recurso-2.png)

## **_Requerimentos_**

Antes de cualquier otra cosa hay que tener instalado _Prisma_

```
  npm install -g prisma
```

## **_Setup_**

1. Primero vamos a iniciar nuestro servidor de Prisma

   ```
     prisma init
   ```

   - Seleccionamos _'Demo Server'_ si no tenemos ningún server configurado en la consola de Prisma.
   - Escogemos el servidor con mejor latencia.
   - Insertamos un nombre para el servicio de Prisma.
   - Insertamos el nombre para el _stage_.
   - Seleccionamos 'Dont generate' en el lenguaje de programación.

2. Configuramos el archivo _'prisma.yml'_

   - Para mayor seguridad, en las variables de entorno, en el apartado de **'PRISMA_ENDPOINT'** ponemos el link que tenemos en el archivo _'prisma.yml'_ (el endpoint del servidor) y modificamos dicho archivo de la siguiente manera:

     ![Flujo](https://i.ibb.co/Q9Sy8W1/asda.png)

     El apartado **secret** tiene que ser descomentado cuando se pase a producción.

3. Hacemos el _deploy_ del servidor de prisma para que se generen los archivos necesarios faltantes

   - Renombramos el archivo _'variables.env.sample'_ a _'variables.env'_ y luego hacemos el deploy
     ```
       prisma deploy --env-file variables.env
     ```

4. Comandos paa ejecutar la app:
   - **Backend**
     - Para abrir un _'Playground'_ para probar querys/mutations de graphQL con la base de datos:
       ```
         npm run dev
       ```
     - Para hacer un deploy de Prisma:
       ```
         npm run deploy
       ```
   - **Frontend**
     - Para abrir la aplicación en el puerto **3000**
       ```
         npm start
       ```

## **_Instrucciones de Uso_**

- El archivo que esta en _'src/generated'_ es el archivo generado por Prisma en cada deploy y tiene todos los métodos para los **mutations** y los **querys** a nivel del servidor.
- El archivo _'schema.graphql'_ que está en _'src'_ deberá tener todos mutations y querys que se podrán generar en el **frontend**.
- En la carpeta _'resolvers'_ están todos los métodos que van a traer/llevar la información de/a la base de datos.
- En el archivo _'datamodel.prisma'_ estrán todos los modelos que van a intervenir en la aplicación, como por ejemplo:

  ![Flujo](https://i.ibb.co/8xZbMhC/asdasdasdasd.png)

## **_Agradecimientos_**

Boilerplate con base al curso de @wesbos [Advanced React](https://advancedreact.com/)
