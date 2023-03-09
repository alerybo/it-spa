import { NavButton } from "../common/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";

export function TreatmentList() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Treatments</h2>
    <p class="loading">Loading...</p>
  `;

  const ul = document.createElement("ul");

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const list = treatments.map((treatment) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h4>${treatment.name}</h4>
          <p>
            <strong>${treatment.price.toFixed(2)} PLN</strong>
          </p>
          <footer></footer>
        `;

        const detailsButton = NavButton("Read more", () =>
          TreatmentDetails(treatment.id)
        );
        li.lastElementChild.append(detailsButton);
        return li;
      });
      ul.append(...list);
      div.append(ul);
      div.querySelector(".loading").remove();
    });
  return div;
}
