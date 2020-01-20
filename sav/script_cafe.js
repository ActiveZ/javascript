var montantDu=0;

function afficheGobelet() {
    document.getElementById('sonMachine').play();
    //document.getElementById("volet").style.display = "none";
    document.getElementById("img_cafe_gif").src="images/gobelet.gif";
    document.getElementById("img_cafe_gif").style.visibility = "visible";
    document.getElementById("btGo").disabled = true;
    document.getElementById("paye").style.display="none";
    document.getElementById("marquee1").style.display="block";
    document.getElementById("marquee1").innerHTML = "choisir boisson";
    pieceActive(false);
}

function paye(montantPaye) { //affichage du montant restant du
    if (montantDu<=0) {
        montantDu=0;
        exit;
    }

    document.getElementById('sonPiece').play();
    montantDu  = montantDu - montantPaye; 
    pieceActive(false);
    
    sleep(2600).then(() => { //durée du jingle piece mp3 (ms)
        if (montantDu <= 0 ) {
            document.getElementById("paye").innerHTML = "paiement: ok";
            document.getElementById("btGo").disabled = false;
        } else {         
            document.getElementById("paye").innerHTML = montantDu/10 + " EURO" + ((montantDu>=20) ? "S":"");
            document.getElementById("btGo").disabled = true;
            pieceActive(true);
        } 
    })
}

function aPayer(prixCommande) { //affichage du prix de la commande
    document.getElementById('sonBoutonChoix').play();
    document.getElementById("img_cafe_gif").style.visibility = "hidden";
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

function prendGobelet() { // rend l'image invisible
    document.getElementById("img_cafe_gif").style.visibility = "hidden";
    document.getElementById('sonMachine').load();
}

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}