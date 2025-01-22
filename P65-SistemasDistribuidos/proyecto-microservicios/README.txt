[U3_PRACTICA_02]: Microservicios

Integrantes: Adriana Morales, Johanna Del Pezo

1. Estructura de directorios del proyecto

/proyecto-microservicios
│
├── auth-service        # Servicio de autenticación
│   ├── Dockerfile      # Dockerfile para el servicio de autenticación
│   ├── index.js
│   ├── models
│   │   └── User.js
│   ├── .env            # Variables de entorno para auth-service
│   └── package.json    # Dependencias y scripts de npm
│
├── product-service     # Servicio de productos
│   ├── Dockerfile      # Dockerfile para el servicio de productos
│   ├── index.js
│   ├── models
│   │   └── Product.js
│   ├── middleware      # Middlewares del servicio
│   │   └── authentication.js   
│   ├── .env            # Variables de entorno para product-service
│   └── package.json
│
└── docker-compose.yml  # Archivo para orquestar los servicios

ADVERTENCIA
Para un mejor fucionamiento del proyecto se sugiere eliminar las carpetas "node_modules" y el paquete "package-lock.json" en las carpetas auth y products service.
Solo en caso de que no esten removidas. Ademas, ejecutar el comando "npm cache clean --force" para eliminar posibles residuos de archivos corruptos en los paquetes, y ejecutar "npm install" para reinstalarlos.

Si se desea ver la colecciones en su cuenta de MongoDB se recomienda cambiar el MONGO_URI con la direccion de su cuenta.

2. Ejecucion del proyecto

- Iniciar los servicios con el comando Docker
    docker-compose up --build

- Verificar que lo servicios estén corriendo
product-service  | Servicio de producto ejecutandose en http://localhost:3001
auth-service     | Servicio de autenticación ejecutando en http://localhost:3000

product-service  | Product-service esta conectado a MongoDB
auth-service     | Auth-service conectado a MongoDB

