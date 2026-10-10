import type { StaticImageData } from "next/image";

import retakeHome from "@/assets/projects/retake/home.webp";
import retakeCatalogo from "@/assets/projects/retake/catalogo.webp";
import retakeProducto from "@/assets/projects/retake/producto.webp";
import retakeResenas from "@/assets/projects/retake/resenas.webp";
import retakeProductoMobile from "@/assets/projects/retake/producto-mobile.webp";
import segurmaxHome from "@/assets/projects/segurmax/home.webp";
import segurmaxCatalogo from "@/assets/projects/segurmax/catalogo.webp";
import segurmaxPresupuesto from "@/assets/projects/segurmax/presupuesto.webp";
import segurmaxLogin from "@/assets/projects/segurmax/login.webp";
import segurmaxCatalogoMobile from "@/assets/projects/segurmax/catalogo-mobile.webp";

export type Shot = {
  src: StaticImageData;
  alt: string;
  caption: string;
  // Cómo se ubica en la galería: ancho, captura de teléfono o media fila.
  layout: "wide" | "phone" | "half";
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  kind: string;
  year: string;
  tone: "rose" | "sky";
  tagline: string;
  summary: string;
  role: string;
  context: string[];
  // Tres puntos para la página de inicio, sin jerga: qué hace el producto.
  highlights: { title: string; text: string }[];
  features: { group: string; items: string[] }[];
  decisions: { title: string; text: string; file: string }[];
  challenge: { title: string; text: string };
  stack: { layer: string; items: string[] }[];
  keyStack: string[];
  limits: string;
  links: { live?: string; repo?: string; repoNote?: string };
  cover: { src: StaticImageData; alt: string };
  phone: { src: StaticImageData; alt: string };
  gallery: Shot[];
  // Un flujo del sistema explicado paso a paso.
  flow?: { title: string; text: string; file: string; steps: { title: string; text: string }[] };
};

