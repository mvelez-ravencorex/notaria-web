# Decisiones de Diseno

Registro de decisiones tecnicas y de diseno tomadas en el proyecto.

---

## Formato ADR (Architecture Decision Record)

```markdown
### [Numero] - Titulo

**Estado**: Propuesta | Aceptada | Rechazada | Obsoleta
**Fecha**: YYYY-MM-DD

**Contexto**: Cual es el problema o situacion?

**Decision**: Que se decidio hacer?

**Consecuencias**: Cuales son los resultados esperados?
```

---

## Decisiones

### ADR-001 - Paleta de colores y diseno visual

**Estado**: Aceptada
**Fecha**: 2026-01-25

**Contexto**: Necesitamos definir la identidad visual del sitio web de NotarIA.

**Decision**: Usar la paleta de colores de la app existente:
- Primary: #1A1A1A (Negro/Gris oscuro)
- Accent: #10B981 (Verde esmeralda)
- Background: #FFFFFF (Blanco)
- Secondary: #6B7280 (Gris medio)

Tipografia: Inter como alternativa web a SF Pro.

**Consecuencias**: Coherencia visual entre la app y el sitio web. Diseno limpio y profesional.

---

### ADR-002 - Estructura del sitio

**Estado**: Aceptada
**Fecha**: 2026-01-25

**Contexto**: Definir las secciones del landing page.

**Decision**: 7 secciones principales:
1. Hero con CTA App Store
2. Features con iconos
3. Como funciona (3 pasos)
4. Planes y precios
5. Casos de uso / Testimonios
6. FAQ
7. Footer

**Consecuencias**: Estructura clara que guia al usuario desde el interes hasta la conversion.

---

### ADR-003 - Tecnologia del sitio

**Estado**: Aceptada
**Fecha**: 2026-01-25

**Contexto**: Seleccionar el stack tecnologico para el sitio web.

**Opciones consideradas**:
- **Astro**: Sitio estatico, rapido, ideal para landing pages
- **Next.js**: Mas potente si se necesita interactividad compleja
- **HTML/CSS/JS puro**: Simple, sin dependencias

**Decision**: Astro + Tailwind CSS

**Consecuencias**:
- Sitio estatico ultra rapido (0 JS por defecto)
- Excelente SEO out of the box
- Facil de hostear en Vercel, Netlify, GitHub Pages
- Tailwind permite desarrollo rapido con el sistema de diseno

---

### ADR-004 - Internacionalizacion por duplicacion de componentes

**Estado**: Aceptada
**Fecha**: 2026-02-10

**Contexto**: El sitio necesita soportar ingles y espanol. Se evaluaron distintos enfoques de i18n.

**Opciones consideradas**:
- **Props-based i18n**: Pasar textos como props. Riesgo de romper la version existente.
- **Libreria i18n (astro-i18n)**: Mas complejo, requiere refactoring.
- **Duplicacion de componentes**: Copiar componentes con textos traducidos en `src/components/es/`.

**Decision**: Duplicacion de componentes en `src/components/es/` con layouts y paginas separadas en `src/pages/es/`.

**Consecuencias**:
- No rompe la version en ingles existente
- Mejor SEO (paginas separadas con `lang`, `og:locale`, meta descriptions por idioma)
- **REGLA CRITICA**: Cada cambio (contenido, estilos, estructura, funcionalidad) debe aplicarse en TODOS los idiomas (EN, ES, PT, FR — ver ADR-006, ADR-007)
- Mayor mantenimiento al tener archivos duplicados
- Los componentes UI compartidos (`src/components/ui/`) se reutilizan sin duplicar

---

### ADR-005 - Paleta de colores dorada (reemplazo de violeta)

**Estado**: Aceptada
**Fecha**: 2026-02-10

