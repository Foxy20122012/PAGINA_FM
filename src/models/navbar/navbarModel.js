export const navbarModel = [
  {
    label: "Home",
    href: "/",
    icon: "home",
    children: [], // No tiene hijos
  },
  {
    label: "About",
    href: "/about",
    icon: "info-circle",
    children: [
      { label: "Our Team", href: "/about/team" },
      { label: "Our History", href: "/about/history" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    icon: "tool",
    children: [
      { label: "Web Development", href: "/services/web" },
      { label: "Mobile Development", href: "/services/mobile" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "SEO Optimization", href: "/services/seo" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "tool",
    children: [
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Completed Projects", href: "/projects/completed" },
      { label: "Case Studies", href: "/projects/case-studies" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    icon: "info-circle",
    children: [
      { label: "Latest Articles", href: "/blog/latest" },
      { label: "Technology Trends", href: "/blog/tech" },
      { label: "How-To Guides", href: "/blog/guides" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "info-circle",
    children: [], // No tiene hijos
  },
];
