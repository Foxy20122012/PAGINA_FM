export const navbarModel = [
  {
    label: "Home",
    href: "/",
    icon: "home",
    children: [],
  },
  {
    label: "Actividades y Eventos",
    href: "/actividades-eventos",
    icon: "info-circle",
    children: [
      { label: "Eventos Pasados", href: "/actividades-eventos/pasados" },
      { label: "Próximos Eventos", href: "/actividades-eventos/proximos" },
    ],
  },
  {
    label: "Procesos de Inscripción",
    href: "/procesos-inscripcion",
    icon: "info-circle",
    children: [
      { label: "Requisitos", href: "/procesos-inscripcion/requisitos" },
      { label: "Fechas Importantes", href: "/procesos-inscripcion/fechas" },
    ],
  },
  {
    label: "Pensum Académico",
    href: "/pensum-academico",
    icon: "info-circle",
    children: [],
  },
  {
    label: "Galería de Eventos",
    href: "/galeria-eventos",
    icon: "info-circle",
    children: [
      { label: "Fotos", href: "/galeria-eventos/fotos" },
      { label: "Videos", href: "/galeria-eventos/videos" },
    ],
  },
  {
    label: "Contacto",
    href: "/contact",
    icon: "info-circle",
    children: [],
  },
];
