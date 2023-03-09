export function TreatmentDetails(treatmentId) {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Treatment: ${treatmentId}</h2>
    <p class="loading">Loading...</p>
  `;

  fetch(`http://localhost:3000/treatments/${treatmentId}`)
    .then((response) => response.json())
    .then((treatment) => {
      const article = document.createElement("article");

      article.innerHTML = `
        <h3>${treatment.name}</h3>
        <p>Area: ${treatment.area}</p>
        <p>Time: ${treatment.time} min</p>
        <p>
          <strong>${treatment.price.toFixed(2)} PLN</strong>
        </p>
      `;

      div.querySelector(".loading").remove();
      div.append(article);
    });

  return div;
}
