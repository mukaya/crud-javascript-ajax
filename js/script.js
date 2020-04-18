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

let selectedRow = null;

function onFormSubmit() {
      let formData = readFormData();
      if (selectedRow == null){
          insertNewRecord(formData);
          resetForm();
      }else{
         updateRecord(formData);
         resetForm();
      }
}

const genererUnMatricule = () => {
  return Math.round(Math.random().toString() * 1000000000);
};

function resetForm() {
    nom.value = "";
    prenom.value = "";
    mail.value = "";
    age.value = "";
    poste.value = "";
    telephone.value = "";
    statut.value = "";
    pays.value = "";
    selectRow = null;
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
function readFormData() {
  let formData = {};
  formData["matricule"] = genererUnMatricule();
  formData["nom"] = nom.value;
  formData["prenom"] = prenom.value;
  formData["mail"] = mail.value;
  formData["age"] = age.value;
  formData["poste"] = poste.value;
  formData["telephone"] = telephone.value;
  formData["statut"] = statut.value;
  formData["pays"] = pays.value;
  return formData;
}
function insertNewRecord(data){
  if (nom.value === "") {
    addTagSpanError(nom);
  } else if (prenom.value === "") {    
    addTagSpanError(prenom);
  } else if (mail.value === "") {    
    addTagSpanError(mail);
  } else if (poste.value === "") {     
    addTagSpanError(poste);
  } else if (telephone.value === "") {     
    addTagSpanError(telephone);
  } else if (statut.value === "") {     
    addTagSpanError(statut);
  } else if (pays.value === "") {     
    addTagSpanError(pays);
  } else {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.matricule;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nom;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prenom;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mail;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.poste;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.telephone;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.statut;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.pays;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<a onClick="onEdit(this)" class="btn btn-primary">Modifier</a>
                       <a onClick="onDelete(this)" class="btn btn-danger">Supprimer</a>`;
  }
}
function onEdit(td) {
  btn.textContent = "Mettre à jour";
  selectedRow = td.parentElement.parentElement;
  nom.value = selectedRow.cells[1].innerHTML;
  prenom.value = selectedRow.cells[2].innerHTML;
  mail.value = selectedRow.cells[3].innerHTML;
  age.value = selectedRow.cells[4].innerHTML;
  poste.value = selectedRow.cells[5].innerHTML;
  telephone.value = selectedRow.cells[6].innerHTML;
  statut.value = selectedRow.cells[7].innerHTML;
  pays.value = selectedRow.cells[8].innerHTML;
}
function updateRecord(formData) {
  if (nom.value === "") {
    addTagSpanError(nom);
  } else if (prenom.value === "") {    
    addTagSpanError(prenom);
  } else if (mail.value === "") {    
    addTagSpanError(mail);
  } else if (poste.value === "") {     
    addTagSpanError(poste);
  } else if (telephone.value === "") {     
    addTagSpanError(telephone);
  } else if (statut.value === "") {     
    addTagSpanError(statut);
  } else if (pays.value === "") {     
    addTagSpanError(pays);
  } else {
    selectedRow.cells[1].innerHTML = formData.nom;
    selectedRow.cells[2].innerHTML = formData.prenom;
    selectedRow.cells[3].innerHTML = formData.mail;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.poste;
    selectedRow.cells[6].innerHTML = formData.telephone;
    selectedRow.cells[7].innerHTML = formData.statut;
    selectedRow.cells[8].innerHTML = formData.pays;
  }  
}

function onDelete(td) {
  if (confirm('Vous etes sur de supprimer cet enregistrement ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      resetForm();
  }
}


