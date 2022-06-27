// tableau de pays 

const Pays = [
    "Mauritanie",
    "Algerie",
    "Tunisie",
    "Maroc",
    "Qatar",
    "Egypt",
    "Sudan",
    "Libye",
    "Emirates",
    "Saudi",
    "Yemen",
    "Oman",
    "Iraq",
    "Palestine",
    "Syrie",
    "Liban",
    "Jordan",
    "Bahrain",
    "Kuweit",
    
    
];

const Capitales = [
    "Nouakchott",
    "Alger",
    "Tunis",
    "Rabat",
    "Doha",
    "Caire",
    "Khartoum",
    "Tarablous",
    "Abu dhabi",
    "Riyad",
    "Sanaa",
    "Maskat",
    "Baghdad",
    "Al Quds",
    "Damas",
    "Beyrout",
    "Amman",
    "Manama",
    "Kuweit",
];

// Selecteur 
let messageDebut = document.querySelector(".message-debut");
let bouttonJouer = document.querySelector(".jouer");
let question = document.querySelector(".question");
let paysQuestion = document.querySelector(".paysQuestion");
let inputReponse = document.querySelector(".input");
let bouttonValider = document.querySelector(".valider");
let panneauResultat = document.querySelector(".Resultat");
let scoreValeur = document.querySelector(".scoreValeur");
let mention = document.querySelector(".mention");
let okBoutton = document.querySelector(".ok");
let container = document.querySelector(".container");
let body = document.querySelector("body");

// Dupliquer le tableau


let pays = [''];
let capitales = [''];
function dupliquer() {
    for( let i=0;i<Pays.length;i++){
        pays[i]=Pays[i];
        capitales[i]=Capitales[i];
    }
}

// Desactiver la copie coller

inputReponse.onpaste = function(){
    return false;
}

// Commencer le jeu 
let nbreJoue = 0;
let score = 0;

bouttonJouer.onclick = function(){
    this.remove();
    inputReponse.focus();
    messageDebut.innerHTML = "Allez-y";
    choisirPays();
    question.style.cssText = "display : block;";
    inputReponse.style.cssText = "display : block; ";
    bouttonValider.style.cssText = "display : block;";
}

dupliquer();

let randomCapitale;

function choisirPays(){
    inputReponse.focus();
    inputReponse.value = "";
    // deviner un pays
    let randomPays = pays[Math.floor(Math.random() * (pays.length))];
    // supprimer le pays
    let paysIndex = pays.indexOf(randomPays);
    randomCapitale = capitales[paysIndex];
    pays.splice(paysIndex,1);
    capitales.splice(paysIndex,1);

    //Afficher le pays en question 
    paysQuestion.innerHTML = randomPays;
    jouer();
    
}




function jouer() {
    bouttonValider.onclick = function() {
        nbreJoue++;
        if(inputReponse.value.toLowerCase() === randomCapitale.toLowerCase() ){
            score++;
       }
        if(nbreJoue === 6){
            
            scoreValeur.innerHTML = score;
            panneauResultat.style.cssText= "display : block;";
            
            if(score > 4){
                mention.innerHTML= "Excellent !";
                mention.className="good";
            }

            else if(score <= 4 && score >2 ){
                mention.innerHTML= " Passable !";
                mention.className="medium";
            }

            else {
                mention.innerHTML = "Faible";
                mention.className = "bad";
            }
        okBoutton.onclick = function() {
            panneauResultat.style.cssText = "display : none;";
            choisirPays();
            score=0;
            nbreJoue=0;
            if(pays.length <= 1){
                dupliquer();
            }
            console.log(pays);
            
        }


        }
        else {
             
            choisirPays();
        }
    }
}

// function jouer() {
    

//     let start = setInterval(() =>{
//         nbreJoue++;
//     bouttonValider.onclick = function(){
//         if(inputReponse.value.toLowerCase() === randomCapitale.toLowerCase() ){
//             score++;
//         }
//         if(nbreJoue > 6){
//             scoreValeur.innerHTML = score;
//             if(score<2){
//                 mention.innerHTML = "Null";

//             }
//         }
//         else {
//             choisirPays();
//         }

//         console.log("Validé");
//     }
        
//     }, 1000);
// }
