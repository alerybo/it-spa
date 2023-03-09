import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { TreatmentList } from "../views/TreatmentList";
import { NavButton } from "../common/NavButton";
import { Cart } from "../views/Cart";

const navItems = [
  { name: "Home", component: Home },
  { name: "Rooms", component: RoomList },
  { name: "Treatments", component: TreatmentList },
];

export function Nav() {
  const nav = document.createElement("nav");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const navButtons = navItems.map((item) => {
    return NavButton(item.name, item.component);
  });

  nav.append(NavButton("IT SPA", Home));
  menuContainer.append(...navButtons);
  nav.append(menuContainer);
  nav.append(NavButton("Cart", Cart));

  return nav;
}
