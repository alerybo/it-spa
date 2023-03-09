export function RoomDetails(roomId) {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Room: ${roomId}</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  // fetch('http://localhost:3000/rooms/' + roomId)
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <h3>${room.name}</h3>
        <p>Liczba łóżek: ${room.beds} x 🛌</p>
        <p>Liczba gości: ${room.guests} x 🧑</p>
        <p>${room.description}</p>
        <p>
          <strong>${room.price.toFixed(2)} PLN</strong>
        </p>
      `;

      div.querySelector(".loading").remove();
      div.append(article);
    });

  return div;
}
