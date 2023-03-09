import { cartManager } from "../cart/cartManager";
import { NavButton } from "../common/NavButton";

export function Cart() {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>Cart</h2>
    <p>Przeglądaj zawartość koszyka.</p>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </table>
  `;

  const tableRows = cartManager.getAllItems().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td></td>
    `;

    const removeItemButton = NavButton("🗑️", () => {
      cartManager.removeItem(item);
      return Cart();
    });

    tr.lastElementChild.append(removeItemButton);

    return tr;
  });

  const tableFooter = document.createElement("tr");

  tableFooter.innerHTML = `
    <td></td>
    <td></td>
    <td>
      Total = <strong>${cartManager.getTotalPrice()} PLN</strong>
    </td>
    <td></td>
  `;

  div.querySelector(".table").append(...tableRows, tableFooter);

  return div;
}
