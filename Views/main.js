
//--------------darkmode-----------------//

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "rgb(17, 17, 25)";
    bodyEl.style.color = "white"
  } else {
    bodyEl.style.background = "white";
    bodyEl.style.color = "rgb(17, 17, 25)"
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

//--------------------------------//

