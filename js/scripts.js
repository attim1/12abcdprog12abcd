
var risposta;
var risultato="giusto";
var punti = 0;
var n_Domanda = 1;

	var risposta1 = document.getElementById('rispostaText');
    var risposta2 = document.getElementById('rispostaText2');

    var linkDes = document.getElementById('apri_des');
    var bottoneNuova = document.form2["next"];
    var testoProssima = document.getElementById('testoNext');
    var casellaPunti = document.getElementById('textPunti');
    var testo_nDomanda = document.getElementById("text_nDomanda");
    var testoDomanda = document.getElementById("textDomanda");
    var desc_pop = document.getElementById("desc_w");
    var bottoneSi = document.form1["rispostaBtSi"];
    var bottoneNo = document.form1["rispostaBtNo"];
    var autore = document.getElementById('autore');

    var bottoneInvia = document.getElementById("bt_Invia");
localStorage.removeItem('risp');


    bottoneInvia.onclick = function() {
        var bottoneGen = "";
        var sbagliato = 0;
        var tipo = domande[n_Domanda][1];

        if(tipo == 1){
            if(risposta1.value.toString().toLowerCase() === domande[n_Domanda][2].toString().toLowerCase()){
                //risultato == "GIUSTO!!";
                casellaPunti.style.background = "#32CD32";
                punti++;
            }
            else{
                //risultato == "SBAGLIATO!!";
                casellaPunti.style.background = "#FF0000";
                sbagliato = 1;
            }
        }
        else if(tipo == 2){
            if((risposta1.value.toString().toLowerCase() === domande[n_Domanda][2][0].toString().toLowerCase() || risposta1.value.toString().toLowerCase() === domande[n_Domanda][2][1].toString().toLowerCase()) && (risposta2.value.toString().toLowerCase() === domande[n_Domanda][2][0].toString().toLowerCase() || risposta2.value.toString().toLowerCase() === domande[n_Domanda][2][1].toString().toLowerCase())){
                //risultato == "GIUSTO!!";
                casellaPunti.style.background = "#32CD32";
                punti++;
            }
            else{
                //risultato == "SBAGLIATO!!";
                casellaPunti.style.background = "#FF0000";
                sbagliato = 1;
            }
        }
        else if(tipo == 3){
            if(localStorage.getItem('risp') == domande[n_Domanda][2]){
                //risultato == "GIUSTO!!";
                if(domande[n_Domanda][2] == "si"){
                    bottoneGen = bottoneSi;
                }if(domande[n_Domanda][2] == "no"){
                    bottoneGen = bottoneNo;
                }
                bottoneGen.style.background = "green";
                casellaPunti.style.background = "#32CD32";
                punti++;
            }
            else{
                //risultato == "SBAGLIATO!!";
                if(domande[n_Domanda][2] == "no"){
                    bottoneGen = bottoneSi;
                }if(domande[n_Domanda][2] == "si"){
                    bottoneGen = bottoneNo;
                }
                bottoneGen.style.background = "red";
                casellaPunti.style.background = "#FF0000";
                //sbagliato = 1;
            }
        }


    /*if(descrizione[n_Domanda][0] == 1){
        linkDes.style.display = "inline";
        desc_pop.innerHTML = descrizione[n_Domanda][1];
    }*/

    if (sbagliato == 1){
        linkDes.style.display = "inline";
        desc_pop.innerHTML = descrizione[n_Domanda][0];
    }


    n_Domanda++;
    bottoneInvia.disabled = true;
    bottoneSi.disabled = true;
    bottoneNo.disabled = true;
    risposta1.disabled = true;
    risposta2.disabled = true;
    testoProssima.style.display = "inline";
    bottoneNuova.style.display = "inline";

    casellaPunti.textContent =  punti + "/24";

    }

    //bottoni si e no
    bottoneSi.onclick = function (){
        localStorage.removeItem('risp');
        localStorage.setItem('risp','si');
        bottoneInvia.disabled=false;
        bottoneSi.style.background = "blue";
        bottoneNo.style.background = "#e67e22";
        //bottoneSi.disabled=true;
        //bottoneNo.disabled=true;
    }
    bottoneNo.onclick = function (){
        localStorage.removeItem('risp');
        localStorage.setItem('risp','no');
        bottoneInvia.disabled=false;
        bottoneNo.style.background = "blue";
        bottoneSi.style.background = "#e67e22";
        //bottoneSi.disabled=true;
        //bottoneNo.disabled=true;
    }
    //fine bottoni si e no


    //######################
    //######################
    //		NEXT QUESTION
    //######################
    //######################
    bottoneNuova.onclick = function() {
        linkDes.style.display = "none";
        //$('#dm').removeClass().addClass('animated flipOutX');
        //$('#dm2').removeClass().addClass('animated flipOutYa');
        //$('#dm3').removeClass().addClass('animated flipOutY');
        //$('#dm1').removeClass().addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

            if(n_Domanda<=24){

                if(n_Domanda==24){
                    var tesNew = document.getElementById("testoNext");
                    tesNew.textContent  = "FINISCI -->";
                }

                testo_nDomanda.textContent = n_Domanda;

                testoProssima.style.display = "none";
                bottoneNuova.style.display = "none";
                linkDes.style.display = "none";

                bottoneInvia.style.background = "#e67e22";
                bottoneInvia.onmouseover = function() {
                    this.style.backgroundColor = "#FF983C";
                }
                bottoneInvia.onmouseout = function() {
                    this.style.backgroundColor = "#e67e22";
                }

                bottoneInvia.disabled = false;

                risposta1.value = "";
                risposta2.value = "";

                //NUOVE DOMANDE ----  ----  ----

                testoDomanda.innerHTML = domande[n_Domanda][0];
                autore.innerHTML = 'Autore: ' + domande[n_Domanda][3];


                var tipodopo = domande[n_Domanda][1];

                if(tipodopo == 1){
                    bottoneSi.style.display = "none";
                    bottoneNo.style.display = "none";
                    risposta1.style.display = "inline";
                    risposta1.disabled = false;
                    risposta2.style.display = "none";
                }

                if(tipodopo == 2){
                    bottoneSi.style.display = "none";
                    bottoneNo.style.display = "none";
                    risposta1.style.display = "inline";
                    risposta2.style.display = "inline";
                    risposta1.disabled = false;
                    risposta2.disabled = false;
                }

                if(tipodopo == 3){
                    bottoneSi.style.display = "inline";
                    bottoneNo.style.display = "inline";
                    risposta1.style.display = "none";
                    risposta2.style.display = "none";
                    bottoneSi.disabled=false;
                    bottoneNo.disabled=false;
                    bottoneInvia.disabled=true;
                }

            }
            else{
                localStorage.removeItem("score");
                localStorage.setItem("score", punti);
                localStorage.removeItem("finito");
                localStorage.setItem("finito", "si");
                window.location.href = "risultati.html";

            }

           // $('#dm').removeClass().addClass('animated flipInX');
           // $('#dm1').removeClass().addClass('animated flipInY');
           // $('#dm2').removeClass().addClass('animated flipInYa');
           // $('#dm3').removeClass().addClass('animated flipInY');
        }
