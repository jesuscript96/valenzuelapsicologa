# María Valenzuela · Psicología

Web de María Valenzuela, psicóloga de enfoque integrador. Sitio estático hecho con [Astro](https://astro.build), pensado para desplegarse en Vercel.

## Desarrollo

Requiere Node 22 o superior.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # comprueba tipos y genera dist/
npm run preview   # sirve dist/ en local
```

## Estructura

```
src/
  pages/        una página por ruta (/, /cuerpo-y-salud, /vida-y-procesos, /como-trabajo, /sobre-mi, /contacto, /pendientes)
  layouts/      Base.astro: <head>, cabecera, pie y barra de cita en móvil
  components/   piezas compartidas (cabecera, pie, banda de cita, cabecera de página, arte de contornos…)
  lib/          contours.ts: genera las líneas de contorno en tiempo de compilación
  data/site.ts  navegación y el interruptor DRAFT
  styles/       global.css con los tokens de color (modo claro y oscuro)
  assets/       fotografías editoriales (Astro las optimiza a WebP)
prototipo/      el prototipo HTML original, solo como referencia
```

Las fuentes (Newsreader y Hanken Grotesk) se sirven desde la propia web mediante Fontsource, sin llamadas a Google Fonts.

## Modo borrador

`DRAFT = true` en `src/data/site.ts` muestra el aviso de borrador, publica la lista `/pendientes` y pide a los buscadores que no indexen la web (`noindex` y `robots.txt`). Para publicar de verdad, ponlo a `false` y, cuando haya dominio, define `site` en `astro.config.mjs`.

Los datos aún por confirmar se marcan en el código con `<span class="pend">…</span>`.

## Contacto

De momento el contacto es solo por WhatsApp (+34 691 52 63 73). El número está en `src/data/site.ts`. En `/contacto`, el nombre y el mensaje que escribe la persona se añaden al enlace de WhatsApp. No se envía ni se guarda nada desde la web.

## Despliegue en Vercel

Importa el repositorio en Vercel; detecta Astro automáticamente (build `npm run build`, salida `dist`). `vercel.json` activa URLs sin `.html` ni barra final.
