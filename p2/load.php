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

require_once "config.php";
        
        $dbh = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        
        if (!isset($_SESSION["sessionID"])) {
            $username = htmlspecialchars($_POST["username"]);
            $sth = $dbh->prepare("SELECT password, id FROM user WHERE username = :JID");
            $sth->bindValue(':JID', $username);
            $sth->execute();
            $data = $sth->fetch();
            $password_hash = $data['password'];
                if (password_verify($_POST['password'], $password_hash)) {
                    if(isset($_POST['username'])){
                        $sessionID = $data['id'];
                        $_SESSION["sessionID"] = $sessionID;
                    }  
                    else{
                        header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
                    }
                }
                else{
                    header("Location: https://atdpsites.berkeley.edu/rsun/AIC/p2/signin.php");
                }
            }//password validation
        
        $sth = $dbh->prepare("SELECT * FROM saves");
        $sth->execute();
        $saa = $sth->fetchAll();


        
        $sth = $dbh->prepare("SELECT id, username FROM user WHERE id = :JID");
        $sth->bindValue(':JID', $_SESSION["sessionID"]);
        $sth->execute();
        $playerName = $sth->fetch();

        echo"<p>hello " . $playerName['username'] . "!</p>"; //announce player name

        
        echo "<form action=\"newsave.php\" method=\"post\">
            <label for=\"newsave\">New Save</label>";
        echo"<input type=\"submit\" class = \"subutton\" value = \"New Save\">
        </form>"; //Create New Save


        $sth = $dbh->prepare("SELECT * FROM unlocked");
        $sth->execute();
        $un = $sth->fetchAll();
        var_dump($un);

        echo "<br>";
        $sth = $dbh->prepare("SELECT saves.id, unlocked.level_unlocked FROM saves JOIN unlocked ON saves.id = unlocked.save_id WHERE user_id = :id");
        $sth->bindValue(':id', $_SESSION["sessionID"]);
        $sth->execute();
        $saves = $sth->fetchAll();
        var_dump($saves);

            echo "<form action=\"lvl1/r1.php\" method=\"post\">
            <label for=\"menu\">Select Save</label>
            <select name=\"menu\" id=\"menu\">";
            foreach($saves as $save){
                $unlocked = $save['level_unlocked'];
                $idd = $save['id'];
                echo"<option value=\"{$save['id']}\">This save has level $unlocked unlocked id is $idd</option>";
            }
        echo"<label for=\"select\">Select</label>
        <input type=\"submit\" class = \"subutton\">
        </form>"; //Select Save


        echo "<a href=\"https://atdpsites.berkeley.edu/rsun/AIC/p2/signout.php\">Sign Out</a><br>";
       
    ?>

</body>
</html>