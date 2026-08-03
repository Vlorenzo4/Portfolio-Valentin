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
    titulo: "Kembron - Sistema de Gestión y Control de Obras",
    anio: " Mar 2025",
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
    id: 2,
    titulo: "MonteVino – Sistema de Reservas y Gestión (Backend)",
    anio: " Mar 2025",
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
    id: 3,
    titulo: "Masoterapia - Gestor de turnos",
    anio: " Ene 2025",
    descripcion: `Desarrollé un sistema de turnos full stack donde se pueden crear, reservar y gestionar horarios. Trabajé el backend con Node.js y el frontend con React, implementando autenticación, manejo de disponibilidad y lógica de reservas.`,
    imagen: "/projects/ga-masoterapiav2.png",
    tags: ["TypeScript", "PostgreSQL", "TypeORM", "React", "Swagger"],
    github: "https://github.com/Vlorenzo4/GestorDeTurnos",
  },
  {
    id: 4,
    titulo: "E-Commerce API",
    anio: "Feb 2025",
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
