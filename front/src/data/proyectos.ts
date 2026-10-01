export interface Proyecto {
  id: number;
  titulo: string;
  anio: string;
  descripcion: string;
  imagen: string;
  tags: string[];
  github: string;
}

export const misProyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "LaBanda - App de gestión de juntadas entre amigos",
    anio: " Sep 2026",
    descripcion: `LaBanda es una aplicación web para organizar juntadas entre amigos, pensada para resolver la coordinación que normalmente se pierde en grupos de WhatsApp. Cada evento tiene su propia sala privada, protegida con un PIN de acceso y un link para compartir, donde los invitados pueden confirmar su asistencia (confirmado, en duda, o no puede), marcar con qué se van a quedar en el chat, y ver el estado del grupo en tiempo real. Dentro de cada sala se gestionan los gastos compartidos, con dos modalidades: que una persona adelante el dinero y el resto le transfiera su parte, o armar un fondo común con un monto sugerido por persona — en ambos casos el sistema recalcula automáticamente las cuotas si se suman nuevos confirmados después de cargado el gasto. También se pueden crear encuestas para decidir en grupo (por ejemplo, el horario de arranque), armar un checklist de qué trae cada uno, e invitar amigos directamente desde un sistema de amistades con búsqueda por usuario. Una de las piezas centrales es el módulo de Torneos, con tres modalidades: liga uno contra uno con tabla de posiciones, liga de podio para juegos multijugador con puntaje configurable, y eliminación directa con bracket visual tipo llave, incluyendo manejo automático de "bye" y corrección de resultados por el organizador. El sistema cuenta además con notificaciones dentro de la app para cada evento relevante (cambios de asistencia, nuevos gastos, pagos confirmados, invitaciones), autenticación tradicional y con Google, y subida de avatar real vía Cloudinary.`,
    imagen: "/projects/labanda.png",
    tags: [
      "NestJS",
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "TailwindCSS",
      "Render",
      "Vercel",
      "Claude Code",
    ],
    github: "https://github.com/Vlorenzo4/LaBanda",
  },
  {
    id: 2,
    titulo: "Kembron - Sistema de Gestión y Control de Obras",
    anio: " Mar 2026",
    descripcion: `Kembron es una plataforma web para la gestión de obras de construcción, con dos tipos de acceso según el rol del usuario. Desde el panel de administrador se puede ver un dashboard global con el estado de todas las obras, crear y editar obras, armar el presupuesto de cada una por títulos e ítems (incluyendo adicionales y deductivos), definir la programación semanal de trabajo, visualizar el avance mediante gráficos de Gantt y Curva S, y gestionar los usuarios asignando supervisores a cada obra. Desde el panel de supervisor, pensado para usarse desde el celular directamente en el sitio de obra, se pueden ver solo las obras asignadas, cargar el avance real de cada ítem del presupuesto y registrar los gastos clasificados por categoría. Internamente, el sistema calcula de forma automática el presupuesto teórico y real de cada obra, lo ejecutado hasta el momento, el porcentaje de avance físico por ítem y por obra, y el avance económico, comparando lo gastado contra el presupuesto disponible.`,
    imagen: "/projects/obras.png",
    tags: [
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "TailwindCSS",
      "Recharts",
      "Vercel ",
      "Claude Code",
    ],
    github: "https://github.com/Vlorenzo4/proyecto-prueba-kembron",
  },
  {
    id: 3,
    titulo: "MonteVino – Sistema de Reservas y Gestión (Backend)",
    anio: " Mar 2026",
    descripcion: `Montevino es una aplicación diseñada para optimizar la gestión de reservas en restaurantes, permitiendo a los usuarios reservar mesas, seleccionar platos y confirmar su reserva mediante pagos online.
                    En este proyecto participé en el desarrollo del backend junto a otro desarrollador, implementando la lógica de negocio, integraciones externas y estructura de la API.
                    En cuanto al desarrollo del backend, se implementó NestJS con una arquitectura modular, enfocada en la separación de responsabilidades y la escalabilidad del sistema. Se trabajó con autenticación basada en JWT mediante Auth0, permitiendo gestionar roles de usuario y proteger los endpoints. Además, se desarrolló lógica de negocio para validar reservas, controlando fechas, horarios y evitando duplicaciones por usuario en un mismo día.
                    El sistema también incluye un manejo de stock en tiempo real de los platos, asegurando que no se puedan realizar pedidos sin disponibilidad. Se integró Mercado Pago para el procesamiento de pagos, utilizando webhooks para actualizar automáticamente el estado de las reservas una vez aprobado el pago, momento en el cual se realiza la asignación dinámica de mesas según disponibilidad. Complementariamente, se implementó el envío de notificaciones por email con los detalles de la reserva y su confirmación.
                    La persistencia de datos se gestionó mediante PostgreSQL utilizando TypeORM como ORM, permitiendo trabajar con relaciones entre entidades y consultas eficientes. Además, se documentaron los endpoints de la API con Swagger para facilitar el testing y la integración con el frontend.`,
    imagen: "/projects/montevinov2.png",
    tags: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "Auth0",
      "Cloudinary",
      "JWT",
      "Mercado Pago",
      "Swagger",
    ],
    github: "https://github.com/montevinoPF/Montevino-Back",
  },
  {
    id: 4,
    titulo: "Masoterapia - Gestor de turnos",
    anio: " Ene 2026",
    descripcion: `Desarrollé un sistema de turnos full stack donde se pueden crear, reservar y gestionar horarios. Trabajé el backend con Node.js y el frontend con React, implementando autenticación, manejo de disponibilidad y lógica de reservas.`,
    imagen: "/projects/ga-masoterapiav2.png",
    tags: ["TypeScript", "PostgreSQL", "TypeORM", "React", "Swagger"],
    github: "https://github.com/Vlorenzo4/GestorDeTurnos",
  },
  {
    id: 4,
    titulo: "E-Commerce API",
    anio: "Feb 2026",
    descripcion: `Desarrollo de una API backend para una plataforma de e-commerce, enfocada en la gestión de usuarios, productos y órdenes.

                    El sistema incluye autenticación con JWT, control de roles (admin y usuario), y manejo de datos persistentes utilizando PostgreSQL con TypeORM. También se implementó la integración con Cloudinary para la gestión de imágenes.

                    Se trabajó bajo una arquitectura modular utilizando NestJS y TypeScript, aplicando buenas prácticas en el diseño de endpoints, validación de datos y organización del código.`,
    imagen: "/projects/ecommercev2.png",
    tags: [
      "NestJS",
      "PostgreSQL",
      "JWT",
      "TypeScript",
      "Cloudinary",
      "TypeORM",
    ],
    github: "https://github.com/Vlorenzo4/e-commerce",
  },
];
