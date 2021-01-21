export class Voiture{
    constructor(marque, model, type, color, prix){
        this.marque = marque; 
        this.model = model; 
        this.type = type;
        this.color = color; 
        this.prix = prix + '€';
    }
    info(){
        return `Ma ${this.marque} ${this.model} est de type ${this.type}. Elle est ${this.color} et vaux ${this.prix}.`;
    }
}


export class Personage{
    constructor(nom, prenom, argent){
        this.nom = nom; 
        this.prenom = prenom; 
        this.argent = argent; 
        this.articles = []; 
    }
    achete(article){
        console.log(`${this.prenom} veut acheter l'article suivant: ${article.nom}.`);
        console.log(`Prix de ${article.nom} = ${article.prix}`); 
        console.log(`Moyens financiers disponibles: ${this.argent}`);
        if(article.stock >= 1){
            if(this.argent >= article.prix){
                this.articles.push(article); 
                article.stock--;
                this.argent-=article.prix; 
                console.log(`L'article ${article.nom} a bien ete acheter`); 
                console.log(`Il te reste : ${this.argent} euros sur ton compte. `);
            }else{
                console.log(`Votre carte à été refusée. `); 
            }
        }else{
            console.log(`Pas de chance.. Il y en a plus en stock. `);
        }
        
    }
}

export class Articles{
    constructor(nom, prix, stock){
        this.nom = nom;
        this.prix = prix; 
        this.stock = stock; 
    }
}

export class Entreprise{
    constructor(nom, patron, employes){
        this.nom = nom; 
        this.patron = patron; 
        this.employes = []; 
    }
    listeEmpl(){
        return `Liste des employes de ${this.nom} : \n`+this.employes; 
    }
    addEmploye(employe){
        this.employes.push(employe);
        console.log(`${employe} a bien ete ajouter.`);
    }
    suppEmploye(employe){
        this.employes.splice(this.employes.indexOf(employe), 1); 
        console.log(`${employe} a bien ete supprime`);
    }
    felicitation(){
        const champion = this.employes[Math.floor(Math.random() * this.employes.length)]; 
        return `le champion de cette invocation de fonction est : ${champion}`; 
    }
}

export class Personnage{ // deux n 
    constructor(nom, prenom, argent, lieu){
        this.identite = {nom, prenom}; 
        this.argent = argent; 
        this.lieu = lieu;   
        this.humeur = Math.floor(Math.random() * 100) % 2 == 0 ?  true : false; // si true = positif si false = negatif; 
    }
    changeHumeur(){
        return this.humeur = this.humeur ? false : true; 
    }

    gagnerdelargent(){
        let hDeTravail = 8; 
        let timer; 
        let paye = 0;
        let passage = 1;
        
            timer = setInterval( () =>{
                if(hDeTravail >= 1){
                    console.log(`Salut ! Tu as gagné: ${paye} / heure no. ${passage}`);
                    passage++;
                    passage % 2 == 0 ? this.humeur ? console.log(`J'aime mon taff`) : console.log(`Je prefere mon lit!`) : null ;
                    let index = this.humeur ? 1.87 : 1.25;   
                    paye+=index; 
                    hDeTravail--;
                }else{
                    console.log(`Ta journée est terminée. Tu as gagné: ${Math.ceil(paye)} euro.`);
                    clearInterval(timer);
                }
            }, 2000)
        }
}

export let changelieu = (personne, destination) => {
    console.log(`${personne.identite.prenom} est ici: ${personne.lieu} et il se deplace vers ${destination}`);
    personne.lieu = destination; 
    console.log(`${personne.identite.prenom} est arrivé à sa destination: ${personne.lieu}.`);
}

