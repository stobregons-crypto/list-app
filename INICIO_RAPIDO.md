# 🚀 Inicio Rápido

## Ejecutar la aplicación

### Opción 1: Python (Recomendado - Sin instalación)

```bash
cd "list-app"
python3 -m http.server 8000
```

Luego abre en tu navegador: **http://localhost:8000/frontend/**

### Opción 2: Node.js

```bash
cd "list-app" 
npx http-server -p 8000
```

Abre en tu navegador: **http://localhost:8000/frontend/**

### Opción 3: Abrir directamente

Haz clic derecho en `frontend/index.html` → "Open with" → selecciona tu navegador

---

## ✨ Funcionalidades

- **Crear nota**: Escribe en el input y presiona Enter o haz clic en "create"
- **Marcar completada**: Haz clic en el checkbox para tachar la nota
- **Eliminar**: Haz clic en "Delete" y confirma en el modal

---

## 📁 Estructura

```
├── frontend/index.html           # Interfaz de usuario
├── backend/
│   ├── backend.js               # Inicialización principal
│   ├── noteFunctions.js         # Lógica de notas
│   ├── modalFunctions.js        # Lógica de modales
│   └── bootstrapLoaderAdvisement.js  # Bootstrap
├── packages/package.json        # Configuración
└── README.md                    # Documentación completa
```

---

## 🔧 Cambios realizados

- ✅ Corregido `package.json` (tipo: "module")
- ✅ Eliminado ID duplicado en HTML
- ✅ Optimizado código Bootstrap
- ✅ Mejorada importación de modales
- ✅ Actualizada estructura de listeners

La aplicación está lista para usar. ¡Disfruta! 🎉
