const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const mail = document.querySelector("#mail");
const poste = document.querySelector("#poste");
const statut = document.querySelector("#statut");
const pays = document.querySelector("#pays");

const btn = document.querySelector("#btn");
const btnModifier = document.querySelector("#btnModifier");

const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

btnModifier.style.display = "none";
let url = "http://167.71.45.243:4000/api/employes?api_key=ulkzedq";

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
}

function addTagSpanError(name) {
  let span = document.createElement("span");
  span.classList.add("span");
  name.parentElement.appendChild(span);
  span = document.querySelector(".span");
  if (span.textContent === "") {
    span.textContent = "Champ vide";
    span.classList.add("error");
  }
}
readFormData();
function readFormData() {
  //tbody.innerHTML = "";
  axios
    .get(`${url}`)
    .then((response) => {
      datas = response.data;
      for (let i = 0; i < datas.length; i++) {
        let tr = `
      <tr>
        <td>${datas[i]._id}</td>
        <td>${datas[i].nom}</td>
        <td>${datas[i].prenom}</td>
        <td>${datas[i].estMarie ? "OUI" : "NOM"}</td>
        <td>${datas[i].pays}</td>
        <td>${datas[i].email}</td>
        <td>${datas[i].poste}</td>
        <td>
          <button class="btn btn-primary" id="edit-${
            datas[i]._id
          }">Modifier</button>
          <button class="btn btn-danger" id="delete-${
            datas[i]._id
          }">Supprimer</button>
        </td>
      </tr>
      `;
        tbody.insertAdjacentHTML("beforeend", tr);

        const detete = document.getElementById(`delete-${datas[i]._id}`);
        detete.addEventListener("click", (event) => {
          event.preventDefault();
          const confirmation = confirm(
            "Tu est sur de supprimer cette enregistrement"
          );
          if (confirmation) {
            event.preventDefault();
            axios
              .delete(
                `http://167.71.45.243:4000/api/employes/${datas[i]._id}?api_key=ulkzedq`
              )
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.error(err);
              });
          }
        });

        const modifier = document.getElementById(`edit-${datas[i]._id}`);
          modifier.addEventListener("click", (event) => {
          event.preventDefault();
          btnModifier.style.display = "block";
          btn.style.display = "none";
          nom.value = datas[i].nom;
          prenom.value = datas[i].prenom;
          mail.value = datas[i].email;
          statut.value = datas[i].estMarie ? "1" : "0";
          poste.value = datas[i].poste;
          pays.value = datas[i].pays;
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
const donnees = {
  nom: nom.value,
  prenom: prenom.value,
  estMarie: true,
  pays: pays.value,
  email: mail.value,
  poste: poste.value,
  numeroTelephone: ''
};
btn.addEventListener('click',(event)=>{
  event.preventDefault();
  if (nom.value === "") {
    addTagSpanError(nom);
  } else if (prenom.value === "") {
    addTagSpanError(prenom);
  } else if (mail.value === "") {
    addTagSpanError(mail);
  } else if (poste.value === "") {
    addTagSpanError(poste);
  } else if (statut.value === "") {
    addTagSpanError(statut);
  } else if (pays.value === "") {
    addTagSpanError(pays);
  } else {
    axios({
      method: "post",
      url: 'http://167.71.45.243:4000/api/employes?api_key=ulkzedq',
      data: donnees,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
});

  btnModifier.addEventListener('click',(event)=>{
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
      event.preventDefault();
      axios.put('http://167.71.45.243:4000/api/employes/5e72a48a33ac7a12f2e121b4?api_key=ulkzedq',donnees)
      .then(function(response){
          console.log(response.data)
      })
      .catch(function(erreurs){
          console.log(erreurs)
      })
    }
  });


