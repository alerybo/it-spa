export function Button(text, onClickCallback, classes = ["nav-btn"]) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.innerText = text;

  button.addEventListener("click", onClickCallback);

  return button;
}
