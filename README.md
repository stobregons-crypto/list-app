# Aplicación Web de Notas

Una aplicación web simple para crear, listar y eliminar notas con una interfaz limpia usando Bootstrap 5.

## Características

- ✅ Crear nuevas notas
- ✅ Marcar notas como completadas (checkbox)
- ✅ Eliminar notas con confirmación modal
- ✅ Interfaz responsiva con Bootstrap 5
- ✅ Validación de entrada

## Estructura del Proyecto

```
maquetacion proyecto lista/
├── frontend/
│   └── index.html          # Archivo HTML principal
├── backend/
│   ├── backend.js          # Punto de entrada (inicialización)
│   ├── noteFunctions.js    # Funciones para gestionar notas
│   ├── modalFunctions.js   # Funciones para gestionar modales
│   └── bootstrapLoaderAdvisement.js  # Inicialización de Bootstrap
├── packages/
│   └── package.json        # Configuración del proyecto
└── README.md               # Este archivo
```

## Instalación y Ejecución

### Opción 1: Usar Python (Recomendado)

```bash
cd "maquetacion proyecto lista"
python3 -m http.server 8000
```

Luego abre tu navegador en: `http://localhost:8000/frontend/`

### Opción 2: Usar Node.js

Si tienes Node.js instalado:

```bash
cd "maquetacion proyecto lista"
npx http-server -p 8000
```

### Opción 3: Abrir directamente

Simplemente abre el archivo `frontend/index.html` en tu navegador.

## Tecnologías Utilizadas

- HTML 5
- CSS 3 (Bootstrap 5.3.3)
- JavaScript (ES6 Modules)
- Bootstrap Icons

## Uso

1. **Crear nota**: Escribe el contenido en el input y haz clic en "create" o presiona Enter
2. **Completar nota**: Haz clic en el checkbox para marcar/desmarcar la nota
3. **Eliminar nota**: Haz clic en el botón "Delete" y confirma en el modal

## Notas de Desarrollo

- El proyecto utiliza módulos ES6 (`import`/`export`)
- Bootstrap se carga desde CDN
- No hay dependencias externas (excepto Bootstrap)
- El código es completamente vanilla JavaScript
