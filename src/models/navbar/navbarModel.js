export const navbarModel = [
  {
    label: "Home",
    href: "/",
    icon: "home",
    children: [],
  },
  {
    label: "Actividades y Eventos",
    icon: "info-circle",
    children: [
      { label: "Noticias", href: "/views/viewPost" },   
      { label: "Eventos", href: "/views/viewEvents" },
      { label: "Post", href: "/views/viewNews" },
    ],
  },
  {
    label: "Procesos de Inscripción",
    icon: "info-circle",
    children: [
      { label: "Requisitos", href: "/registration/requirements" },
      { label: "Fechas Importantes", href: "/registration/importantDate" },
    ],
  },
  {
    label: "Pensum Académico",
    icon: "info-circle",
    children: [
      { label: "Cursos", href: "/courses" },
      { label: "Temas", href: "/temas" },
    ],
  },
  {
    label: "Catedraticos",
    icon: "info-circle",
    children: [],
  },
  {
    label: "Contacto",
    href: "/contact",
    icon: "info-circle",
    children: [],
  },
  {
    label: "Acerca de",
    href: "/about",
    icon: "info-circle",
    children: [],
  },
];
