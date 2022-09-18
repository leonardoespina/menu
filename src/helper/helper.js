///CONTENIDO DEL MENU Y SUS RUTAS
const menu = [
  {
    name: "Home",
    icon: "home",
    ruta: "/",
    id: 1,
  },
  {
    name: "Usuarios",
    icon: "person",
    ruta: "/user",
    id: 2,
  },
];

const menuSection = [
  {
    id: 1,
    name: "Perfil",
    ruta: "/perfil",
  },
  {
    id: 2,
    name: "Salir",
    ruta: "/salir",
  },
];

export function Menu() {
  return menu;
}
export function MenuSection() {
  return menuSection;
}
