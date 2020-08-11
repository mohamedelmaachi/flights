// Liste des menus pour les titre, sidebar et breadcrumb
import { ROUTES } from "./routes.config";

export const MENU = [
  {
    // Liste des utilisateurs
    isMenu: true,
    sidebarName: "Components",
    routeName: ROUTES['component'].name,
    icon: "users",
    name: "Components",
    submenu: [
      { routelink: "", name: "Dashboard", active: false },
      { routelink: "", name: "Pages", active: false },
      { routelink: "", name: "Liste des utilisateurs", active: true }
    ],
    hasBtn: false
  },
];
