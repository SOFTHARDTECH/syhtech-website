import type { LandingContent } from '../../types/landing';

export const landingEs: LandingContent = {
  locale: 'es',
  metadata: {
    title: 'SYHTECH | Software y servicio técnico',
    description: 'Soluciones de software y soporte técnico para hacer crecer tu operación.',
  },
  navigation: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ],
  languageLabel: 'English',
  hero: {
    eyebrow: 'SYHTECH',
    title: 'Tecnología que acompaña a tu negocio.',
    description: 'Creamos software a medida y brindamos soporte técnico para que tu empresa siga avanzando.',
    actionLabel: 'Hablemos',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Software y hardware, con una mirada práctica.',
    items: [
      { title: 'Software factory', description: 'Productos digitales y sistemas a medida orientados a objetivos concretos.' },
      { title: 'Servicio técnico', description: 'Diagnóstico, mantenimiento y asistencia para tu infraestructura tecnológica.' },
    ],
  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Un socio técnico para cada etapa.',
    description: 'Combinamos desarrollo de software y conocimiento de hardware para resolver problemas reales con soluciones claras.',
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'De la necesidad a una solución confiable.',
    steps: ['Entendemos el desafío', 'Definimos la solución', 'Construimos y acompañamos'],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre tu próximo desafío.',
    description: 'Contanos qué necesitás y vemos juntos la mejor forma de resolverlo.',
    actionLabel: 'Escribir a SYHTECH',
    email: 'hola@syhtech.com',
  },
  footer: 'SYHTECH. Software factory y servicio técnico.',
};
