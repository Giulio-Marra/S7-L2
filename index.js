const formTxt = document.getElementById("formTxt");
const btnSend = document.getElementById("saveBtn");
const btnRemove = document.getElementById("removeBtn");
const formArea = document.getElementById("formArea");

const TEXT_MEMORY = "userName";

formArea.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = formTxt.value;

  localStorage.setItem(TEXT_MEMORY, name);

  formTxt.value = "";

  showName();
});

const showName = () => {
  const name = localStorage.getItem(TEXT_MEMORY);

  const previousNameTxt = formArea.querySelector("p");
  if (previousNameTxt) {
    formArea.removeChild(previousNameTxt);
  }

  if (name) {
    const nameTxt = document.createElement("p");
    nameTxt.textContent = "Nome salvato: " + name;

    formArea.appendChild(nameTxt);
  }
};

btnRemove.addEventListener("click", (event) => {
  event.preventDefault();
  const name = localStorage.getItem(TEXT_MEMORY);
  if (name) {
    localStorage.removeItem(TEXT_MEMORY);
    showName();
  } else {
    alert("Non hai salvato nessun nome");
  }
});

showName();

const COUNT_MEMORY = "counterM";
let count = sessionStorage.getItem(COUNT_MEMORY);

function startCounter() {
  count++;
  sessionStorage.setItem(COUNT_MEMORY, count);
  document.getElementById("counter").textContent = count;
}

setInterval(startCounter, 1000);
