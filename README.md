# Proyecto 5 – Aplicación Web con React

## Descripción
Este proyecto consiste en una aplicación web basada en la API de Deezer, una plataforma de streaming similar a Spotify o YouTube Music. Deezer proporciona una API gratuita para desarrolladores, que ha sido utilizada para construir esta aplicación.

La aplicación está alojada en Render y es accesible desde la siguiente URL:
[https://project5-tuqa.onrender.com](https://project5-tuqa.onrender.com).

## Arquitectura del Proyecto
Debido a las limitaciones de CORS, la aplicación utiliza un servidor proxy como intermediario. El proxy maneja las solicitudes enviadas desde el navegador hacia la API de Deezer, reenvía las respuestas de vuelta al navegador, y asegura una comunicación fluida entre ambas partes.

El código fuente del servidor proxy está disponible en GitHub:
[Repositorio del Servidor Proxy](https://github.com/Vahen1981/Servidor-para-Deezer).

### Configuración del Proxy
En la carpeta `src/` del proyecto, se encuentra el archivo de configuración `config.js`. Este archivo define dos rutas:
- **Servidor Proxy en Render**: Utilizado para producción.
- **Servidor Local**: Diseñado para entornos de desarrollo local.

Es importante tener en cuenta que la aplicación no funcionará sin el proxy, ya sea alojado en Render o ejecutándose localmente.

## Funcionalidades
La aplicación incluye los siguientes componentes desarrollados con React:

### Componentes
1. **Tarjetas de Artistas, Géneros, Canciones y Canción Destacada (Top One):**
   - Diseñados para mostrar información relevante obtenida de la API de Deezer.
2. **Barra de Navegación:**
   - Proporciona una experiencia de usuario fluida al permitir navegar entre las diferentes secciones de la aplicación.

### Páginas
- Cada página utiliza **React Hooks** para manejar estados y realizar llamadas a la API.
- Los datos obtenidos se pasan a los componentes a través de **props**.
- Para mejorar la robustez, cada página envuelve su contenido principal en un **ErrorBoundary**, lo que previene la propagación de errores inesperados en la interfaz.

## Requisitos
- **Proxy**: Es indispensable que el proxy esté configurado y operativo para que la aplicación funcione correctamente.
- **API de Deezer**: Se utiliza para obtener los datos que se muestran en la aplicación.

## Instalación y Ejecución Local
1. Clonar este repositorio y el repositorio del servidor proxy.
2. Configurar las rutas en el archivo `config.js` para apuntar al servidor local.
3. Iniciar el servidor proxy local.
4. Ejecutar la aplicación en un entorno de desarrollo.

## Tecnologías Utilizadas
- **React**: Para la creación de componentes y gestión del estado.
- **API de Deezer**: Como fuente principal de datos.
- **Render**: Para el alojamiento de la aplicación y el proxy.

## Enlaces
- **Aplicación en Producción**: [https://project5-tuqa.onrender.com](https://project5-tuqa.onrender.com)
- **Servidor Proxy en GitHub**: [https://github.com/Vahen1981/Servidor-para-Deezer](https://github.com/Vahen1981/Servidor-para-Deezer)