const form = document.querySelector('#form');
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const mail = document.querySelector('#mail');
const age = document.querySelector('#age');
const poste = document.querySelector('#poste');
const telephone = document.querySelector('#telephone');
const statut = document.querySelector('#statut');
const pays = document.querySelector('#pays');

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

const errorNom = document.querySelector('.errorNom');
const errorPrenom = document.querySelector('.errorPrenom');
const errorMail = document.querySelector('.errorMmail');
const errorPoste = document.querySelector('.errorPoste');
const errorTelephone = document.querySelector('.telephone');
const errorStatut = document.querySelector('.errorStatut');
const errorPays = document.querySelector('.errorPays');

const inputs = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');

const employees = [];

/**
 * genererUnMatricule permet de generer un matricule unique pour chaque employe
 * @return {Number} de 0 à 1000000000
 */
const genererUnMatricule = ()=>{
    return  Math.round(Math.random() * 1000000000);
};

const videLesChampsDuFormulaire = ()=>{
    nom.value = '',
    prenom.value = '',
    mail.value = '',
    age.value = '',
    poste.value = '',
    telephone.value = '',
    statut.value = '',
    pays.value = ''
}

form.addEventListener('submit',(event)=>{
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
    
    // event.preventDefault();
    // if(inputs.length > 0){
    //     for(let i = 0; i < inputs.length; i++){
    //         if(inputs[i].value === ''){
    //             spans.forEach((span)=>{
    //                 span.textContent = "Champs vide";
    //                 span.classList.add('error');
    //             });
    //         }
    //     }
    // }
    // if(inputs.length <= 0){
    //     console.log('bonjour mon ami');
    // }

});


