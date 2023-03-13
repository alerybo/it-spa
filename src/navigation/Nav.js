import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { TreatmentList } from "../views/TreatmentList";
import { NavButton } from "../common/NavButton";
import { Button } from "../common/Button";
import { Cart } from "../views/Cart";

const navItems = [
  //{ name: "About", component: About },
  { name: "Rooms", component: RoomList },
  { name: "Treatments", component: TreatmentList },
];

export function Nav() {
  const nav = document.createElement("nav");

  // NAVBAR MENU LINKS
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const navButtons = navItems.map((item) => {
    return NavButton(item.name, item.component);
  });
  menuContainer.append(...navButtons);

  // MOBILE MENU BUTTON
  const menuButton = Button("dd", () => {
    if (menuContainer.classList.contains("open")) {
      menuContainer.classList.remove("open");
    } else {
      menuContainer.classList.add("open");
    }
  });
  menuButton.classList.add("menu-button");
  menuButton.innerHTML = `<span class="material-symbols-outlined">menu</span>`;

  // CART BUTTON
  const cartButton = NavButton("", Cart);
  cartButton.innerHTML = `<span class="material-symbols-outlined">local_mall</span>`;

  nav.append(NavButton("IT SPA", Home));
  nav.append(menuContainer);
  nav.append(menuButton);
  nav.append(cartButton);

  return nav;
}
