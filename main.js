const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (fancyArray) => {
  let domString = "";
  fancyArray.forEach((animal) => {
    if(animal.isCarnivore){
      domString += `<div class="animal carnivore">`;
    } else {
      domString += `<div class="animal vegetable">`;
    }
    domString +=   `<h1>${animal.name}</h1>`;
    domString +=   `<h3>${animal.number}</h3>`;
    domString +=   `<img class="animal-image" src="${animal.imageUrl}">`;
    domString +=   `<div class="button-container">`;
    domString +=     `<button>Escaped</button>`;
    domString +=   `</div>`;
    domString += `</div>`;
  })
  printToDom(domString, 'zoo')
};

function executeThisCodeIfXHRFails() {
  console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  buildDomString(data.animals);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "animals.json")
  myRequest.send();
};

startApplication();
