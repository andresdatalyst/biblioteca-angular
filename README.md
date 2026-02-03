# AppBiblioteca 📚

**AppBiblioteca** es una aplicación de gestión de biblioteca desarrollada con Angular (v12) que implementa autenticación (email y Google), gestión de libros, socios y préstamos utilizando Firebase (Firestore). Este proyecto fue desarrollado como ejercicio mientras aprendía desarrollo web y ahora está preparado para presentarlo en un portafolio.

---

## 🔍 Características principales

- Autenticación con **correo electrónico** y **Google** (verificación de email incluida).
- Gestión (CRUD) de **Libros**, **Socios** y **Préstamos** mediante **Cloud Firestore**.
- Consultas específicas: libros activos, libros no prestados y préstamos no devueltos.
- Rutas protegidas con `AuthGuard` para áreas que requieren sesión iniciada.
- Formularios reactivos con validación básica.
- UI con **Angular Material** y **Bootstrap**.

---

## 🧰 Tecnologías

- Angular 12
- TypeScript
- Firebase (Authentication + Firestore) [@angular/fire (compat)]
- Angular Material
- Bootstrap 5

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone <tu-repo-url>
cd appbiblioteca
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar Firebase:

- Crea un proyecto en Firebase y habilita Authentication (Email/Google) y Firestore.
- Copia la configuración de Firebase en `src/environments/environment.ts` (la versión `environment.prod.ts` para producción).

> Nota: los keys de configuración de Firebase que aparecen en el repositorio son de desarrollo. Si publicas en un repositorio público, revisa las reglas de seguridad de Firestore y considera usar variables de entorno en despliegues.

4. Ejecutar en modo desarrollo:

```bash
npm start
# o
ng serve
```

5. Accede a la app en `http://localhost:4200`

---

## 📁 Estructura relevante del proyecto

- `src/app/` - Código principal de Angular
  - `componentes/`
    - `libros/` - Módulo y componentes para gestionar libros (crear, editar, listar)
    - `socios/` - Módulo para gestionar socios
    - `prestamos/` - Módulo para gestionar préstamos
    - `login/` - Componentes para sign-in, sign-up y dashboard
  - `services/` - Servicios para interactuar con Firestore (`libro.service.ts`, `socio.service.ts`, `prestamo.service.ts`, `auth.service.ts`)
  - `guards/` - `AuthGuard` para proteger rutas
- `src/environments/` - Configuración de Firebase para entornos

---

## 🛠 Scripts útiles

- `npm start` / `ng serve` - Servidor de desarrollo
- `npm run build` - Build de producción (salida en `dist/`)
- `npm test` - Ejecuta tests unitarios con Karma



---

Si quieres, puedo generar una versión en inglés del README o ayudarte a redactar la descripción corta para tu portafolio. 💡

