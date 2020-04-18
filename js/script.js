const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const mail = document.querySelector("#mail");
const age = document.querySelector("#age");
const poste = document.querySelector("#poste");
const telephone = document.querySelector("#telephone");
const statut = document.querySelector("#statut");
const pays = document.querySelector("#pays");
const btn = document.querySelector("#btn");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

const employees = [];

const genererUnMatricule = () => {
  return Math.round(Math.random().toString() * 1000000000);
};

const videLesChampsDuFormulaire = () => {
  (nom.value = ""),
    (prenom.value = ""),
    (mail.value = ""),
    (age.value = ""),
    (poste.value = ""),
    (telephone.value = ""),
    (statut.value = ""),
    (pays.value = "");
};
function addTagSpanError(name) {
  let span = document.createElement("span");
    span.classList.add('span');
    name.parentElement.appendChild(span);
    span = document.querySelector('.span');
    if(span.textContent === ""){
        span.textContent = "Champ vide";
        span.classList.add('error');       
    }
}
function insertValueInTable(event) {
  if (nom.value === "") {
    event.preventDefault();
    addTagSpanError(nom);
  } else if (prenom.value === "") {
    event.preventDefault();
    addTagSpanError(prenom);
  } else if (mail.value === "") {
    event.preventDefault();
    addTagSpanError(mail);
  } else if (poste.value === "") {
    event.preventDefault();
    addTagSpanError(poste);
  } else if (telephone.value === "") {
    event.preventDefault();
    addTagSpanError(telephone);
  } else if (statut.value === "") {
    event.preventDefault();
    addTagSpanError(statut);
  } else if (pays.value === "") {
    event.preventDefault();
    addTagSpanError(pays);
  } else {
    event.preventDefault();
    tbody.innerHTML = '';
   
    let dataEmployees = {
        matricule: genererUnMatricule(),
        nom: nom.value,
        prenom: prenom.value,
        mail: mail.value,
        age: age.value,
        poste: poste.value,
        telephone: telephone.value,
        statut: statut.value,
        pays: pays.value,
    }
    employees.push(dataEmployees);

    for(let employe of employees){
        const tr = document.createElement('tr');
        tbody.append(tr);
        for(employeEnCour in employe){
            let td = document.createElement('td');
            tr.append(td);
            td.append(employe[employeEnCour]);
        }
    }

    videLesChampsDuFormulaire();
  }
};
btn.addEventListener("click", insertValueInTable);


