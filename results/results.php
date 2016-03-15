
<?php
if(isset($_GET['nome'] && isset($_GET['score'])){
    $nome = $_GET['nome'];
    $score = $_GET['score'];

    $myfile = fopen("risultati.txt", "w") or die("Unable to open file!");

    $txt = "nome = " . $nome;
    fwrite($myfile, $txt);

    $txt = " score = " . $score;
    fwrite($myfile, $txt);

    fclose($myfile);
}


?>
