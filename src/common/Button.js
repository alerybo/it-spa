export function Button(text, onClickCallback) {
  const button = document.createElement("button");
  button.innerText = text;

  button.addEventListener("click", onClickCallback);

  return button;
}
