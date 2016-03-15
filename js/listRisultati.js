function init(){
    $.getJSON( "results/results.json", function( json ) {

        var d = document.getElementById("t");
        var lun = json.length;

        var i=0;

        var aa = json.sort(function(a, b){
            return a.score-b.score;
        })
        aa.reverse()

        //############################

        var table = document.getElementById("k");

        for(i=0; i<=lun; i++){


            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.width = '75';
            cell2.width = '200';

            if(i==0){
                cell1.innerHTML = "";
                cell2.innerHTML = "<b>CLASSE</b>";
                cell3.innerHTML = "<b>PUNTEGGIO</b>";
            }
            else{
                cell1.innerHTML = i + ".";
                cell2.innerHTML = json[i-1].nome;
                cell3.innerHTML = json[i-1].score + " / 24";

            }


        }

    });
}