export const projects: Project[] = [
  {
    slug: "retake",
    index: "01",
    name: "RETAKE",
    kind: "Ecommerce por catálogo",
    year: "2026",
    tone: "sky",
    tagline:
      "Tienda de consolas retro con panel de administración, donde la compra se coordina por WhatsApp.",
    summary:
      "Catálogo público con búsqueda y filtros, y un panel desde el que el negocio administra productos, imágenes, reseñas y los textos promocionales del sitio. No tiene checkout: cada consulta sale por WhatsApp con el mensaje ya armado.",
    role: "Desarrollo completo: modelo de datos, backend, interfaz, pruebas y despliegue.",
    context: [
      "RETAKE vende consolas Nintendo DS y 3DS importadas. La venta se coordina por WhatsApp, así que el sitio no tiene carrito ni pagos: se dejaron afuera a propósito.",
      "El catálogo y los textos del sitio se mantienen desde un panel, sin tocar código: productos, reseñas, anuncios, barra promocional y franja de beneficios.",
    ],
    highlights: [
      {
        title: "Catálogo con consulta por WhatsApp",
        text: "Cada producto tiene un botón que abre WhatsApp con el mensaje ya escrito: nombre, precio y enlace.",
      },
      {
        title: "Panel para el negocio",
        text: "Productos, categorías, marcas, imágenes y reseñas se cargan y se editan desde un panel con login, sin tocar código.",
      },
      {
        title: "Seguridad y pruebas",
        text: "Formularios validados, límite de intentos en el login y pruebas automáticas que corren con cada cambio.",
      },
    ],
    features: [
      {
        group: "Sitio público",
        items: [
          "Home, catálogo con búsqueda, filtros por categoría y marca, paginación y ficha de producto con galería.",
          "Botones de WhatsApp con el mensaje armado en el servidor: nombre, precio y enlace del producto.",
          "Reseñas de visitantes con moderación: nacen pendientes y se publican cuando alguien las aprueba.",
          "SEO técnico: sitemap generado desde la base y datos estructurados de organización, producto y migas de pan.",
        ],
      },
      {
        group: "Panel de administración",
        items: [
          "Login con Auth.js y rutas protegidas desde el middleware.",
          "Alta, edición y baja de productos, categorías y marcas, con acciones en lote sobre productos.",
          "Gestor de imágenes: hasta 8 por producto, reordenables arrastrando, con portada e imagen de hover.",
          "Moderación de reseñas: aprobar, rechazar, responder y operar en lote.",
          "Contenido editable: anuncio flotante con fechas de vigencia, barra promocional y franja de beneficios.",
        ],
      },
      {
        group: "Calidad",
        items: [
          "Validación de formularios con Zod.",
          "Límite de intentos en el login y en las reseñas, y cabeceras de seguridad.",
          "Pruebas con Vitest y Testing Library.",
          "CI en GitHub Actions y revisión automática antes de cada commit.",
        ],
      },
    ],
    decisions: [
      {
        title: "Sin carrito ni pagos",
        text: "La venta se cierra conversando, así que el sitio lleva al cliente a WhatsApp en lugar de a un checkout. El mensaje se arma en el servidor con los datos del producto.",
        file: "src/lib/whatsapp.ts",
      },
      {
        title: "Imágenes en Cloudinary",
        text: "Las imágenes se suben directo desde el navegador a Cloudinary. El servidor solo autoriza cada subida, así las credenciales no quedan expuestas.",
        file: "src/actions/products/images.ts",
      },
      {
        title: "Límite de intentos guardado en la base",
        text: "El login y el formulario de reseñas limitan los intentos por IP. El contador vive en PostgreSQL y no en memoria, porque en un hosting serverless la memoria no se comparte entre instancias.",
        file: "src/lib/rate-limit.ts",
      },
      {
        title: "Sin roles, a propósito",
        text: "Al panel entran dos personas y las dos necesitan acceso completo. No hay roles ni permisos: preferí no mantener algo que nadie iba a usar.",
        file: "prisma/schema.prisma",
      },
    ],
    challenge: {
      title: "Lo que me llevé",
      text: "RETAKE resuelve el mismo tipo de problema que trabajo a diario con Vue.js y PHP, pero con otras herramientas: Server Actions en lugar de una API REST, Prisma en lugar de SQL escrito a mano y despliegue en Vercel.",
    },
    stack: [
      { layer: "Interfaz", items: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "dnd-kit"] },
      { layer: "Servidor", items: ["Server Actions", "Auth.js", "Zod", "Middleware"] },
      { layer: "Datos", items: ["PostgreSQL (Neon)", "Prisma"] },
      { layer: "Entrega", items: ["Vercel", "Cloudinary", "Vitest", "GitHub Actions"] },
    ],
    keyStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Auth.js", "Cloudinary", "Vitest"],
    limits:
      "No tiene carrito, checkout ni pagos online. La sección de usuarios del panel es de solo lectura.",
    links: {
      live: "https://retroid-rouge.vercel.app/",
      repo: "https://github.com/nadinp02/retroid",
    },
    cover: {
      src: retakeHome,
      alt: "Página de inicio de RETAKE: fondo oscuro, titular “Historias que siguen en juego” y botones para ver el catálogo y consultar por WhatsApp.",
    },
    phone: {
      src: retakeProductoMobile,
      alt: "Ficha de un producto de RETAKE vista en un teléfono.",
    },
    gallery: [
      {
        src: retakeCatalogo,
        alt: "Catálogo de RETAKE con buscador, selectores de categoría y marca, y dos consolas con precio y botón de compra.",
        caption: "Catálogo con búsqueda y filtros por categoría y marca.",
        layout: "wide",
      },
      {
        src: retakeProductoMobile,
        alt: "Ficha de producto en un teléfono, con galería de imágenes y etiqueta de edición limitada.",
        caption: "La misma ficha en un teléfono.",
        layout: "phone",
      },
      {
        src: retakeProducto,
        alt: "Ficha de la Nintendo 3DS Cosmo Black con galería, precio, aviso de última unidad y botón “Comprar por WhatsApp”.",
        caption: "Ficha de producto: la compra sale por WhatsApp con el mensaje armado.",
        layout: "half",
      },
      {
        src: retakeResenas,
        alt: "Sección de reseñas con promedio de puntaje, una reseña publicada y el formulario para dejar una nueva.",
        caption: "Reseñas: se publican recién cuando se aprueban desde el panel.",
        layout: "half",
      },
    ],
  },
  {
    slug: "segurmax",
    index: "02",
    name: "SEGURMAX",
    kind: "Catálogo y panel de gestión",
    year: "2026",
    tone: "rose",
    tagline:
      "Catálogo de equipos de seguridad con pedido de presupuesto y un panel para mantenerlo al día.",
    summary:
      "Sitio público donde el cliente arma una lista de materiales y pide presupuesto por WhatsApp o por correo, y un panel con login para administrar el catálogo e importar productos desde una planilla de Excel.",
    role: "Desarrollo completo: SPA en Vue 3, API REST en PHP y base de datos MySQL.",
    context: [
      "SEGURMAX distribuye equipos de seguridad Hikvision: cámaras, grabadores, alarmas y control de acceso. El sitio no vende online: el cliente arma una lista de productos y pide un presupuesto.",
      "El catálogo vive en una base MySQL detrás de una API propia, y se actualiza desde un panel o importando una planilla.",
    ],
    highlights: [
      {
        title: "Lista de materiales",
        text: "El cliente busca productos, arma su lista con cantidades y pide el presupuesto por WhatsApp o por correo.",
      },
      {
        title: "Panel de gestión",
        text: "Login, estado del catálogo de un vistazo y alta, edición y baja de productos.",
      },
      {
        title: "Importación desde Excel",
        text: "El catálogo se actualiza subiendo una planilla: el sistema detecta productos nuevos, repetidos y filas con errores.",
      },
    ],
    features: [
      {
        group: "Sitio público",
        items: [
          "Catálogo con búsqueda por nombre, código o modelo, filtro por categoría y paginación.",
          "Lista de materiales con cantidades, guardada en un store de Pinia.",
          "Pedido de presupuesto por WhatsApp o por correo con EmailJS, con los productos elegidos y una consulta opcional.",
          "Diseño adaptable, sitemap, robots.txt y datos estructurados del comercio.",
        ],
      },
      {
        group: "Panel de administración",
        items: [
          "Login con JWT y rutas protegidas en Vue Router.",
          "Dashboard con el estado del catálogo: total de productos, con y sin imagen, categorías y última importación.",
          "Alta, edición y baja de productos, con búsqueda y filtros.",
          "Importación desde Excel o CSV con resumen de resultados.",
          "Aviso de sesión expirada y redirección al login, con confirmación antes de eliminar.",
        ],
      },
      {
        group: "API y datos",
        items: [
          "API REST en PHP 8 organizada en controladores, modelos y servicios.",
          "Base de datos MySQL con consultas preparadas.",
          "Límite de intentos en el login.",
          "Pruebas automáticas de la API con PHPUnit.",
        ],
      },
    ],
    decisions: [
      {
        title: "Catálogo en base de datos, con API propia",
        text: "Los productos se cargan, corrigen e importan sin volver a publicar el sitio.",
        file: "api/",
      },
      {
        title: "Importar sin romper el catálogo",
        text: "Las planillas llegan con encabezados y códigos escritos de formas distintas. El importador revisa todo el archivo antes de escribir y, para los productos que ya existen, deja elegir entre reemplazar u omitir.",
        file: "src/views/ProductsAdminPage.vue",
      },
      {
        title: "Sesiones con JWT",
        text: "El panel usa tokens con vencimiento. La API los valida en cada pedido protegido y, si la sesión expiró, el panel avisa y vuelve al login.",
        file: "api/services/JwtService.php",
      },
      {
        title: "Pruebas sobre la base real",
        text: "Las pruebas de la API corren contra MySQL: cubren el login, el límite de intentos y el alta, edición y baja de productos y categorías.",
        file: "tests/",
      },
    ],
    challenge: {
      title: "Lo que me llevé",
      text: "Un catálogo que se administra desde un panel obliga a resolver sesiones, validaciones y qué hacer cuando los datos llegan mal cargados.",
    },
    stack: [
      { layer: "Interfaz", items: ["Vue 3", "Vue Router", "Pinia", "Vite", "Bootstrap 5"] },
      { layer: "Servidor", items: ["PHP 8", "API REST", "JWT"] },
      { layer: "Datos", items: ["MySQL", "Migraciones SQL"] },
      { layer: "Entrega", items: ["Apache", "PHPUnit", "EmailJS", "SheetJS"] },
    ],
    keyStack: ["Vue 3", "Pinia", "Bootstrap", "PHP", "API REST", "MySQL", "JWT", "PHPUnit"],
    limits:
      "El panel tiene un único tipo de usuario. Roles y auditoría de acciones quedaron anotados como pendientes.",
    links: {
      live: "https://segurmaxsolutions.com/",
      repoNote: "Repositorio privado",
    },
    cover: {
      src: segurmaxHome,
      alt: "Página de inicio de SEGURMAX: titular “Soluciones oficiales Hikvision para tu seguridad” y, debajo, el catálogo para armar una lista de materiales.",
    },
    phone: {
      src: segurmaxCatalogoMobile,
      alt: "Catálogo de SEGURMAX visto en un teléfono.",
    },
    gallery: [
      {
        src: segurmaxCatalogo,
        alt: "Catálogo de SEGURMAX filtrado por la categoría Cámaras IP, con buscador y tarjetas de producto.",
        caption: "Catálogo con búsqueda y filtro por categoría.",
        layout: "wide",
      },
      {
        src: segurmaxCatalogoMobile,
        alt: "Catálogo en un teléfono, con el buscador y las categorías en una fila desplazable.",
        caption: "El catálogo en un teléfono.",
        layout: "phone",
      },
      {
        src: segurmaxPresupuesto,
        alt: "Panel lateral “Tu presupuesto” con tres productos, sus cantidades y los botones para enviar por WhatsApp o solicitar por correo.",
        caption: "Lista de materiales: sale por WhatsApp o por correo.",
        layout: "half",
      },
      {
        src: segurmaxLogin,
        alt: "Pantalla de inicio de sesión del panel de administración de SEGURMAX.",
        caption: "Acceso al panel de administración.",
        layout: "half",
      },
    ],
    flow: {
      title: "Qué pasa con una planilla antes de tocar la base",
      text: "La importación corre en el navegador con SheetJS y usa la misma API que el resto del panel.",
      file: "src/views/ProductsAdminPage.vue",
      steps: [
        {
          title: "Leer",
          text: "Toma la primera hoja del archivo .xlsx, .xls o .csv.",
        },
        {
          title: "Normalizar",
          text: "Reconoce las columnas aunque cambien acentos, mayúsculas o el nombre exacto.",
        },
        {
          title: "Validar",
          text: "Limpia los códigos y descarta filas vacías o con código inválido.",
        },
        {
          title: "Comparar",
          text: "Separa productos nuevos, existentes y repetidos dentro del archivo.",
        },
        {
          title: "Escribir",
          text: "Crea y actualiza por la API, y muestra cuántos entraron y cuántos se omitieron.",
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
