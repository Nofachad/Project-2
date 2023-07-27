<?php
    session_start();

    require_once("../config.php");
    $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
    $obj = $_POST['obj'];
    
    $sth = $dbh->prepare("SELECT * FROM objects WHERE save_id = :idp");
    $sth->bindValue(':idp', $_SESSION["saveID"]);
    $sth->execute();
    $has = $sth->fetchAll();

    $y = true;//checks for if item is present

    foreach($has as $x){//start of foreach
        $obs =  $x['object_name'];
        if($obs == $obj){//checking to see if person has object already
            $y = false;
        }
    }
    if($y==true){
        $sth = $dbh->prepare("INSERT INTO objects (`save_id`, `object_name`) VALUES (:idp, :ob)");
        $sth->bindValue(':idp', $_SESSION["saveID"]);
        $sth->bindValue(':ob', $obj);
        $sth->execute();
        echo json_encode(["key"=>"You Found $obj"]);
    }
    else{
        echo json_encode(["key"=>"You already have this key"]);
    }
    

?>