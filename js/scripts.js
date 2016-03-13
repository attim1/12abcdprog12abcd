
var risposta;
var risultato="giusto";
var punti = 0;
var n_Domanda = 1;

	var risposta1 = document.getElementById('rispostatext');
    var risposta2 = document.getElementById('rispostatext2');

    var linkDes = document.getElementById('apri_des');
    var bottoneNuova = document.form2["next"];
    var testoProssima = document.getElementById('testoNext');
    var casellaPunti = document.getElementById('textPunti');
    var testo_nDomanda = document.getElementById("text_nDomanda");
    var testoDomanda = document.getElementById("textDomanda");
    var desc_pop = document.getElementById("desc_w");
    var tipo = domande[n_Domanda][2];

function process() {

    if(tipo == 1){
        if(risposta1 == domande[n_Domanda][2]){
            //risultato == "GIUSTO!!";
            casellaPunti.style.background = "#32CD32";
            punti++;
            correct(nb);
            nb.style.background = "green";
        }
        else{
            //risultato == "SBAGLIATO!!";
            casellaPunti.style.background = "#FF0000";
            wrong(nb);
            nb.style.background = "red";
            for(var j=1; j<=3; j++){
                var sbutton = document.form1["button" + j];
                var gh = sbutton.value;
                if(gh == giusta[n_Domanda]){
                    sbutton.style.background = "green";
                }
            }
        }
    }

    if(tipo == 2){
        if((risposta1 == domande[n_Domanda][2][0] || risposta1 == domande[n_Domanda][2][1]) && (risposta2 == domande[n_Domanda][2][0] || risposta2 == domande[n_Domanda][2][1])){
            //risultato == "GIUSTO!!";
            casellaPunti.style.background = "#32CD32";
            punti++;
            correct(nb);
            nb.style.background = "green";
        }
        else{
            //risultato == "SBAGLIATO!!";
            casellaPunti.style.background = "#FF0000";
            wrong(nb);
            nb.style.background = "red";
            for(var j=1; j<=3; j++){
                var sbutton = document.form1["button" + j];
                var gh = sbutton.value;
                if(gh == giusta[n_Domanda]){
                    sbutton.style.background = "green";
                }
            }
        }
    }



    if(descrizione[n_Domanda][0] == 1){
        linkDes.style.display = "inline";
        desc_pop.innerHTML = descrizione[n_Domanda][1];
    }

    n_Domanda++;
    bottone1.disabled = true;
    bottone2.disabled = true;
    bottone3.disabled = true;
    testoProssima.style.display = "inline";
    bottoneNuova.style.display = "inline";

    casellaPunti.textContent =  punti + "/40";


    //######################
    //######################
    //		NEXT QUESTION
    //######################
    //######################
    bottoneNuova.onclick = function() {
        linkDes.style.display = "none";
        $('#dm').removeClass().addClass('animated flipOutX');
        $('#dm2').removeClass().addClass('animated flipOutYa');
        $('#dm3').removeClass().addClass('animated flipOutY');
        $('#dm1').removeClass().addClass('animated flipOutY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){


            if(n_Domanda<=40){

                if(n_Domanda==40){
                    var tesNew = document.getElementById("testoNext");

                    tesNew.textContent  = "FINISH -->"
                }

                testo_nDomanda.textContent = n_Domanda;

                testoProssima.style.display = "none";
                bottoneNuova.style.display = "none";
                linkDes.style.display = "none";

                bottone1.style.background = "#e67e22";
                bottone1.onmouseover = function() {
                    this.style.backgroundColor = "#FF983C";
                }
                bottone1.onmouseout = function() {
                    this.style.backgroundColor = "#e67e22";
                }
                bottone2.style.background = "#e67e22";
                bottone2.onmouseover = function() {
                    this.style.backgroundColor = "#FF983C";
                }
                bottone2.onmouseout = function() {
                    this.style.backgroundColor = "#e67e22";
                }
                bottone3.style.background = "#e67e22";
                bottone3.onmouseover = function() {
                    this.style.backgroundColor = "#FF983C";
                }
                bottone3.onmouseout = function() {
                    this.style.backgroundColor = "#e67e22";
                }

                bottone1.disabled = false;
                bottone2.disabled = false;
                bottone3.disabled = false;

                //NUOVE DOMANDE ----  ----  ----

                testoDomanda.innerHTML = domande[n_Domanda][0];

                var opzione1 = document.form1["button1"];
                opzione1.value = domande[n_Domanda][1];

                var opzione2 = document.form1["button2"];
                opzione2.value = domande[n_Domanda][2];

                var opzione3 = document.form1["button3"];
                opzione3.value = domande[n_Domanda][3];

            }
            else{
                localStorage.setItem("score", punti);
                window.location.href = "risultati.html";

            }

            $('#dm').removeClass().addClass('animated flipInX');
            $('#dm1').removeClass().addClass('animated flipInY');
            $('#dm2').removeClass().addClass('animated flipInYa');
            $('#dm3').removeClass().addClass('animated flipInY');
        });

    }
}
