const btn = document.querySelector('#btn');

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

const employees = [];

/**
 * genererUnMatricule permet de generer un matricule unique pour chaque employe
 * @return {Number} de 0 à 1000000000
 */
const genererUnMatricule = ()=>{
    return  Math.round(Math.random() * 1000000000);
};
if(!nom.value.length){

}
btn.addEventListener('click',(event)=>{
    tbody.innerHTML= '';
    event.preventDefault();
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
});
