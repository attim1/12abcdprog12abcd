
<?php
if(isset($_GET['nome']) && isset($_GET['score'])){
    $nome = $_GET['nome'];
    $score = $_GET['score'];

    $file = file_get_contents('./results.json', true);
    $data = json_decode($file,true);
    unset($file);
    //you need to add new data as next index of data.
    $data[] = array('nome' => $nome, 'score' => $score);
    $result=json_encode($data);
    file_put_contents('./results.json', $result);
    unset($result);

}

?>
