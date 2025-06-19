let themeSwitch = document.getElementById("theme");
let switchIcon = document.getElementById("switch");

function enterSwitch() {
  if (themeSwitch.innerHTML === "It's Light Mode") {
    themeSwitch.innerHTML = "Change to Dark Mode";
    switchIcon.innerHTML = "🌚";
  } else if (themeSwitch.innerHTML === "It's Dark Mode") {
    themeSwitch.innerHTML = "Change to Light Mode";
    switchIcon.innerHTML = "🌞";
  }
}

function exitSwitch() {
  if (themeSwitch.innerHTML === "Change to Dark Mode") {
    themeSwitch.innerHTML = "It's Light Mode";
    switchIcon.innerHTML = "🌞";
  } else if (themeSwitch.innerHTML === "Change to Light Mode") {
    themeSwitch.innerHTML = "It's Dark Mode";
    switchIcon.innerHTML = "🌚";
  }
}

function applySwitch() {
  let canvas = document.body;
  let header = document.getElementById("home");
  let navbar = document.getElementsByTagName("nav");
  let loginButton = document.getElementById("login");
  let anchor = document.getElementsByTagName("a");
  let card = document.getElementsByClassName("card");
  let footer = document.getElementsByTagName("footer");

  if (themeSwitch.innerHTML === "Change to Dark Mode") {
    themeSwitch.innerHTML = "It's Dark Mode";
    canvas.style.backgroundColor = "black";
    canvas.style.color = "white";
    header.style.backgroundColor = "#242526";
    if (navbar[0]) navbar[0].style.backgroundColor = "#18191a";
    if (loginButton) loginButton.style.backgroundColor = "black";
    if (footer[0]) {
      footer[0].style.backgroundColor = "#242526";
      footer[0].style.color = "white";
    }

    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = "white";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.2)";
    }
  } else if (themeSwitch.innerHTML === "Change to Light Mode") {
    themeSwitch.innerHTML = "It's Light Mode";
    canvas.style.backgroundColor = "white";
    canvas.style.color = "black";
    header.style.backgroundColor = "#44b45e";
    if (navbar[0]) navbar[0].style.backgroundColor = "#358e49";
    if (loginButton) loginButton.style.backgroundColor = "white";
    if (footer[0]) {
      footer[0].style.backgroundColor = "#44b45e";
      footer[0].style.color = "black";
    }

    for (let i = 0; i < anchor.length; i++) {
      anchor[i].style.color = "black";
    }
    for (let i = 0; i < card.length; i++) {
      card[i].style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
  }
}
