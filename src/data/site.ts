// While DRAFT is true the site shows the review banner, publishes /pendientes
// and asks search engines not to index anything. Set it to false to go live.
export const DRAFT = true;

export const SITE_NAME = 'María Valenzuela Psicología';

export const NAV = [
  { slug: 'inicio', href: '/', label: 'Inicio' },
  { slug: 'cuerpo-y-salud', href: '/cuerpo-y-salud', label: 'Cuerpo y salud' },
  { slug: 'vida-y-procesos', href: '/vida-y-procesos', label: 'Vida y cambio' },
  { slug: 'como-trabajo', href: '/como-trabajo', label: 'Cómo trabajo' },
  { slug: 'sobre-mi', href: '/sobre-mi', label: 'Sobre mí' },
] as const;

export const FOOTER_PAGES = [
  { href: '/', label: 'Inicio' },
  { href: '/cuerpo-y-salud', label: 'Cuerpo y salud' },
  { href: '/vida-y-procesos', label: 'Vida y procesos de cambio' },
  { href: '/como-trabajo', label: 'Mi forma de trabajar' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto y primera cita' },
];
