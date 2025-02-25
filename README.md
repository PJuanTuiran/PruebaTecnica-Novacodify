# 🚀 Instalación y Ejecución del Proyecto

## 📥 Clonar el repositorio

Ejecuta el siguiente comando en la terminal para clonar el repositorio desde GitHub:

```sh
    git clone <PruebaTecnica-Novacodify>
```

##  Acceder a la carpeta del proyecto
```sh
cd <PruebaTecnica-Novacodify>
```

## 📦 Instalar las dependencias

```sh
npm install
```

## 🗄️ Configurar JSON Server (Datos Mock)

Si estás usando JSON Server para manejar datos de prueba, primero instala el paquete globalmente si no lo tienes:

```sh
npm install -g json-server
```

Luego, ejecuta JSON Server apuntando al archivo db.json dentro del proyecto:

```sh
json-server --watch db.json --port 5000
```

(Puedes cambiar el puerto si es necesario.)

## ▶️  Ejecutar la aplicación

Inicia el servidor de desarrollo de Vite:

```sh
    npm run dev
```

## 🔑 Acceder a la aplicación

Una vez iniciado el servidor, verás en la terminal una URL similar a esta:

```sh
Local: http://localhost:5173/
```

Abre esa URL en tu navegador para ver la aplicación en ejecución.

## 🛠 Tecnologías Utilizadas

React para la construcción de la interfaz.

JSON Server para la gestión de datos mockeados.

Material UI para algunos estilos y componentes.

CSS puro con metodología BEM para la organización del código y la personalización de estilos.

Arquitectura Onion en ciertas partes del código.

Librería de slides para una navegación fluida y dinámica.

React Icons para la implementación de iconos en la UI.



## 📝 Notas Adicionales

Se utilizó una combinación de Material UI y CSS puro para demostrar dominio en ambas herramientas.

La estructura de los estilos sigue la metodología BEM para facilitar su mantenimiento.

La mayoría de los estilos fueron definidos manualmente sin depender completamente de librerías.

Para las diapositivas (slides) se empleó una librería especializada para garantizar una experiencia fluida.

TypeScript no se utilizó por cuestiones de tiempo