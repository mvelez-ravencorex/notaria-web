# Patrones y Convenciones

Guia de patrones de codigo y convenciones del proyecto NotarIA Web.

---

## Stack Tecnologico

- **Framework**: Astro 5.x
- **Estilos**: Tailwind CSS 4.x
- **Lenguaje**: TypeScript (strict)
- **Hosting**: Estatico (Vercel, Netlify, GitHub Pages)

---

## Estructura de Archivos

```
notaria-web/
├── .agents/              # Documentacion para agentes IA
├── public/               # Assets estaticos
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/       # Componentes Astro reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Pricing.astro
│   │   ├── UseCases.astro
│   │   ├── FAQ.astro
│   │   └── Footer.astro
│   ├── layouts/          # Layouts base
│   │   └── Layout.astro
│   ├── pages/            # Paginas (rutas)
│   │   └── index.astro
│   └── styles/           # Estilos globales
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Convenciones de Codigo

### Componentes Astro

- Un componente por archivo
- Props tipadas con TypeScript interface
- Logica en el frontmatter (---), markup debajo
- Scripts de cliente en `<script>` tags al final

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'Default' } = Astro.props;
---

<div>
  <h1>{title}</h1>
  <p>{description}</p>
</div>

<script>
  // Client-side JS here
</script>
```

### Nombres

- Componentes: PascalCase (`Header.astro`)
- Paginas: kebab-case (`index.astro`, `about-us.astro`)
- CSS classes: kebab-case via Tailwind

---

## Estilos

### Variables CSS (en global.css)

```css
@theme {
  --color-primary: #1A1A1A;
  --color-accent: #10B981;
  --color-secondary: #6B7280;
  /* ... */
}
```

### Clases utilitarias personalizadas

- `.btn-primary` - Boton principal oscuro
- `.btn-secondary` - Boton con borde
- `.section` - Padding de seccion responsivo
- `.container` - Max-width centrado

### Colores Tailwind

Usar las variables de tema:
- `text-primary`, `bg-primary`
- `text-accent`, `bg-accent`
- `text-secondary`, `bg-secondary`

---

## Iconos

Usar SVG inline para iconos. Patron comun:

```astro
<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..." />
</svg>
```

---

## Scripts de NPM

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de produccion
- `npm run preview` - Preview del build

---

## Internacionalizacion (i18n)

### REGLA CRITICA: Todo cambio debe aplicarse en TODOS los idiomas

El sitio soporta cinco idiomas:
- **Ingles (EN)**: Ruta raiz `/` — componentes en `src/components/`, layouts en `src/layouts/`, paginas en `src/pages/`
- **Espanol (ES)**: Ruta `/es` — componentes en `src/components/es/`, layout `src/layouts/LayoutEs.astro`, paginas en `src/pages/es/`
- **Portugues BR (PT)**: Ruta `/pt` — componentes en `src/components/pt/`, layout `src/layouts/LayoutPt.astro`, paginas en `src/pages/pt/`
- **Frances FR (FR)**: Ruta `/fr` — componentes en `src/components/fr/`, layout `src/layouts/LayoutFr.astro`, paginas en `src/pages/fr/`
- **Aleman DE (DE)**: Ruta `/de` — componentes en `src/components/de/`, layout `src/layouts/LayoutDe.astro`, paginas en `src/pages/de/`

**Cualquier cambio en contenido, estilos, estructura o funcionalidad debe replicarse en los 5 idiomas (EN, ES, PT, FR, DE).** Esto incluye:
- Nuevas secciones o componentes
- Cambios de estilos (colores, tipografia, layout)
- Actualizacion de textos o datos (precios, features, legal)
- Nuevas paginas
- Correcciones de bugs visuales
- Cambios en Header, Footer o Layout

### Estructura de archivos por idioma

