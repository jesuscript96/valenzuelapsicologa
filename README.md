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
  pages/        una página por ruta (/, /cuerpo-y-salud, /vida-y-procesos, /como-trabajo, /sobre-mi, /contacto, /aviso-legal, /privacidad, /cookies, /pendientes)
  layouts/      Base.astro: <head>, cabecera, pie y barra de cita en móvil
  components/   piezas compartidas (cabecera, pie, banda de cita, cabecera de página, arte de contornos…)
  lib/          contours.ts: genera las líneas de contorno en tiempo de compilación
  data/site.ts  navegación y el interruptor DRAFT
  styles/       global.css con los tokens de color (modo claro y oscuro)
  assets/       fotografías editoriales (Astro las optimiza a WebP)
prototipo/      el prototipo HTML original, solo como referencia
```

Las fuentes (Newsreader y Hanken Grotesk) se sirven desde la propia web mediante Fontsource, sin llamadas a Google Fonts.

## Publicación y modo borrador

La web está publicada en https://www.valenzuelapsicologa.com y abierta a los buscadores (`DRAFT = false` en `src/data/site.ts`; `robots.txt` enlaza `/sitemap.xml`). Con `DRAFT = true` vuelve a pedir que no se indexe (`noindex` y `robots.txt`) y publica la lista `/pendientes`.

Los datos del aviso legal están en `LEGAL`, en `src/data/site.ts`. Las líneas vacías (ahora solo el domicilio) no se muestran hasta rellenarlas.

## Contacto

De momento el contacto es solo por WhatsApp (+34 691 52 63 73). El número está en `src/data/site.ts`. En `/contacto`, el nombre y el mensaje que escribe la persona se añaden al enlace de WhatsApp. No se envía ni se guarda nada desde la web.

## Despliegue en Vercel

Importa el repositorio en Vercel; detecta Astro automáticamente (build `npm run build`, salida `dist`). `vercel.json` activa URLs sin `.html` ni barra final.
