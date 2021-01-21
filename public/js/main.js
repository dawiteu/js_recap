import {Voiture} from "./class/objet.js"; 

import {Personage} from "./class/objet.js";
import {Articles} from "./class/objet.js"; 

import {Entreprise} from "./class/objet.js"; 

import {Personnage} from "./class/objet.js"; 

import {changelieu} from "./class/objet.js";


let mavoiture = new Voiture("Audi", "a6", "break", "grise", 20000); 

console.log(mavoiture.info()); 


let personne1 = new Personage("Tararuj","Dawid", 50); 

let pomme = new Articles("pomme", 1.50, 4); 


console.log(personne1); 

console.log(pomme);

console.log('------');



//for(let i=0; i < 5; i++){
    personne1.achete(pomme);
    console.log(personne1, pomme); 
//}


console.log('------');

let mg = new Entreprise("Molengeek","Ibra"); 

console.log(mg);

mg.addEmploye("Ayhan"); 
mg.addEmploye("Andre"); 
mg.addEmploye("Nico"); 
mg.addEmploye("Coding16"); 
mg.addEmploye("Dawid");

console.log(mg.listeEmpl());

mg.suppEmploye("Andre"); 

console.log(mg.listeEmpl());



console.log(mg.felicitation());

console.log(mg.felicitation());

console.log(mg.felicitation());

console.log(mg.felicitation());

console.log('----------------------------------------------------');


let pers2 = new Personnage("Tararuj","Dawid", 50, "Maison"); 

console.log(pers2.humeur);

//console.log(pers2.changeHumeur());

changelieu(pers2, "molengeek");

pers2.gagnerdelargent(); 


