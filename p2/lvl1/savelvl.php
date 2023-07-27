<?php
    session_start();

    require_once("../config.php");
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $obj = $_POST['obj'];
    

        $sth = $dbh->prepare("UPDATE unlocked SET `level_unlocked` = 1 WHERE `save_id` = :idp");
        $sth->bindValue(':idp', $_SESSION["saveID"]);
        $sth->execute();
        echo json_encode(["key"=>"level $obj"]);
    

?>