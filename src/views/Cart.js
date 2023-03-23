import { cartManager } from "../cart/cartManager";
import { NavButton } from "../common/NavButton";

export function Cart() {
  const div = document.createElement("div");
  div.classList.add("cart");

  const itemsList = cartManager.getAllItems();
  if (itemsList.length === 0) {
    div.innerHTML = `
    <h2>Cart</h2>
    <h3>Your cart is empty!</h3>
  `;
    return div;
  }

  div.innerHTML = `
    <h2>Cart</h2>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </table>
  `;

  const tableRows = itemsList.map((item) => {
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

  const total = document.createElement("div");
  total.classList.add("total");
  total.innerHTML = `Total  <strong>${cartManager.getTotalPrice()} PLN</strong>`;

  div.querySelector(".table").append(...tableRows, tableFooter);
  div.append(total);

  return div;
}
