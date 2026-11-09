// While DRAFT is true the site shows the review banner, publishes /pendientes
// and asks search engines not to index anything. Set it to false to go live.
export const DRAFT = true;

export const SITE_NAME = 'María Valenzuela Psicología';

// Appointments go through WhatsApp; the email and address are shown as information.
export const EMAIL = 'psicologiamariavalenzuela@gmail.com';
export const ADDRESS = 'Calle Pérez Bayer 11';
export const WHATSAPP = { number: '34691526373', display: '+34 691 52 63 73' };
export const WHATSAPP_GREETING = 'Hola, María. Me gustaría solicitar una primera cita.';
export const whatsappUrl = (text = WHATSAPP_GREETING) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(text)}`;

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
