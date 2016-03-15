function init(){
    if(localStorage.getItem("finito") != "si"){
        localStorage.removeItem("finito");
        window.location.href = "index.html";
    }
    else{
        localStorage.removeItem("finito");
        var punti = localStorage.getItem("score");

        var testoRisultato = document.getElementById('result');
        testoRisultato.textContent = punti + "/40";

        var img = window.document.getElementById("immagine");

        var bene= "images/good.jpg";
        var benino = "images/mmm.jpg";
        var male = "images/noo.jpg";

        if( punti > 29){
            img.src = bene;
        }
        if (punti > 18 && punti < 30){
            img.src = benino;
        }
        if (punti < 19){
            img.src= male;
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
