function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbg2 = document.querySelector(".bground2")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click",()=> launchModal(modalbg)));

// close modal
function closeModal(modalbg) {
  modalbg.style.display = "none";
}

let cross = document.querySelectorAll(".close");
cross.forEach((el)=>el.addEventListener("click", ()=>{
  closeModal(modalbg)
  closeModal(modalbg2)
}));
// launch modal form
function launchModal(modalbg) {
  window.scrollTo(0, 0);
  modalbg.style.display = "block";
}

// date today  in pickerdate max

const date = document.getElementById("birthDate");
date.max = new Date().toISOString().split("T")[0];

//validation nom
function verifNomPrenom(isPrenom) {
  const regexNomPrenom = /^([a-zA-Z'àâëéèê ôùûçËÀÂÉÈÔÙÛÇ-]{2,75})$/;
  const prenom = document.getElementById("first");
  const nom = document.getElementById("last");
  const erreurPrenom = ("Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
  const erreurNom = ("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  if (isPrenom){
    if  (regexNomPrenom.test(prenom.value)) {
      console.log("Prénom valide !");
      return true;
    } else {
      const spanErreur = document.querySelector(".erreurPrenom");
      let span = `<span> ${erreurPrenom} </span>`;
      spanErreur.innerHTML = span;
    }
  }else{
    if (regexNomPrenom.test(nom.value)) {
      console.log("Nom valide !");
      return true;
    } else {
      const spanErreur = document.querySelector(".erreurNom");
      let span = `<span> ${erreurNom} </span>`;
      spanErreur.innerHTML = span;
    }
  }

 
  return false;
}

//a l'entree de l'input prenom
let inputPrenon = document.getElementById("first");
inputPrenon.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurPrenom");
  span = ``;
  spanRemove.innerHTML = span;
}

)
//a l'entree de l'input nom
let inputNon = document.getElementById("last");
inputNon.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurNom");
  span = ``;
  spanRemove.innerHTML = span;
})

// a la sortie des input prenom et nom
inputPrenon.addEventListener("focusout",()=> verifNomPrenom (true));
inputNon.addEventListener("focusout",()=> verifNomPrenom (false));


//validation email
function verifMail() {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const erreurMail = ("Veuillez entrer un email Valide.");


  const email = document.getElementById("email");
  if (regexEmail.test(email.value)) {
    console.log("Adresse e-mail valide !");
    return true;
  } else {
    const mailErreur = document.querySelector(".erreurMail");
    let span = `<span> ${erreurMail} </span>`;
    mailErreur.innerHTML = span;
    return false;
  }

}

//a l'entree de l'input email
let inputEmail = document.getElementById("email");
inputEmail.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurMail");
  span = ``;
  spanRemove.innerHTML = span;
})

// a la sortie des input email
inputEmail.addEventListener("focusout", verifMail);


//validation date
function verifDate() {
  const regexDate = /^\d{4}[-](((0)[0-9])|((1)[0-2]))[-]([0-2][0-9]|(3)[0-1])$/;
  const erreurDate = ("Vous devez entrer votre date de naissance.");
  const date = document.getElementById("birthDate");
  console.log(date.value);
  if ((regexDate.test(date.value))&&(date.value>"1923-01-01")&&(date.value<date.max)) {
    console.log("Date de naissance valide !");
    return true;

  } else {
    const dateErreur = document.querySelector(".erreurDate");
    let span = `<span> ${erreurDate} </span>`;
    dateErreur.innerHTML = span;
    return false;
  }

}

//a l'entree de l'input date
let inputDate = document.getElementById("birthDate");
inputDate.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurDate");
  span = ``;
  spanRemove.innerHTML = span;
})


// a la sortie des input date
inputDate.addEventListener("focusout", verifDate);


//validation nombre tournois 
function verifNbrTournois() {
  const regexNbTournois = /([0-9]{1,2})/g;
  const nbTournois = document.getElementById("quantity");
  const erreurNbTournois = ("Veuillez indiquer un nombre de 0 à 99.");
  if (regexNbTournois.test(nbTournois.value)) {
    console.log("Nbr Tournois valide !");
    return true;
  } else {
    const nbTournoisErreur = document.querySelector(".erreurNbTournois");
    let span = `<span> ${erreurNbTournois} </span>`;
    nbTournoisErreur.innerHTML = span;
    return false;
  }
}
//a l'entree de l'input nombre tournois
let inputNbTournois = document.getElementById("quantity");
inputNbTournois.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurNbTournois");
  span = ``;
  spanRemove.innerHTML = span;
})

// a la sortie des input nombre tournois
inputNbTournois.addEventListener("focusout", verifNbrTournois);


//validation choix tournois
function verifChoixTournois() {
  const erreurChoixTournois = ("Vous devez choisir une option.")
  const choix = document.querySelectorAll('.checkbox-input[name="location"]');
  let auMoinsUnCoche = false;
  for (i = 0; i < choix.length; i++) {
    if (choix[i].checked == 1) {
      auMoinsUnCoche = true;
      break;
    }
  }
  if (auMoinsUnCoche) {
    console.log("Au moins un bouton radio est coché.");
    // si affichage erreur au premier submit diparition du message au deuxieme submit si un choix est coché
    const choixTournoisErreur = document.querySelector(".erreurChoixTournois");
    let span = ``;
    choixTournoisErreur.innerHTML = span;
    return true;
  } else {
    const choixTournoisErreur = document.querySelector(".erreurChoixTournois");
    let span = `<span> ${erreurChoixTournois} </span>`;
    choixTournoisErreur.innerHTML = span;
    return false;
  }

}

//verification conditions utilisation
function verifCodition() {
  const erreurCondition = ("Vous devez vérifier que vous acceptez les termes et conditions.");
  const choice = document.getElementById("checkbox1");
  if (choice.checked == 1) {
    console.log("conditions d'utilisation accépté");
    // si affichage erreur au premier submit diparition du message au deuxieme submit si la codition est coché
    const conditionsErreur = document.querySelector(".erreurCondition");
    let span = ``;
    conditionsErreur.innerHTML = span;
    return true;
  } else {
    const conditionsErreur = document.querySelector(".erreurCondition");
    let span = `<span> ${erreurCondition} </span>`;
    conditionsErreur.innerHTML = span;
    return false;
  }
}


let button = document.querySelector(".btn-submit");
button.addEventListener("click", () => {
   if(
  verifNomPrenom(true)&&verifNomPrenom(false)&&verifMail()&&verifDate()&&verifNbrTournois()&&verifChoixTournois()&&verifCodition()){
    
    launchModal(modalbg2);
    closeModal(modalbg);
    
  }
  
}

)
modalBtn2 = document.querySelector(".btn-modal2");
modalBtn2.addEventListener("click",()=>
closeModal(modalbg2))
