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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal
function closeModal() {
  modalbg.style.display = "none";
}
let cross = document.querySelector(".close");
cross.addEventListener("click", closeModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//validation prénom

//validation nom
function verifNomPrenom(){
  const regexNomPrenom = /^([a-zA-Z'àâëéèê ôùûçËÀÂÉÈÔÙÛÇ-]{1,75})$/;
  const prenom = document.getElementById("first");
  const nom = document.getElementById("last");
  if (regexNomPrenom.test(prenom.value)) {
    console.log("Prénom valide !");
  } else {
    console.log("Prénom invalide.");
  }
  if (regexNomPrenom.test(nom.value)) {
    console.log("Nom valide !");
  } else {
    console.log("Nom invalide.");
  }
}


//validation email
function verifMail() {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  const email = document.getElementById("email");
  if (regexEmail.test(email.value)) {
    console.log("Adresse e-mail valide !");
  } else {
    console.log("Adresse e-mail invalide.");
  }

}


let button = document.querySelector(".btn-submit");
button.addEventListener("click",()=>{
  verifNomPrenom();
  verifMail();
}
  
)
