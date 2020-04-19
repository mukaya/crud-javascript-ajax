const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const mail = document.querySelector("#mail");
const poste = document.querySelector("#poste");
const statut = document.querySelector("#statut");
const pays = document.querySelector("#pays");

const btn = document.querySelector("#btn");
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

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
   tbody.innerHTML = "";
   axios.get('http://167.71.45.243:4000/api/employes?api_key=ulkzedq')
  .then((response)=>{
    datas = response.data;
    for(let i = 0; i < datas.length; i++){
      let tr = `
      <tr>
        <td>${datas[i]._id}</td>
        <td>${datas[i].nom}</td>
        <td>${datas[i].prenom}</td>
        <td>${datas[i].estMarie ? 'OUI' : 'NOM' }</td>
        <td>${datas[i].pays}</td>
        <td>${datas[i].email}</td>
        <td>${datas[i].poste}</td>
        <td>
          <button class="btn btn-primary" id="edit-${datas[i]._id}">Modifier</button>
          <button class="btn btn-danger" id="delete-${datas[i]._id}">Supprimer</button>
        </td>
      </tr>
      `;
      tbody.insertAdjacentHTML('beforeend', tr);

      const detete = document.getElementById(`delete-${datas[i]._id}`);
      detete.addEventListener('click',(event)=>{
        event.preventDefault();
        const confirmation = confirm('Tu est sur de supprimer cette enregistrement');
        if(confirmation){
          event.preventDefault();
          axios.delete(`http://167.71.45.243:4000/api/employes?api_key=ulkzedq/${datas[i]._id}}`)
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.error(err); 
          })
        }
      });
    }
   })
  .catch((error)=>{
    console.log(error);
  })
}
readFormData();
function insertNewRecord(){
  if (nom.value === "") {
    addTagSpanError(nom);
  } else if (prenom.value === "") {    
    addTagSpanError(prenom);
  } else if (mail.value === "") {    
    addTagSpanError(mail);
  } else if (poste.value === "") {     
    addTagSpanError(poste);
  }else if (statut.value === "") {     
    addTagSpanError(statut);
  } else if (pays.value === "") {     
    addTagSpanError(pays);
  } else {
    const data = {
      //_id: genererUnMatricule(),
      nom: nom.value,
      prenom: prenom.value,
      estMarie: statut.value,
      pays: pays.value,
      email: mail.value,
      poste: poste.value
    }
    axios.post('http://167.71.45.243:4000/api/employes?api_key=ulkzedq',data)
    .then(res => {
     console.log(res.data);
    })
    .catch(err => {
      console.error(err); 
    })
  }
}
function onFormSubmit(){
  insertNewRecord();
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


