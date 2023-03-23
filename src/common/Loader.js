export function Loader() {
  const div = document.createElement("div");
  div.classList.add("loader");
  div.innerHTML = `
    <svg viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
    </svg>
    `;
  return div;
}
