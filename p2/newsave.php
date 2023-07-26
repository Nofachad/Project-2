<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <?php

if (isset($_SESSION["sessionID"])) {
        require_once "config.php";

        $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        
        
        $sth = $dbh->prepare("INSERT INTO saves (`user_id`) VALUES (:idp)");
        $sth->bindValue(':idp', $_SESSION["sessionID"]);
        $sth->execute();//create new save element

        $sth = $dbh->prepare("SELECT id FROM saves ORDER BY ID DESC LIMIT 1");
        $sth->execute();
        $sav = $sth->fetch(); // selecting id from save table to add to unlocked

        $sth = $dbh->prepare("INSERT INTO unlocked (`save_id`, `level_unlocked`) VALUES (:saves, 0)");
        $sth->bindValue(':saves', $sav['id']);
        $sth->execute();//adding to unlocked table for a new save

        header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/load.php");

    }
    else{
        header("Location: https://atdpsites.berkeley.edu/rsun/AIC/x11/signin.php");
    }

    ?>

</body>
</html>