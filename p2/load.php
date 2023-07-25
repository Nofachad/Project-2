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
                        echo "<p>" . $_SESSION["sessionID"] . "</p>";
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

        var_dump($saa);

        
        $sth = $dbh->prepare("SELECT id, username FROM user WHERE id = :JID");
        $sth->bindValue(':JID', $_SESSION["sessionID"]);
        $sth->execute();
        $playerName = $sth->fetch();

        echo"<p>hello " . $playerName['username'] . "!</p>"; //announce player name

        
        echo "<form action=\"newsave.php\" method=\"post\">
            <label for=\"newsave\">New Save</label>";
        echo"<input type=\"submit\" class = \"subutton\" value = \"New Save\">
        </form>"; //Create New Save


        $sth = $dbh->prepare("SELECT saves.id, user.username, unlocked.level_unlocked FROM saves JOIN user ON saves.user_id = user.id JOIN unlocked ON saves.id = unlocked.save_id WHERE user.id = :id");
        $sth->bindValue(':id', $_SESSION["sessionID"]);
        $sth->execute();
        $saves = $sth->fetchAll();

        var_dump($saves);
            echo "<form action=\"menu.php\" method=\"get\">
            <label for=\"menu\">Select Save</label>
            <select name=\"menu\" id=\"menu\">";
            foreach($saves as $save){
                $unlocked = $save['level_unlocked'];
                echo"<option value=\"{$saves['id']}\">This save has the $unlocked level unlocked</option>";
            }
        echo"<label for=\"select\">Select</label>
        <input type=\"submit\" class = \"subutton\">
        </form>"; //Select Save


        echo "<a href=\"https://atdpsites.berkeley.edu/rsun/AIC/p2/signout.php\">Sign Out</a><br>";
       
    ?>

</body>
</html>