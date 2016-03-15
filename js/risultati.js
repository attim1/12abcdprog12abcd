function init(){
    if(localStorage.getItem("finito") != "si"){
        localStorage.removeItem("finito");
        window.location.href = "index.html";
    }
    else{
        localStorage.removeItem("finito");
        var punti = localStorage.getItem("score");

        var testoRisultato = document.getElementById('result');
        testoRisultato.textContent = punti + "/24";

        var img = window.document.getElementById("immagine");

        var bene= "images/good.jpg";
        var benino = "images/mmm.jpg";
        var male = "images/noo.jpg";

        if( punti > 18){
            img.src = bene;
        }
        else if (punti > 8 && punti < 19){
            img.src = benino;
        }
        else if (punti < 9){
            img.src= male;
        }
        else{
            img.src = benino;
        }

        inviaDati();
    }
};

function inviaDati(){

    var nomeU = localStorage.getItem("name");
    var scoreU = localStorage.getItem("score");

    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    var SendUrl = "results/results.php?nome=" + nomeU + "&score=" + scoreU;

    xmlhttp.open("GET", SendUrl, false);
    xmlhttp.send();


}
