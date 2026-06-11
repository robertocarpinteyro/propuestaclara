# La Ciudad que Cuida — Landing de propuesta

Single-page landing para la **Estrategia de Contenido Audiovisual · Jefatura de Gobierno · CDMX**.
Sitio oscuro, cinematográfico y centrado en video.

**Stack:** React + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción (dist/)
npm run preview  # previsualizar el build
```

## Estructura

```
src/
  pages/Index.tsx          # composición de la página
  components/
    LoadingScreen.tsx      # contador 000→100 + palabras rotando
    Navbar.tsx             # pill flotante con links y CTA
    Hero.tsx               # video de fondo + entrada GSAP
    Formatos.tsx           # bento grid de los 5 formatos
    InstagramFeed.tsx      # mockup del perfil de IG (marco de teléfono)
    Enfoque.tsx            # comparativa evitamos / buscamos
    ComoLoHacemos.tsx      # galería parallax con ScrollTrigger
    PorQueFunciona.tsx     # 3 columnas + tabla de frecuencias
    Contacto.tsx           # marquee GSAP + CTA + footer
  data/
    media.ts               # configuración de Cloudinary  ← EDITAR AQUÍ
    content.ts             # textos de formatos, enfoque, frecuencias
    feed.ts                # datos del mockup de Instagram
```

## Conectar la media de Cloudinary

Todo el material se sirve por URL de Cloudinary con `f_auto,q_auto`.
Mientras un asset no esté configurado, el sitio muestra placeholders estilizados
(gradientes guinda) en su lugar — nada se rompe.

1. En `src/data/media.ts`, reemplazar `CLOUD_NAME` por el cloud real.
2. Subir los assets con esta estructura de carpetas:
   - `reels/general` — reel del hero y footer (.mp4)
   - `reels/cineminuto`, `reels/color`, `reels/face-to-face`, `reels/podcast`, `reels/servicios`
   - `refs/dron.jpg`, `refs/run-gun.jpg`, `refs/color.jpg`, `refs/ritmo.jpg`, `refs/motion.jpg`, `refs/lenguaje.jpg`
   - `feed/avatar.jpg` y `feed/post1.jpg` … `feed/post12.jpg` (cuadradas)
3. En `src/data/feed.ts`, actualizar handle, métricas, likes y comentarios reales.

## Pendientes a validar (del brief)

- Handle real de Instagram y números del perfil.
- Frecuencias de publicación (son propuesta base).
- Redacción de los textos de cada formato.
- `hls.js` solo si se quiere streaming adaptativo (`.m3u8` de Cloudinary).
