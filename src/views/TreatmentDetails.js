import { Button } from "../common/Button";
import { Loader } from "../common/Loader";
import { cartManager } from "../cart/cartManager";

export function TreatmentDetails(treatmentId) {
  const div = document.createElement("div");
  div.classList.add("treatment-details");

  div.innerHTML = `
    <h2>Treatment: ${treatmentId}</h2>
  `;

  const loader = Loader();
  div.append(loader);

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

      const addToCartButton = Button(
        "Add to cart",
        () => cartManager.addItem(treatment),
        ["dark-btn"]
      );
      article.append(addToCartButton);

      div.querySelector(".loader").remove();
      div.append(article);
    });

  return div;
}
