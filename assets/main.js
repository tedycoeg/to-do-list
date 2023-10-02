const inputBox = document.querySelector(".input-box");
const inputBtn = document.querySelector(".input-btn");
const listContainer = document.querySelector(".list-container");
listContainer.innerHTML = localStorage.getItem("data");

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("list-children");
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    sadveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (inputBox.value.trim() !== "") {
      inputBtn.click();
    }
    e.preventDefault(); // Mencegah aksi default pengisian baris baru
  }
});

inputBtn.onclick = function () {
  if (inputBox.value.trim() === "") {
    alert("Please add your task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let button = document.createElement("button");
    button.innerHTML = "x";
    li.appendChild(button);
  }
  inputBox.value = "";
  saveData();
};
