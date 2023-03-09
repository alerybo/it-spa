import { NavButton } from "../common/NavButton";
import { Button } from "../common/Button";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from "../cart/cartManager";

export function RoomList() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Rooms</h2>
    <p class="loading">Ładowanie pokoi...</p>
  `;

  const ul = document.createElement("ul");

  // pobieramy liste wszystkich pokoi
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <h4>${room.name}</h4>
          <p>
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const addToCartButton = Button("Add to cart", () =>
          cartManager.addItem(room)
        );
        const detailsButton = NavButton("Read more", () =>
          RoomDetails(room.id)
        );
        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector(".loading").remove();
    });

  return div;
}
