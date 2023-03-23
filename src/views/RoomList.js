import { NavButton } from "../common/NavButton";
import { Button } from "../common/Button";
import { Loader } from "../common/Loader";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from "../cart/cartManager";
import * as roomImages from "../assets";

export function RoomList() {
  const div = document.createElement("div");
  div.classList.add("rooms");
  div.innerHTML = `<h2>Rooms</h2>`;

  const loader = Loader();
  div.append(loader);

  const ul = document.createElement("ul");

  // pobieramy liste wszystkich pokoi
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      const lis = rooms.map((room) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <img src=${roomImages[`room${room.id}`]}/>
          <div>
            <h4>${room.name}</h4>
            <p>
              <strong>${room.price} PLN</strong>
            </p>
          </div>
        `;

        const addToCartButton = Button(
          "Add to cart",
          () => cartManager.addItem(room),
          ["light-btn"]
        );
        const detailsButton = NavButton(
          "Read more",
          () => RoomDetails(room.id),
          ["light-btn"]
        );

        li.lastElementChild.append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);
      div.append(ul);
      div.querySelector(".loader").remove();
    });

  return div;
}
