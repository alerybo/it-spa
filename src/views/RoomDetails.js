import { Button } from "../common/Button";
import { cartManager } from "../cart/cartManager";
import * as roomImages from "../assets";

export function RoomDetails(roomId) {
  const div = document.createElement("div");
  div.classList.add("room-details")

  div.innerHTML = `
    <p class="loading">Ładuję pokój...</p>
  `;

  // fetch('http://localhost:3000/rooms/' + roomId)
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <h2>${room.name}</h3>
        <img src=${roomImages[`room${room.id}`]}/>
        <p>🛌 ${room.beds}</p>
        <p>🧑 ${room.guests}</p>
        <p>${room.description}</p>
        <p>
          <strong>${room.price} PLN</strong>
        </p>
      `;

      const addToCartButton = Button("Add to cart", () =>
        cartManager.addItem(room)
      );
      article.append(addToCartButton);

      div.querySelector(".loading").remove();
      div.append(article);
    });

  return div;
}