```
src/
├── components/
│   ├── Header.astro          # Header EN (flag USA activa)
│   ├── Hero.tsx               # Componentes EN
│   ├── Pricing.tsx
│   ├── Footer.tsx
│   ├── ...
│   ├── HeaderEs.astro         # Header ES (flag Argentina activa)
│   ├── HeaderPt.astro         # Header PT (flag Brasil activa)
│   ├── HeaderFr.astro         # Header FR (flag Francia activa)
│   ├── HeaderDe.astro         # Header DE (flag Alemania activa)
│   ├── es/                    # Componentes ES (misma estructura)
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pt/                    # Componentes PT (misma estructura)
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── fr/                    # Componentes FR (misma estructura)
│   │   ├── Hero.tsx
│   │   ├── Pricing.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── de/                    # Componentes DE (misma estructura)
│       ├── Hero.tsx
│       ├── Pricing.tsx
│       ├── Footer.tsx
│       └── ...
├── layouts/
│   ├── Layout.astro           # Layout EN (lang="en")
│   ├── LayoutEs.astro         # Layout ES (lang="es", og:locale="es_AR")
│   ├── LayoutPt.astro         # Layout PT (lang="pt", og:locale="pt_BR")
│   ├── LayoutFr.astro         # Layout FR (lang="fr", og:locale="fr_FR")
│   └── LayoutDe.astro         # Layout DE (lang="de", og:locale="de_DE")
├── pages/
│   ├── index.astro            # Home EN
│   ├── privacy.astro          # Privacy EN
│   ├── terms.astro            # Terms EN
│   ├── support.astro          # Support EN
│   ├── 404.astro
│   ├── es/
│   │   ├── index.astro        # Home ES
│   │   ├── privacy.astro      # Privacy ES
│   │   └── terms.astro        # Terms ES
│   ├── pt/
│   │   ├── index.astro        # Home PT
│   │   ├── privacy.astro      # Privacy PT
│   │   └── terms.astro        # Terms PT
│   ├── fr/
│   │   ├── index.astro        # Home FR
│   │   ├── privacy.astro      # Privacy FR
│   │   └── terms.astro        # Terms FR
│   └── de/
│       ├── index.astro        # Home DE
│       ├── privacy.astro      # Privacy DE
│       └── terms.astro        # Terms DE
```

### Imports desde `src/components/es/`

Los componentes ES usan rutas relativas ajustadas:
- Imagenes: `../../assets/images/` (en vez de `../assets/images/`)
- UI compartidos: `../ui/` (badge, card, wavy-background, gradient-dots, etc.)
- Alias: `@/components/ui/` tambien funciona

### Selector de idioma

El Header incluye un dropdown de idioma con banderas SVG:
- EN: bandera de USA, enlaza a `/`
- ES: bandera de Argentina, enlaza a `/es`
- PT: bandera de Brasil, enlaza a `/pt`
- FR: bandera de Francia, enlaza a `/fr`
- DE: bandera de Alemania, enlaza a `/de`
- Los textos del dropdown siguen el mismo estilo que los nav-links (clase `lang-dropdown-link`)

---

## Paleta de colores

### Colores principales del sitio
- **Dorado/Oro**: `#92600a` — color de acento principal (links, subtitulos, checks, iconos)
- **Dorado hover**: `#b07a1a` — estado hover del dorado
- **Gradiente hero**: `from-amber-700 via-yellow-500 to-amber-600`
- **CTA oscuro**: `bg-[#111827]` hover `bg-[#1f2937]`
- **Amber tones**: `amber-50`, `amber-100`, `amber-600`, `amber-700` para backgrounds y acentos

### NO usar violeta/purple
Los tonos violeta (`#7C3AED`, `bg-purple-*`) han sido reemplazados por dorados en todas las paginas. Mantener consistencia con la paleta dorada.

---

## SEO

El Layout incluye:
- Meta description
- Open Graph tags
- Twitter cards
- Keywords

Cada pagina debe pasar `title` y opcionalmente `description` al Layout.