**Contexto**: Las paginas legales y de soporte usaban violeta (#7C3AED) como color de acento, inconsistente con el resto del sitio que usa tonos dorados/amber.

**Decision**: Reemplazar todos los violetas por dorados:
- `#7C3AED` → `#92600a` (textos, links, checks, subtitulos)
- `#6D28D9` → `#b07a1a` (hover states)
- `bg-purple-100` → `bg-amber-100`
- `bg-purple-50` → `bg-amber-50`

**Consecuencias**: Paleta visual consistente en todo el sitio. No usar violeta en nuevas paginas.

---

### ADR-006 - Soporte de Portugues brasileno (PT-BR)

**Estado**: Aceptada
**Fecha**: 2026-02-10

**Contexto**: El sitio soportaba ingles y espanol. Se necesitaba agregar portugues brasileno para ampliar el alcance en Latinoamerica.

**Decision**: Seguir el patron de ADR-004 (duplicacion de componentes) para agregar PT-BR:
- Ruta `/pt` con componentes en `src/components/pt/`
- Layout `src/layouts/LayoutPt.astro` con `lang="pt"`, `og:locale="pt_BR"`
- Header `src/components/HeaderPt.astro` con bandera de Brasil activa
- Paginas legales en `src/pages/pt/` (privacy, terms)
- Selector de idioma actualizado en los 3 Headers (EN, ES, PT)

**Consecuencias**:
- **REGLA CRITICA actualizada**: Cada cambio debe aplicarse en los 5 idiomas (EN, ES, PT, FR, DE)
- Usar portugues brasileno (PT-BR), no europeo
- Precios en USD (mismos que EN/ES)
- Nombres propios sin traducir (NotarIA, Claude AI, RavencoreX, App Store)

---

### ADR-007 - Soporte de Frances (Francia)

**Estado**: Aceptada
**Fecha**: 2026-02-11

**Contexto**: El sitio soportaba ingles, espanol y portugues brasileno. Se necesitaba agregar frances para ampliar el alcance en Europa y Africa francofona.

**Decision**: Seguir el patron de ADR-004 (duplicacion de componentes) para agregar FR:
- Ruta `/fr` con componentes en `src/components/fr/`
- Layout `src/layouts/LayoutFr.astro` con `lang="fr"`, `og:locale="fr_FR"`
- Header `src/components/HeaderFr.astro` con bandera de Francia activa
- Paginas legales en `src/pages/fr/` (privacy, terms)
- Selector de idioma actualizado en los 4 Headers (EN, ES, PT, FR)

**Consecuencias**:
- **REGLA CRITICA actualizada**: Cada cambio debe aplicarse en los 5 idiomas (EN, ES, PT, FR, DE)
- Usar frances estandar de Francia
- Precios en USD (mismos que EN/ES/PT)
- Nombres propios sin traducir (NotarIA, Claude AI, RavencoreX, App Store)

---

### ADR-008 - Soporte de Aleman (Alemania)

**Estado**: Aceptada
**Fecha**: 2026-02-11

**Contexto**: El sitio soportaba ingles, espanol, portugues brasileno y frances. Se necesitaba agregar aleman para ampliar el alcance en Europa central (Alemania, Austria, Suiza).

**Decision**: Seguir el patron de ADR-004 (duplicacion de componentes) para agregar DE:
- Ruta `/de` con componentes en `src/components/de/`
- Layout `src/layouts/LayoutDe.astro` con `lang="de"`, `og:locale="de_DE"`
- Header `src/components/HeaderDe.astro` con bandera de Alemania activa
- Paginas legales en `src/pages/de/` (privacy, terms)
- Selector de idioma actualizado en los 5 Headers (EN, ES, PT, FR, DE)

**Consecuencias**:
- **REGLA CRITICA actualizada**: Cada cambio debe aplicarse en los 5 idiomas (EN, ES, PT, FR, DE)
- Usar aleman estandar de Alemania (Hochdeutsch)
- Precios en USD (mismos que EN/ES/PT/FR)
- Nombres propios sin traducir (NotarIA, Claude AI, RavencoreX, App Store)
