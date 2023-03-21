import { Button } from "../common/Button";
import { cartManager } from "../cart/cartManager";
import * as roomImages from "../assets";

export function RoomDetails(roomId) {
  const div = document.createElement("div");
  div.classList.add("room-details");

  div.innerHTML = `
    <p class="loading">Ładuję pokój...</p>
  `;

  // fetch('http://localhost:3000/rooms/' + roomId)
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <img src=${roomImages[`room${room.id}`]}/>
        <div id="room-details">
          <h2>${room.name}</h3>
          <span>🛏 ${room.beds}</span>
          <span>☺ ${room.guests}</span>
          <p>${room.description}</p>
          <h1>
            <strong>${room.price} PLN</strong>
          </h1>
        </div>
      `;

      const addToCartButton = Button(
        "Add to cart",
        () => cartManager.addItem(room),
        ["dark-btn"]
      );
      article.querySelector("#room-details").append(addToCartButton);

      div.querySelector(".loading").remove();
      div.append(article);
    });

  return div;
}
