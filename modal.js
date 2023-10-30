function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let mainNav = document.querySelector(".icon");
mainNav.addEventListener("click", editNav);
// DOM Elements
const modalInscription = document.querySelector(".bground");
const modalConfirm = document.querySelector(".bground2")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", () => launchModal(modalInscription)));

// close modal
function closeModal(modalInscription) {
  modalInscription.style.display = "none";
}

let cross = document.querySelectorAll(".close");
cross.forEach((el) => el.addEventListener("click", () => {
  closeModal(modalInscription)
  closeModal(modalConfirm)
}));
// launch modal form
function launchModal(modalInscription) {
  window.scrollTo(0, 0);
  modalInscription.style.display = "block";
}
//validation nom
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
function verifNomPrenom(isPrenom) {
  const regexNomPrenom = /^([a-zA-Z'àâëéèê ôùûçËÀÂÉÈÔÙÛÇ-]{2,75})$/;

  const erreurPrenom = ("Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
  const erreurNom = ("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  if (isPrenom) {
    if (regexNomPrenom.test(prenom.value)) {
      return true;
    } else {
      const spanErreur = document.querySelector(".erreurPrenom");
      let span = `<span> ${erreurPrenom} </span>`;
      spanErreur.innerHTML = span;
    }
  } else {
    if (regexNomPrenom.test(nom.value)) {
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
prenom.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurPrenom");
  span = ``;
  spanRemove.innerHTML = span;
}
)
//a l'entree de l'input nom
nom.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurNom");
  span = ``;
  spanRemove.innerHTML = span;
})
// a la sortie des input prenom et nom
prenom.addEventListener("focusout", () => verifNomPrenom(true));
nom.addEventListener("focusout", () => verifNomPrenom(false));


//validation email
const email = document.getElementById("email");
function verifMail() {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const erreurMail = ("Veuillez entrer un email Valide.");
  if (regexEmail.test(email.value)) {
    return true;
  } else {
    const mailErreur = document.querySelector(".erreurMail");
    let span = `<span> ${erreurMail} </span>`;
    mailErreur.innerHTML = span;
    return false;
  }
}
//a l'entree de l'input email
email.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurMail");
  span = ``;
  spanRemove.innerHTML = span;
})
// a la sortie des input email
email.addEventListener("focusout", verifMail);


//validation date
const date = document.getElementById("birthDate");

function verifDate() {
  const regexDate = /^\d{4}[-](((0)[0-9])|((1)[0-2]))[-]([0-2][0-9]|(3)[0-1])$/;
  const erreurDate = ("Vous devez entrer votre date de naissance.");
  date.max = new Date().toISOString().split("T")[0];
  if ((regexDate.test(date.value)) && (date.value > "1923-01-01") && (date.value < date.max)) {
    return true;
  } else {
    const dateErreur = document.querySelector(".erreurDate");
    let span = `<span> ${erreurDate} </span>`;
    dateErreur.innerHTML = span;
    return false;
  }
}
//a l'entree de l'input date
date.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurDate");
  span = ``;
  spanRemove.innerHTML = span;
})
// a la sortie des input date
date.addEventListener("focusout", verifDate);

//validation nombre tournois 
const nbTournois = document.getElementById("quantity");
function verifNbrTournois() {
  const regexNbTournois = /([0-9]{1,2})/g;
  const erreurNbTournois = ("Veuillez indiquer un nombre de 0 à 99.");
  if (regexNbTournois.test(nbTournois.value)) {
    return true;
  } else {
    const nbTournoisErreur = document.querySelector(".erreurNbTournois");
    let span = `<span> ${erreurNbTournois} </span>`;
    nbTournoisErreur.innerHTML = span;
    return false;
  }
}
//a l'entree de l'input nombre tournois
nbTournois.addEventListener("focusin", () => {
  const spanRemove = document.querySelector(".erreurNbTournois");
  span = ``;
  spanRemove.innerHTML = span;
})
// a la sortie des input nombre tournois
nbTournois.addEventListener("focusout", verifNbrTournois);


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
    // si affichage erreur au premier submit diparition du message au deuxieme submit si la condition est coché
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
function resetData() {
  document.getElementById("resetData").reset();
}
let button = document.querySelector(".btn-submit");
button.addEventListener("click", () => {
  if (
    verifNomPrenom(true) && verifNomPrenom(false) && verifMail() && verifDate() && verifNbrTournois()
    && verifChoixTournois() && verifCodition()) {
    resetData();
    launchModal(modalConfirm);
    closeModal(modalInscription);

    reset();
  }
}

)
let modalBtn2 = document.querySelector(".btn-modal2");
modalBtn2.addEventListener("click", () =>
  closeModal(modalConfirm))