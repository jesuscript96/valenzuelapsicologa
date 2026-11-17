// While DRAFT is true the site publishes /pendientes (not linked from anywhere)
// and asks search engines not to index anything. Set it to false to go live.
export const DRAFT = false;

export const SITE_NAME = 'María Valenzuela Psicología';

// Holder data for the legal notice. Lines whose value is empty are not shown;
// fill fullName, nif and address as soon as María sends them (LSSI art. 10).
export const LEGAL = {
  name: 'María Valenzuela',
  fullName: '',
  nif: '',
  address: '',
  college: 'Colegio Oficial de la Psicología de la Comunitat Valenciana (COPCV)',
  collegeNumber: 'CV19927',
  degrees: 'Titulación universitaria en Psicología y Máster general sanitario',
  updated: '17 de noviembre de 2026',
};

export const LEGAL_PAGES = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
];

// Appointments go through WhatsApp; the email is shown as information. No address for now.
export const EMAIL = 'psicologiamariavalenzuela@gmail.com';
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
