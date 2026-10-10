# Portfolio de Nadin Pérez

Sitio personal: perfil, experiencia, stack y dos casos de estudio (RETAKE y SEGURMAX).
Hecho con Next.js (App Router), TypeScript y Tailwind CSS 4. Todas las páginas se generan estáticas.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Dónde está cada cosa

```
src/
  app/
    page.tsx                 página de inicio
    proyectos/[slug]/        caso de estudio de cada proyecto (+ su imagen Open Graph)
    opengraph-image.tsx      imagen Open Graph del sitio
    sitemap.ts, robots.ts    SEO técnico
    globals.css              tokens de color, tipografía y utilidades (container-page, label, link)
  components/                secciones y piezas de interfaz
  lib/
    site.ts                  nombre, contacto, redes y navegación
    profile.ts               experiencia, stack y forma de trabajo
    projects.ts              contenido completo de los proyectos
    og.tsx                   plantilla de las imágenes Open Graph
  assets/projects/           capturas reales de cada proyecto
```

Para cambiar un texto no hace falta tocar componentes: todo el contenido vive en `src/lib/`.

## Contenido

- **Experiencia**: cada entrada de `profile.ts` lleva período, puesto, empresa, tareas y tecnologías.
- **Proyectos**: agregar un objeto a `projects.ts` crea su sección en el inicio, su página en
  `/proyectos/<slug>` y su entrada en el sitemap.
- **Capturas**: van en `src/assets/projects/<slug>/` y se importan en `projects.ts`. Cada captura de
  la galería tiene un `layout` (`wide`, `phone` o `half`).

## Color

Hay dos acentos y cada uno significa algo: rosa para lo que uso en el trabajo, celeste para lo que
incorporé en proyectos propios. Los tonos claros son fondos; para texto se usan `rose-deep` y
`sky-deep`, que cumplen contraste AA.

## Publicación

El sitio necesita conocer su URL pública para los metadatos, el sitemap y `robots.txt`. En Vercel se
resuelve sola. En otro hosting, definir:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```
