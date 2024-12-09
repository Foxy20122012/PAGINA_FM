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
      { label: "Posts", href: "/views/viewPost" },   
      { label: "Eventos", href: "/views/viewEvents" },
      { label: "Noticias", href: "/views/viewNews" },
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
    href: "/courses" ,
    icon: "info-circle",
    children: [],
  },
  {
    label: "Catedraticos",
    icon: "info-circle",
    href: "/professor",
    children: [],
  },
  {
    label: "Historia",
    icon: "info-circle",
    href: "/history",
    children: [],
  },  
  {
    label: "Preguntas Frecuentes",
    icon: "info-circle",
    href: "/faq",
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
