let montantDu = 0;
let dureeJingle = 2600; //en ms

function afficheGobelet() { //appui sur Go
    rideauLeve();
    document.getElementById('sonMachine').play();
    document.getElementById("divGobelet").style.backgroundImage="url('images/gobelet.gif')";
    document.getElementById("btGo").disabled = true;
    document.getElementById("paye").style.display="none";
    document.getElementById("marquee1").style.display="block";
    document.getElementById("marquee1").innerHTML = "choisir boisson";
    pieceActive(false);
    document.getElementById("rendu").style.backgroundImage="url('images/coins.png')";
}

function paye(montantPaye) { //affichage du montant restant du
    let aRendre = 0; //monnaie à rendre
    if (montantDu <= 0) {
        aRendre=(-montantDu);//todo: ttt rendu monnaie
        montantDu = 0; 
        exit;
    }

    document.getElementById('sonPiece').play(); //joue le son du monnayeur
    montantDu  = montantDu - montantPaye; 
    pieceActive(false); //pieces disabled
    
    setTimeout(function() { //durée du jingle piece mp3 (ms)
        if (montantDu <= 0 ) {
            document.getElementById("paye").innerHTML = "paiement: ok";
            document.getElementById("btGo").disabled = false;
        } else {         
            document.getElementById("paye").innerHTML = montantDu/10 + " EURO" + ((montantDu>=20) ? "S":"");
            document.getElementById("btGo").disabled = true;
            pieceActive(true);
        } 
    }, dureeJingle);
}

function aPayer(prixCommande) { //affichage du prix de la commande
    document.getElementById('sonBoutonChoix').play();
    document.getElementById("divGobelet").style.backgroungdImage = "images/gobelet.gif";
    montantDu = prixCommande;
    pieceActive(true);
    document.getElementById("btGo").disabled = true;
    document.getElementById("marquee1").style.display="none";
    document.getElementById("paye").style.display="block";       
    document.getElementById("paye").innerHTML = prixCommande/10 + " EURO" + ((prixCommande>=20) ? "S":"");
}

function pieceActive (etat) { //change statut enabled des pièces
    var x = document.getElementsByClassName("piece");
    var i;
    for (i = 0; i < x.length; i++) {x[i].disabled = !etat;}
}

function prendGobelet() { // rend l'image gobelet invisible et coupe le son
    rideauBaisse();
    document.getElementById("divGobelet").style.backgroundImage="none";
    document.getElementById('sonMachine').load();
}

function recupMonnaie() {
    document.getElementById("rendu").style.backgroundImage="none";
}

function rideauLeve() {
    document.getElementById("rideau").style.transform="scaleY(0.1)"; /* Standard syntax */
 }

 function rideauBaisse() {
    document.getElementById("rideau").style.transform="scaleY(1)"; /* Standard syntax */
 }