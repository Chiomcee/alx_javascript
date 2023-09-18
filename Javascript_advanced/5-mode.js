function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const welcome = document.createElement("p");
  welcome.textContent = "Welcome Holberton!";
  document.body.appendChild(welcome);

  const spookyBtn = document.createElement("button");
  spookyBtn.textContent = "Spooky";
  spookyBtn.addEventListener("click", spooky);
  document.body.appendChild(spookyBtn);

  const darkBtn = document.createElement("button");
  darkBtn.textContent = "Dark mode";
  darkBtn.addEventListener("click", darkMode);
  document.body.appendChild(darkBtn);

  const screamBtn = document.createElement("button");
  screamBtn.textContent = "Scream mode";
  screamBtn.addEventListener("click", screamMode);
  document.body.appendChild(screamBtn);
}

main();
