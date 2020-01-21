let montantDu = 0;
let dureeJinglePiece = 2600; //en ms

function afficheGobelet() { //appui sur Go
    rideauLeve();
    document.getElementById('sonMachine').play();
    
    setTimeout(function() {
        document.getElementById("divGobelet").style.backgroundImage="url('images/gobelet.gif')";}, 5000)
    setTimeout(function() {
        document.getElementById("divGobelet").style.backgroundImage="url('images/gobPlein.jpg')";}, 20000 )
    document.getElementById("btGo").disabled = true;
    pieceActive(false);
    initMarquee();
}

function paye(montantPaye) { //affichage du montant restant du
    document.getElementById('sonPiece').play(); //joue le son du monnayeur
    montantDu  = montantDu - montantPaye; 
    pieceActive(false); //pieces disabled
    
    setTimeout(function() { //durée du jingle piece mp3 (ms)
        if (montantDu == 0 ) { // montant payé est juste
            document.getElementById("paye").innerHTML = "paiement: ok";
            document.getElementById("btGo").disabled = false;
        } else if (montantDu > 0) { // il reste à payer
            document.getElementById("paye").innerHTML = montantDu/10 + " EURO" + ((montantDu>=20) ? "S":"");
            document.getElementById("btGo").disabled = true;
            pieceActive(true);
        } else { // rendre la monnaie
            document.getElementById("paye").innerHTML =" Rendu: " + (-montantDu/10);
            document.getElementById("rendu").style.backgroundImage="url('images/coins.png')"; //faire jingle rendu
            document.getElementById("btGo").disabled = false;
            pieceActive(false);

        }
    }, dureeJinglePiece);
}

function aPayer(prixCommande) { //affichage du prix de la commande
    document.getElementById('sonBoutonChoix').play();
    document.getElementById("divGobelet").style.backgroungdImage = "images/gobelet.gif";
    montantDu = prixCommande;
    pieceActive(true);
    //document.getElementById("btGo").disabled = true;
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
    document.getElementById("divGobelet").style.backgroundImage="url('images/gob0.jpg')";
    document.getElementById('sonMachine').load();
}

function recupMonnaie() {
    document.getElementById("rendu").style.backgroundImage="none";
    initMarquee();
}

function initMarquee() { //affiche "choisir boisson" défilant
    document.getElementById("paye").style.display="none";
    document.getElementById("marquee1").style.display="block";
    document.getElementById("marquee1").innerHTML = "choisir boisson";
}

function rideauLeve() {
    document.getElementById("rideau").style.transform="scaleY(0.1)";
 }

 function rideauBaisse() {
    document.getElementById("rideau").style.transform="scaleY(1)";
 }