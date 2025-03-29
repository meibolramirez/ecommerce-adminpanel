# Panel de Administración - Ecommerce Pup Paw Shop

Esta es una aplicación de panel administrativo para el CRUD de productos y usuarios utilizando una API JSON.

## Instalación
```bash
# Clonar el repositorio
git clone git@github.com:your-username/puppawshop-frontend.git

#Instalar dependencias
npm i
```

## Uso

**Iniciar el servidor JSON para la API**
```
npm run start
```

**Iniciar el servidor de desarrollo**
```
npm run dev
```

## Tecnologías
- **Next JS:** Framework React para crear aplicaciones web integrales. 
- **React Admin:** React-admin está diseñado específicamente para crear aplicaciones de página única (SPA). En una aplicación de React-admin, el navegador obtiene el HTML, CSS y JavaScript necesarios para renderizar la aplicación solo una vez. Posteriormente, los datos se obtienen de las API mediante llamadas AJAX. Esto contrasta con las aplicaciones web tradicionales, donde el navegador obtiene una nueva página HTML para cada pantalla.
- **MIUI:** Material UI es una biblioteca de componentes React de código abierto que implementa Material Design de Google. Es completa y está lista para usar en producción.
- **Json Server:**  JSON-Server es un módulo npm (Node Package Manager) que permite la creación de una API REST simulada utilizando solo un archivo JSON.

## Funcionalidades
- **Panel de administración:** El panel de administración está construido con react-admin. A través de este se maneja:
  - **CRUD:** Creación, lectura, actualización, eliminación y descarga de productos y usuarios.
     - **JSON API:** La lectura y modificaciones se efectuan sobre un archivo de JSON con la información de los productos y usuarios. El cual se conecta con el panel a través de una API.   
  - **Tabulación y Paginado:** Listado por tablas de productos y usuarios.
 
**Productos**

- Listado
  
  ![image](https://github.com/user-attachments/assets/cf242a1e-3875-49ad-836e-3d889829c159)

- Creación

  - Validaciones

    ![image](https://github.com/user-attachments/assets/c367571f-9ff9-4c41-b4c2-95925a1a70ec)

- Edición y borrado

  - Validaciones

    ![image](https://github.com/user-attachments/assets/3c953cca-2b8a-4a04-a32b-c97938c4b416)

**Usuarios**

- Listado

  ![image](https://github.com/user-attachments/assets/3d04755d-9610-4068-ae99-1480975d9158)

**JSON API**

- Productos

  ![image](https://github.com/user-attachments/assets/8408950d-277b-444e-a0c9-7915aae053e6)

- **Usuarios**

  ![image](https://github.com/user-attachments/assets/0d88b0ee-bb04-4f8d-b065-12c0a246b4e8)

## Demo

https://github.com/user-attachments/assets/457c3447-7208-488c-aa74-ad2892f7bdcb

## Licencia

MIT License
